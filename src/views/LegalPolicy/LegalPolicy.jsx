'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteLayout from '../../components/layout/SiteLayout/SiteLayout';
import { analyticsProcessorName } from '../../analytics-processor-name';
import styles from './LegalPolicy.module.css';

const analyticsProcessor = analyticsProcessorName();
const analyticsRetention = `Until the grievance officer deletes them or the ${analyticsProcessor} retention window ends, whichever comes first`;

/* ─── Data (mirrors privacy-policy-data.ts in the RN app) ─────────────── */

const META = {
  VERSION: '1.1.0',
  EFFECTIVE_DATE: 'November 6, 2026',
  LAST_UPDATED: 'November 6, 2026',
  COMPLIANCE_LABEL: 'DPDP Act, 2023 Compliant',
  GOVERNING_STATUTE: 'Digital Personal Data Protection Act, 2023 & IT Act, 2000',
};

const OFFICER = {
  NAME: 'Mahesh Pratap',
  DESIGNATION: 'Grievance Redressal Officer & Data Protection Officer',
  ORGANIZATION: 'SHAW Technologies Private Limited',
  EMAIL: 'support@sahayy.in',
  LEGAL_EMAIL: 'grievance@sahayy.in',
  LOCATION: 'New Delhi, Delhi, India',
  ACKNOWLEDGMENT_TIMELINE: 'Within 24 to 48 hours',
  RESOLUTION_TIMELINE: 'Within 15 to 30 calendar days',
};

const TRUST_PILLARS = [
  {
    id: 'location',
    badge: 'Consent Driven',
    title: 'Location for Civic Impact',
    description:
      'Your GPS coordinates and municipal area are used solely to deliver ward-level news, civic alerts, and future local services.',
  },
  {
    id: 'profile',
    badge: 'Encrypted',
    title: 'Profile & Identity Protection',
    description:
      'Your email, display name, and avatar image are stored securely to manage your account and display your profile.',
  },
  {
    id: 'no-ads',
    badge: 'No Ad Brokers',
    title: 'Zero Ads & Never Sold',
    description:
      'SAHAYY does not monetize citizen data, run behavioral tracking ads, or sell information to third-party data brokers.',
  },
  {
    id: 'erasure',
    badge: '100% Cascade',
    title: 'Instant Self-Serve Erasure',
    description:
      'You have the absolute right to delete your account and all associated locations, topics, and bookmarks anytime in Profile or at /delete-account.',
  },
];

