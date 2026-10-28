import { useCallback, useEffect, useState } from 'react';

export const FORM_STEP = {
  EMAIL: 'email',
  CODE: 'code',
  SUCCESS: 'success',
};

function apiBaseUrl() {
  const raw = import.meta.env.VITE_API_URL;
  if (typeof raw !== 'string' || raw.trim().length === 0) {
    return '';
  }
  return raw.trim().replace(/\/$/, '');
}

function messageFromBody(body) {
  if (typeof body?.message === 'string' && body.message.length > 0) {
    return body.message;
  }
  return 'Something went wrong. Try again.';
}

async function readError(res) {
  try {
    const body = await res.json();
    const nested = body?.message;
    if (
      nested &&
      typeof nested === 'object' &&
      typeof nested.retryAfterSeconds === 'number'
    ) {
      return {
        message:
          typeof nested.message === 'string'
            ? nested.message
            : 'Wait before requesting another code',
        retryAfterSeconds: nested.retryAfterSeconds,
      };
    }
    if (typeof body?.retryAfterSeconds === 'number') {
      return {
        message: messageFromBody(body),
        retryAfterSeconds: body.retryAfterSeconds,
      };
    }
    return { message: messageFromBody(body) };
  } catch {
    return { message: 'Something went wrong. Try again.' };
  }
}

async function postDeletion(path, payload) {
  const base = apiBaseUrl();
  if (!base) {
    throw new Error('Account deletion is not configured.');
  }

  const res = await fetch(`${base}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    credentials: 'omit',
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await readError(res);
    const err = new Error(error.message);
    err.retryAfterSeconds = error.retryAfterSeconds;
    err.status = res.status;
    throw err;
  }

  if (res.status === 204) {
    return null;
  }
  return res.json();
}

export function useDeleteAccount() {
  const [step, setStep] = useState(FORM_STEP.EMAIL);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendInSeconds, setResendInSeconds] = useState(0);

  useEffect(() => {
    if (resendInSeconds <= 0) {
      return undefined;
    }
    const timer = window.setTimeout(() => {
      setResendInSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [resendInSeconds]);

  const startCooldown = useCallback((seconds) => {
    if (typeof seconds === 'number' && seconds > 0) {
      setResendInSeconds(Math.ceil(seconds));
    }
  }, []);

  const requestCode = useCallback(
    async (nextEmail, { isResend } = { isResend: false }) => {
      if (isSubmitting) {
        return;
      }
      setError('');
      setIsSubmitting(true);
      try {
        const result = await postDeletion('/auth/account/deletion/start', {
          email: nextEmail,
        });
        setEmail(nextEmail);
        setStep(FORM_STEP.CODE);
        if (!isResend) {
          setCode('');
        }
        startCooldown(result?.retryAfterSeconds ?? 30);
      } catch (caught) {
        if (typeof caught.retryAfterSeconds === 'number') {
          startCooldown(caught.retryAfterSeconds);
        }
        setError(
          caught instanceof Error
            ? caught.message
            : 'Something went wrong. Try again.',
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, startCooldown],
  );

  const handleEmailSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const trimmed = email.trim();
      if (trimmed.length === 0) {
        setError('Enter the Google email on your SAHAYY account.');
        return;
      }
      void requestCode(trimmed, { isResend: false });
    },
    [email, requestCode],
  );

  const handleResend = useCallback(() => {
    if (resendInSeconds > 0 || isSubmitting) {
      return;
    }
    void requestCode(email, { isResend: true });
  }, [email, isSubmitting, requestCode, resendInSeconds]);

  const handleConfirm = useCallback(
    async (event) => {
      event.preventDefault();
      if (isSubmitting) {
        return;
      }
      const trimmedCode = code.trim();
      if (!/^\d{6}$/.test(trimmedCode)) {
        setError('Enter the 6-digit code from your email.');
        return;
      }
      setError('');
      setIsSubmitting(true);
      try {
        await postDeletion('/auth/account/deletion/confirm', {
          email,
          code: trimmedCode,
        });
        setStep(FORM_STEP.SUCCESS);
        setCode('');
      } catch (caught) {
        const status = caught.status;
        setError(
          status === 401
            ? 'Invalid or expired code'
            : caught instanceof Error
              ? caught.message
              : 'Something went wrong. Try again.',
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [code, email, isSubmitting],
  );

  return {
    step,
    email,
    code,
    error,
    isSubmitting,
    resendInSeconds,
    setEmail,
    setCode,
    handleEmailSubmit,
    handleResend,
    handleConfirm,
  };
}
