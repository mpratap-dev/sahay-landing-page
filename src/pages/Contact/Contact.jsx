import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../../components/layout/SiteLayout/SiteLayout';
import styles from './Contact.module.css';

/* ─── Contact data ─────────────────────────────────────────────────────── */

const ENTITY = {
  NAME: 'Mahesh Pratap',
  DESIGNATION: 'Developer & Founder',
  ORGANIZATION: 'SHAW Technologies Private Limited',
  APP: 'SAHAYY – Smart Access & Holistic Assistance for You',
  LOCATION: 'New Delhi, Delhi, India',
  ENTITY_EMAIL: 'mahesh.pratap@sahayy.in',
  SUPPORT_EMAIL: 'support@sahayy.in',
  GRIEVANCE_EMAIL: 'grievance@sahayy.in',
  ACKNOWLEDGMENT_SLA: 'Within 24 to 48 hours',
  RESOLUTION_SLA: 'Within 15 to 30 calendar days',
};

const CONTACT_SECTIONS = [
  {
    id: 'entity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    badge: 'Google Play — Legal Entity',
    title: 'Developer & Legal Entity Contact',
    description:
      'Official contact for regulatory, legal, and developer-identity verification purposes (including Google Play Console and DPDP Act 2023 compliance).',
    fields: [
      { label: 'Legal Entity', value: ENTITY.NAME },
      { label: 'Designation', value: ENTITY.DESIGNATION },
      { label: 'Organisation', value: ENTITY.ORGANIZATION },
      { label: 'Application', value: ENTITY.APP },
      { label: 'Location', value: ENTITY.LOCATION },
      {
        label: 'Contact Email',
        value: ENTITY.ENTITY_EMAIL,
        href: `mailto:${ENTITY.ENTITY_EMAIL}`,
        isEmail: true,
        isPrimary: true,
      },
    ],
    cta: {
      href: `mailto:${ENTITY.ENTITY_EMAIL}?subject=SAHAYY%20Developer%20Inquiry`,
      label: 'Email Legal Entity',
    },
  },
  {
    id: 'support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    badge: 'App Support',
    title: 'General Support & Feedback',
    description:
      'For app bugs, account questions, feature requests, or general feedback about the SAHAYY platform.',
    fields: [
      {
        label: 'Support Email',
        value: ENTITY.SUPPORT_EMAIL,
        href: `mailto:${ENTITY.SUPPORT_EMAIL}`,
        isEmail: true,
      },
      { label: 'Response Time', value: ENTITY.ACKNOWLEDGMENT_SLA },
    ],
    cta: {
      href: `mailto:${ENTITY.SUPPORT_EMAIL}?subject=SAHAYY%20Support%20Request`,
      label: 'Email Support',
    },
  },
  {
    id: 'grievance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    badge: 'DPDP Act 2023',
    title: 'Grievance Redressal Officer',
    description:
      'For privacy-related complaints and data protection inquiries under the Digital Personal Data Protection Act, 2023 and IT Act, 2000.',
    fields: [
      {
        label: 'Grievance Email',
        value: ENTITY.GRIEVANCE_EMAIL,
        href: `mailto:${ENTITY.GRIEVANCE_EMAIL}`,
        isEmail: true,
      },
      { label: 'Acknowledgment', value: ENTITY.ACKNOWLEDGMENT_SLA },
      { label: 'Resolution SLA', value: ENTITY.RESOLUTION_SLA },
    ],
    cta: {
      href: `mailto:${ENTITY.GRIEVANCE_EMAIL}?subject=SAHAYY%20Privacy%20Grievance`,
      label: 'Email Grievance Officer',
    },
  },
];

/* ─── Component ────────────────────────────────────────────────────────── */

export function Contact() {
  return (
    <SiteLayout mainId="contact-top">
      <div className={styles.page}>
        <div className="wrap">
          <Link to="/" className={styles.backLink}>
            ← Back to home
          </Link>

          {/* Hero */}
          <header className={styles.hero}>
            <span className={styles.complianceBadge}>
              <span className={styles.dot} aria-hidden="true" />
              Official Publisher Contact
            </span>
            <h1 className={styles.heroTitle}>Contact Information</h1>
            <p className={styles.heroMeta}>
              SAHAYY · SHAW Technologies Private Limited · New Delhi, India
              <br />
              This page serves as the official contact information page for{' '}
              <strong>Mahesh Pratap</strong> as the legal entity and developer
              of the SAHAYY application on Google Play.
            </p>
          </header>

          {/* Contact sections */}
          <div className={styles.sectionsGrid}>
            {CONTACT_SECTIONS.map((section) => (
              <section
                key={section.id}
                className={`${styles.card} ${section.id === 'entity' ? styles.cardPrimary : ''}`}
                aria-labelledby={`contact-${section.id}-title`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    {section.icon}
                  </span>
                  <div>
                    <span className={styles.badge}>{section.badge}</span>
                    <h2 id={`contact-${section.id}-title`} className={styles.cardTitle}>
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className={styles.cardDesc}>{section.description}</p>

                <dl className={styles.fieldList}>
                  {section.fields.map((field) => (
                    <div key={field.label} className={styles.field}>
                      <dt className={styles.fieldLabel}>{field.label}</dt>
                      <dd className={styles.fieldValue}>
                        {field.isEmail ? (
                          <a
                            href={field.href}
                            className={`${styles.emailLink} ${field.isPrimary ? styles.emailLinkPrimary : ''}`}
                          >
                            {field.value}
                          </a>
                        ) : (
                          field.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={section.cta.href}
                  className={`${styles.ctaBtn} ${section.id === 'entity' ? styles.ctaBtnPrimary : styles.ctaBtnSecondary}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {section.cta.label}
                </a>
              </section>
            ))}
          </div>

          {/* Footer note */}
          <p className={styles.footerNote}>
            SAHAYY Platform · Smart Access &amp; Holistic Assistance for You ·{' '}
            <Link to="/privacy-policy" className={styles.footerLink}>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}

export default Contact;