const POLICY_SECTIONS = [
  {
    id: 'fiduciary-notice',
    num: '01',
    title: 'Introduction & Data Fiduciary Notice',
    summary:
      'SAHAYY (Smart Access & Holistic Assistance for You) is a civic intelligence platform operating in India. Under the Digital Personal Data Protection Act, 2023 (DPDP Act 2023), SAHAYY serves as the Data Fiduciary responsible for determining the purpose and means of processing your digital personal data.',
    points: [
      'Commitment to the core data principles of lawfulness, fairness, transparency, purpose limitation, and data minimization.',
      'In accordance with Section 5(3) of the DPDP Act 2023, you have the right to access this privacy policy and related notices in English or any of the 22 languages specified in the Eighth Schedule to the Constitution of India upon request to our Grievance Officer.',
      'By using SAHAYY, you acknowledge that your personal data is collected and processed strictly to deliver hyper-local civic intelligence and assistance.',
    ],
  },
  {
    id: 'data-inventory',
    num: '02',
    title: 'Personal Data We Collect & Store',
    summary:
      'We strictly limit data collection to what is necessary for authentication, security, and hyper-local personalization. Based on our database architecture, the following data is collected and stored:',
    points: [
      'Account & Profile Identity: Your email address, full display name, and avatar image URL from your sign-in provider, as well as your mobile phone number when using SMS OTP.',
      'Authentication Identities: Non-reversible provider identifiers from Google Sign-In or Sign in with Apple to keep your sessions connected without storing external passwords.',
      'Precise Location: Decimal latitude and longitude coordinates, along with reverse-geocoded boundaries (premise, sub-localities, locality/city, district, state, and postal PIN code).',
      'Civic Preferences & Topics: Interest areas (e.g., Technology & Engineering, Law & Government, Healthcare & Lifestyle) and topic follow/exclude preferences.',
      'Saved Bookmarks: Content items, advisories, and articles you save for later reading.',
      'User Feedback: Feedback messages and categories submitted via the app or upon account closure.',
      'Technical Session Security: Cryptographically hashed refresh tokens (SHA-256), device identifiers, and ephemeral IP logs for anti-abuse and rate-limiting.',
      'Product Analytics: An internal user id only. We do not send your name, email, or phone. Events cover app opens, daily brief opens, topic chips you select, card ids you view, swipe counts, and session length. Search text is not included.',
      'Session Recordings: Production builds can record a sample of in-app screenshots. Sign-in, onboarding, profile, interests, grievance, feedback, delete-account, and the search field are masked. Feed text and images can appear. Development builds do not record sessions.',
    ],
  },
  {
    id: 'location-disclosure',
    num: '03',
    title: 'Location Data & Future Civic Services',
    summary:
      'SAHAYY requires geographic context because civic issues and municipal updates are inherently geographic. We store your current and hometown location to power targeted civic features.',
    callout: 'Important: Your location is never used for commercial advertising, user profiling, or shared with marketing networks.',
    points: [
      'Hyper-Local News & Advisories: Filtering out distant reports and delivering news relevant to your sector, ward, and district.',
      'Municipal & Public Alerts: Warning you about scheduled water outages, power maintenance, road closures, and traffic diversions in your locality.',
      'Disaster & Weather Warnings: Broadcasting official IMD severe weather, flash flood, and air quality (AQI) alerts based on your coordinates.',
      'Future Civic Services: Connecting citizens directly with their ward representatives, municipal helplines, localized grievance redressal, and neighborhood civic resolution tracking.',
      'Granular User Controls: Location access is requested explicitly through your device OS dialog. You can change your location or revoke permissions anytime in device settings.',
      'Session Recordings: Precise GPS coordinates are not sent to our analytics provider. A production recording of the feed can show the area name already on the location chip. Recordings are not used for advertising and are not sold.',
    ],
  },
  {
    id: 'lawful-grounds',
    num: '04',
    title: 'Purpose of Processing & Lawful Grounds',
    summary:
      'Every processing activity at SAHAYY is grounded in explicit, affirmative citizen consent under Section 6 of the DPDP Act 2023.',
    points: [
      'Consent as Primary Basis: You provide free, specific, informed, and unambiguous consent when registering, granting location permissions, and selecting civic interests.',
      'Withdrawal of Consent: You have the right to withdraw your consent at any time without negative consequences to existing lawful processing.',
      'Product Analytics Withdrawal: Deleting your account, or emailing the grievance officer, stops further analytics and session recording on that device. The app does not offer a separate analytics switch.',
      'Statutory Cybersecurity Compliance: Security logs are temporarily maintained to satisfy CERT-In cybersecurity directives under Section 70B of the IT Act, 2000.',
    ],
  },
  {
    id: 'third-party-sharing',
    num: '05',
    title: 'Data Processors & Third-Party Sharing',
    summary:
      'We never sell, rent, or trade your personal data. We only share minimal data with trusted infrastructure providers (Data Processors) bound by statutory confidentiality agreements.',
    points: [
      'Google Cloud & Maps API: Used for secure Google Sign-In and reverse-geocoding of latitude/longitude into neighborhood names.',
      'Apple Inc.: Used for Sign in with Apple authentication.',
      'MSG91 (India): Used strictly for transactional SMS OTP delivery to Indian mobile numbers.',
      'Resend: Used strictly for transactional email OTP delivery and security notices.',
      'Cloud Database & Redis: Encrypted databases and in-memory caches hosted in compliant, isolated cloud environments.',
      `${analyticsProcessor}: Used only for product analytics and session replay. We do not sell this data and we do not use it for advertising. The project host is in the United States or the European Union, matching the host configured for that app build.`,
      'Law Enforcement Disclosures: Shared with Indian law enforcement only when strictly mandated by a valid court order or statutory warrant issued under applicable Indian laws.',
    ],
  },
  {
    id: 'product-analytics',
    num: '06',
    title: 'Product Analytics & Session Recordings',
    summary:
      `SAHAYY uses ${analyticsProcessor} to understand which briefs, topics, and cards are useful. This is separate from AI summarization.`,
    points: [
      'Production builds can record sampled sessions. Development builds do not.',
      'Personal screens are masked: sign-in, onboarding, profile, interests, grievance, feedback, and delete account. The search field is masked. Feed text and images stay visible.',
      `Name, email, phone, search text, and precise GPS coordinates are not sent to ${analyticsProcessor}.`,
      `Reading activity sent to ${analyticsProcessor} is not sent to an external AI provider for model training.`,
    ],
  },
  {
    id: 'ai-transparency',
    num: '07',
    title: 'AI Summarization & Citizen Privacy',
    summary:
      'SAHAYY uses Large Language Models (LLMs) to synthesize complex news articles and government gazettes into concise civic bullet briefs.',
    points: [
      'Public Data Only: AI summarization operates exclusively on publicly accessible publisher news feeds, RSS feeds, and official government press releases.',
      'Zero Model Training on Citizen Data: Your personal profile, email, name, location, and reading habits are NEVER transmitted to external AI providers for model training or fine-tuning. Product analytics described above is a separate processor and is not an AI training feed.',
      'Source Attribution: All AI summaries clearly link back to the original source publisher with full transparency.',
    ],
  },
  {
    id: 'retention-and-deletion',
    num: '08',
    title: 'Data Retention & Instant Account Deletion',
    summary:
      `Deleting your account immediately removes the personal data Sahay stores. Analytics copies held by ${analyticsProcessor} follow the retention described below.`,
    points: [
      'Self-Serve In-App Deletion: Navigate to Profile › Delete Account to permanently delete your account at any time.',
      'Web deletion without the app: Open https://sahayy.in/delete-account, enter the Google email on your account, and confirm the code we send. Deletion is immediate.',
      'Complete Database Cascade: Upon confirming deletion, your User record, email, stored locations, interest areas, topic preferences, saved bookmarks, device push tokens, and notification delivery records are permanently wiped.',
      'Session Invalidation: All cryptographic refresh tokens and active identities are immediately revoked.',
      'Feedback Anonymization: Any submitted feedback messages are permanently detached from your user identity.',
      `${analyticsProcessor} copies: Account deletion stops that device from sending further events as you. Events and recordings already stored at ${analyticsProcessor} stay until the grievance officer deletes them, or until the ${analyticsProcessor} project retention window ends, whichever comes first. The app cannot delete those copies with its public project key.`,
    ],
  },
  {
    id: 'security-measures',
    num: '09',
    title: 'Security Safeguards & Practices',
    summary:
      'In compliance with Rule 8 of the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and Section 8(5) of the DPDP Act 2023, we deploy industry-standard safeguards.',
    points: [
      'Encryption in Transit: All data exchanged between the app, backend servers, and APIs is secured using modern TLS 1.2 / TLS 1.3 encryption.',
      'Encryption at Rest: User databases and database backups are encrypted using AES-256 standards.',
      'Cryptographic Token Hashing: Session refresh tokens are stored as SHA-256 hashes rather than plaintext.',
      'Strict Access Controls: Access to production environments is limited to authorized personnel with multi-factor authentication (MFA) and isolated Virtual Private Clouds (VPC).',
    ],
  },
  {
    id: 'citizen-rights',
    num: '10',
    title: 'Your Rights as a Data Principal',
    summary:
      'Under Sections 11 through 14 of the DPDP Act 2023, you possess enforceable statutory rights regarding your digital personal data.',
    points: [
      'Right to Access Information (Section 11): Right to obtain a summary of your personal data being processed and third parties with whom it has been shared.',
      'Right to Correction & Updating (Section 12): Right to correct inaccurate data or update outdated personal details.',
      'Right to Erasure (Section 12): Right to have your personal data permanently erased using our in-app deletion tool or the web deletion page at https://sahayy.in/delete-account.',
      'Right of Grievance Redressal (Section 13): Right to readily available grievance redressal from our designated Grievance Officer.',
      'Right to Nominate (Section 14): Right to designate an individual to exercise your data rights in the event of death or incapacity.',
      'Right to Escalate to DPBI: If unresolved by our Grievance Officer, you have the right to lodge a complaint with the Data Protection Board of India.',
    ],
  },
  {
    id: 'children-privacy',
    num: '11',
    title: 'Protection of Children',
    summary:
      'SAHAYY is committed to protecting the privacy of minors in strict alignment with Section 9 of the DPDP Act 2023.',
    points: [
      'SAHAYY does not engage in behavioral monitoring, tracking, or targeted advertising directed at children under the age of 18. Product analytics is not directed at children and is not used for advertising.',
      'If you are under 18 years of age, you should use the application with the guidance and consent of a parent or lawful guardian.',
      'Parents or guardians who believe their child has submitted personal data without consent may contact our Grievance Officer for immediate erasure.',
    ],
  },
  {
    id: 'grievance-contact',
    num: '12',
    title: 'Grievance Redressal Officer Contact',
    summary:
      'In compliance with Rule 5(9) of the SPDI Rules 2011, Rule 3(2) of the Intermediary Guidelines 2021, and Section 8(9) of the DPDP Act 2023, our designated Grievance Officer details are published below:',
    points: [
      `Grievance Officer: ${OFFICER.NAME}`,
      `Designation: ${OFFICER.DESIGNATION}`,
      `Official Email: ${OFFICER.EMAIL}`,
      `Postal Address: ${OFFICER.LOCATION}`,
      `Acknowledgment SLA: ${OFFICER.ACKNOWLEDGMENT_TIMELINE}`,
      `Resolution SLA: ${OFFICER.RESOLUTION_TIMELINE}`,
    ],
  },
];

