import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import SiteLayout from '../../components/layout/SiteLayout/SiteLayout';
import { FORM_STEP, useDeleteAccount } from './use-delete-account';
import styles from './DeleteAccount.module.css';

const APP_NAME = 'SAHAYY';
const DEVELOPER_NAME = 'SHAW Technologies Private Limited';

const DELETED_ON_CONFIRM = [
  'Account record (email, display name, avatar)',
  'Google sign-in identity',
  'Sessions and refresh tokens',
  'Saved locations and civic address',
  'Interest areas and topic preferences',
  'Bookmarks and feed impressions',
  'Device push tokens and notification delivery records',
];

const KEPT_AFTER_DELETE = [
  'Feedback messages, with your user id removed so they are no longer linked to you',
  'Public news and civic content, which is not personal data',
];

export function DeleteAccount() {
  const {
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
  } = useDeleteAccount();

  return (
    <SiteLayout mainId="delete-account-top">
      <div className={styles.page}>
        <div className="wrap">
          <Link to="/" className={styles.backLink}>
            ← Back to home
          </Link>

          <header className={styles.hero}>
            <p className={styles.kicker}>
              {APP_NAME} · {DEVELOPER_NAME}
            </p>
            <h1 className={styles.title}>Delete your SAHAYY account</h1>
            <p className={styles.lead}>
              Use this page to request that your SAHAYY account and associated
              personal data are deleted. Deletion is immediate once you confirm.
            </p>
          </header>

          <section className={styles.section} aria-labelledby="steps-heading">
            <h2 id="steps-heading" className={styles.sectionHeading}>
              How to delete your account
            </h2>
            <ol className={styles.steps}>
              <li>
                <strong>If you still have the app:</strong> open SAHAYY, go to
                Profile › Delete Account, and confirm. That deletes your
                account immediately.
              </li>
              <li>
                <strong>If you have uninstalled the app:</strong> enter the
                Google email on your SAHAYY account below. We email a 6-digit
                code. Enter that code to permanently delete the account. This
                cannot be undone.
              </li>
            </ol>
          </section>

          <div className={styles.grid}>
            <section className={styles.card} aria-labelledby="deleted-heading">
              <h2 id="deleted-heading" className={styles.cardTitle}>
                Deleted immediately
              </h2>
              <ul className={styles.list}>
                {DELETED_ON_CONFIRM.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className={styles.card} aria-labelledby="kept-heading">
              <h2 id="kept-heading" className={styles.cardTitle}>
                Kept after deletion
              </h2>
              <ul className={styles.list}>
                {KEPT_AFTER_DELETE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.retention}>
                There is no extra retention period. Unused codes expire in 5
                minutes.
              </p>
            </section>
          </div>

          <section className={styles.formCard} aria-labelledby="form-heading">
            <h2 id="form-heading" className={styles.cardTitle}>
              Request deletion by email
            </h2>
            {step === FORM_STEP.SUCCESS ? (
              <p className={styles.success} role="status">
                If an account existed for that email, it has been deleted.
              </p>
            ) : null}

            {step === FORM_STEP.EMAIL ? (
              <form onSubmit={handleEmailSubmit} className={styles.form}>
                <label className={styles.label} htmlFor="delete-email">
                  Google email on your account
                </label>
                <input
                  id="delete-email"
                  className={styles.input}
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending code…' : 'Send verification code'}
                </Button>
              </form>
            ) : null}

            {step === FORM_STEP.CODE ? (
              <form onSubmit={handleConfirm} className={styles.form}>
                <p className={styles.sentTo}>
                  Enter the 6-digit code sent to {email}.
                </p>
                <label className={styles.label} htmlFor="delete-code">
                  Verification code
                </label>
                <input
                  id="delete-code"
                  className={styles.input}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  required
                />
                <div className={styles.actions}>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Deleting…' : 'Delete my account'}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleResend}
                    disabled={isSubmitting || resendInSeconds > 0}
                  >
                    {resendInSeconds > 0
                      ? `Resend code in ${resendInSeconds}s`
                      : 'Resend code'}
                  </Button>
                </div>
              </form>
            ) : null}

            {error ? (
              <p className={styles.error} role="alert">
                {error}
              </p>
            ) : null}

            <p className={styles.policy}>
              See the{' '}
              <Link to="/privacy-policy">privacy policy</Link> for the full
              data inventory.
            </p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}

export default DeleteAccount;