const DATA_SAFETY = [
  { field: 'Email Address', category: 'Identity & Profile', purpose: 'Account authentication, security notices', shared: 'Resend (Email OTP only)', retention: 'Deleted upon account closure' },
  { field: 'Display Name', category: 'Identity & Profile', purpose: 'In-app profile display', shared: 'Never shared', retention: 'Deleted upon account closure' },
  { field: 'Profile Image URL', category: 'Identity & Profile', purpose: 'User avatar rendering', shared: 'Never shared', retention: 'Deleted upon account closure' },
  { field: 'Phone Number', category: 'Identity & Profile', purpose: 'SMS OTP authentication', shared: 'MSG91 (SMS OTP only)', retention: 'Deleted upon account closure' },
  { field: 'Precise GPS Coordinates', category: 'Location', purpose: 'Hyper-local news & civic alerts', shared: 'Google Maps API (reverse-geocode)', retention: 'Deleted upon account closure' },
  { field: 'Civic Address / PIN Code', category: 'Location', purpose: 'Ward & district filtering', shared: 'Never shared', retention: 'Deleted upon account closure' },
  { field: 'Interest Areas & Topics', category: 'Preferences', purpose: 'Content curation & topic filtering', shared: 'Never shared', retention: 'Deleted upon account closure' },
  { field: 'Saved Bookmarks', category: 'App Activity', purpose: 'Citizen bookmarking', shared: 'Never shared', retention: 'Deleted on user action' },
  { field: 'Device ID & Tokens', category: 'Technical Security', purpose: 'Session security & anti-abuse', shared: 'Never shared', retention: 'Invalidated on logout/deletion' },
  { field: 'Product Analytics Events', category: 'App Activity', purpose: 'Product analytics: app opens, brief opens, topics, card ids, swipe counts, session length', shared: `${analyticsProcessor} (product analytics)`, retention: analyticsRetention },
  { field: 'Internal User ID', category: 'Technical', purpose: 'Link product analytics to an account without name, email, or phone', shared: `${analyticsProcessor} (product analytics)`, retention: analyticsRetention },
  { field: 'Analytics Install ID', category: 'Technical', purpose: 'The analytics processor assigns an install id before sign-in. This is separate from Sahay session tokens and push tokens.', shared: `${analyticsProcessor} (product analytics)`, retention: analyticsRetention },
  { field: 'Session Recordings', category: 'App Activity', purpose: 'Sampled production screenshots of in-app use. Personal screens and search are masked. A recording can show the area name on the location chip.', shared: `${analyticsProcessor} (session replay)`, retention: analyticsRetention },
];

/* ─── Accordion Section Card ────────────────────────────────────────────── */

function SectionCard({ section, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className={styles.card} id={`section-${section.id}`}>
      <button
        className={styles.cardHeader}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`panel-${section.id}`}
      >
        <span className={styles.sectionNum}>{section.num}</span>
        <span className={styles.cardTitle}>{section.title}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
      </button>
      {open && (
        <div className={styles.cardBody} id={`panel-${section.id}`}>
          <p className={styles.summary}>{section.summary}</p>
          {section.callout && (
            <div className={styles.callout}>{section.callout}</div>
          )}
          <ul className={styles.pointsList}>
            {section.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─── Main Page Component ───────────────────────────────────────────────── */

export function PrivacyPolicy() {
  return (
    <SiteLayout mainId="privacy-policy-top">
      <div className={styles.page}>
        <div className="wrap">

          {/* Back link */}
          <Link href="/" className={styles.backLink}>
            ← Back to home
          </Link>

          {/* Hero header */}
          <header className={styles.hero}>
            <div className={styles.complianceBadge}>
              <span className={styles.dot} />
              {META.COMPLIANCE_LABEL}
            </div>
            <h1 className={styles.heroTitle}>
              Citizen Data Privacy<br />& Trust Charter
            </h1>
            <p className={styles.heroMeta}>
              Governed by the {META.GOVERNING_STATUTE}
              <br />
              Effective {META.EFFECTIVE_DATE} · Version {META.VERSION}
            </p>
          </header>

          {/* Trust pillars grid */}
          <section className={styles.section} aria-labelledby="trust-heading">
            <h2 id="trust-heading" className={styles.sectionHeading}>Key Privacy Commitments</h2>
            <div className={styles.pillarsGrid}>
              {TRUST_PILLARS.map((p) => (
                <div key={p.id} className={styles.pillarCard}>
                  <span className={styles.pillarBadge}>{p.badge}</span>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarDesc}>{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Policy sections accordion */}
          <section className={styles.section} aria-labelledby="disclosures-heading">
            <h2 id="disclosures-heading" className={styles.sectionHeading}>Statutory Disclosures & Terms</h2>
            <div className={styles.accordion}>
              {POLICY_SECTIONS.map((s, i) => (
                <SectionCard key={s.id} section={s} defaultOpen={i < 3} />
              ))}
            </div>
          </section>

          {/* Data safety table */}
          <section className={styles.section} aria-labelledby="safety-heading">
            <h2 id="safety-heading" className={styles.sectionHeading}>Data Safety Matrix</h2>
            <p className={styles.tableLead}>
              A transparent, field-by-field disclosure of every data type we collect, why we collect it, who we share it with, and how long we keep it.
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.safetyTable}>
                <thead>
                  <tr>
                    <th>Data Field</th>
                    <th>Category</th>
                    <th>Purpose</th>
                    <th>Shared With</th>
                    <th>Retention</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA_SAFETY.map((row) => (
                    <tr key={row.field}>
                      <td data-label="Data Field"><strong>{row.field}</strong></td>
                      <td data-label="Category">{row.category}</td>
                      <td data-label="Purpose">{row.purpose}</td>
                      <td data-label="Shared With">
                        <span className={row.shared === 'Never shared' ? styles.chipGreen : styles.chipBlue}>
                          {row.shared}
                        </span>
                      </td>
                      <td data-label="Retention">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Grievance Officer card */}
          <section className={styles.section} aria-labelledby="officer-heading">
            <div className={styles.officerCard}>
              <div className={styles.officerHeader}>
                <svg className={styles.mailIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <h2 id="officer-heading" className={styles.officerTitle}>Grievance Redressal Officer</h2>
              </div>
              <p className={styles.officerLead}>
                For grievances, data deletion requests, or to obtain this policy in Hindi or any Eighth Schedule official language, reach out directly. You can also delete your account yourself on the{' '}
                <Link href="/delete-account">delete account</Link> page.
              </p>
              <div className={styles.officerDetails}>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Name</span>
                  <span className={styles.officerValue}>{OFFICER.NAME}</span>
                </div>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Designation</span>
                  <span className={styles.officerValue}>{OFFICER.DESIGNATION}</span>
                </div>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Organisation</span>
                  <span className={styles.officerValue}>{OFFICER.ORGANIZATION}</span>
                </div>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Location</span>
                  <span className={styles.officerValue}>{OFFICER.LOCATION}</span>
                </div>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Support Email</span>
                  <a href="mailto:support@sahayy.in" className={styles.officerEmail}>{OFFICER.EMAIL}</a>
                </div>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Grievance Email</span>
                  <a href="mailto:grievance@sahayy.in" className={styles.officerEmail}>{OFFICER.LEGAL_EMAIL}</a>
                </div>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Acknowledgment SLA</span>
                  <span className={styles.officerValue}>{OFFICER.ACKNOWLEDGMENT_TIMELINE}</span>
                </div>
                <div className={styles.officerField}>
                  <span className={styles.officerLabel}>Resolution SLA</span>
                  <span className={styles.officerValue}>{OFFICER.RESOLUTION_TIMELINE}</span>
                </div>
              </div>
              <a
                href="mailto:support@sahayy.in?subject=SAHAYY%20Citizen%20Privacy%20Grievance%20%2F%20Inquiry"
                className={styles.emailBtn}
                id="email-grievance-officer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Grievance Officer
              </a>
            </div>
          </section>

          {/* Footer note */}
          <p className={styles.footerNote}>
            SAHAYY Platform · Smart Access &amp; Holistic Assistance for You · v{META.VERSION}
          </p>

        </div>
      </div>
    </SiteLayout>
  );
}

export default PrivacyPolicy;
