import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./PrivacyPolicyPage.css";

const tableOfContents = [
  { id: "introduction", label: "Introduction" },
  { id: "definitions", label: "Definitions" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "cookies-and-tracking", label: "Cookies & Tracking" },
  { id: "communications", label: "Communications" },
  { id: "user-accounts", label: "User Accounts" },
  { id: "property-listings", label: "Property Listings" },
  { id: "payment-information", label: "Payment Information" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "user-rights", label: "User Rights" },
  { id: "childrens-privacy", label: "Children’s Privacy" },
  { id: "international-data-transfers", label: "International Transfers" },
  { id: "changes-to-this-policy", label: "Changes to This Policy" },
  { id: "contact-information", label: "Contact Information" },
];

const policySections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Dilux Properties (“Dilux”, “we”, “our”, or “us”) is a Nigerian real estate technology platform that helps individuals and investors discover, evaluate, and transact on property opportunities with greater clarity and confidence. This Privacy Policy explains how we collect, use, store, and protect personal information when you visit our website, engage with our team, request property information, or use our services.
        </p>
        <p>
          We are committed to handling your information responsibly, transparently, and in a manner consistent with applicable privacy laws and good business practice. Where required by law, we will obtain your consent before collecting certain sensitive personal data and may limit or refuse certain services where consent or legal requirements are not met.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    content: (
      <p>
        For the purpose of this Policy, “Personal Information” refers to information that identifies you directly or indirectly, such as your name, contact details, national identification data, payment information, or property-related preferences. “Service” refers to our website, property listings, consultations, investor communications, and any related support functions.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul className="privacy-policy-list">
          <li>Contact details, including your name, email address, phone number, and mailing address.</li>
          <li>Account information such as your username, login credentials, and preferences.</li>
          <li>Property-related information you provide when registering interest, requesting a site visit, or submitting a property inquiry.</li>
          <li>Payment and transaction details necessary for property purchases, deposits, or other services.</li>
          <li>Technical information such as IP address, browser type, device information, and website interaction data.</li>
          <li>Communication records including messages sent to us through email, WhatsApp, forms, or phone calls.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: (
      <>
        <p>We use your information to provide and improve our services, respond to your inquiries, and support your property journey. This includes facilitating site inspections, property listings, investment discussions, account administration, communications, and the verification of transactions.</p>
        <p>We may also use your information to improve the performance and security of our website, prevent fraud, comply with legal obligations, and fulfill contracts with you. In some cases, we may use anonymized or aggregated information for analytics, reporting, and service improvement.</p>
      </>
    ),
  },
  {
    id: "cookies-and-tracking",
    title: "Cookies & Tracking Technologies",
    content: (
      <p>
        Our website may use cookies, web beacons, and similar technologies to remember your preferences, understand how visitors interact with our site, and improve the overall experience. These tools may collect information such as page views, referral sources, device type, and session activity. You can usually manage or disable cookies through your browser settings, although some site features may be limited if cookies are disabled.
      </p>
    ),
  },
  {
    id: "communications",
    title: "Communications",
    content: (
      <p>
        When you engage with us, we may send you important service-related messages, including confirmations, updates, and property-related information. We may also contact you with marketing communications where you have agreed to receive them. You can unsubscribe from marketing messages at any time by following the instructions in the message or contacting us directly.
      </p>
    ),
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    content: (
      <p>
        If you create an account with us, you are responsible for keeping your account credentials secure and accurate. We may use your account information to authenticate your identity, maintain transaction history, and deliver bespoke services. We recommend that you notify us promptly if you suspect unauthorized access to your account.
      </p>
    ),
  },
  {
    id: "property-listings",
    title: "Property Listings",
    content: (
      <p>
        Where you provide property details, documents, or ownership information for listing purposes, we may process that information to publish, manage, or promote the listing in accordance with our service terms. You are responsible for ensuring that any information you submit is accurate, lawful, and authorized for use in connection with our platform.
      </p>
    ),
  },
  {
    id: "payment-information",
    title: "Payment Information",
    content: (
      <p>
        We may collect payment-related information necessary to process deposits, purchase transactions, or service fees. Depending on the payment method used, payment processing may be handled by a trusted third-party provider. We do not store full payment card details where that service is handled by a regulated payment processor, and we encourage you to review their privacy practices where applicable.
      </p>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: (
      <p>
        We may engage trusted third-party service providers for hosting, analytics, communication, payment processing, and customer support. These parties are only permitted to process your information for limited purposes and are contractually required to protect it. We are not responsible for the privacy practices of unrelated third parties that are not under our control.
      </p>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing",
    content: (
      <p>
        We do not sell personal information to third parties for unrelated marketing purposes. We may share personal information with service providers, legal advisers, regulators, or other parties where necessary to comply with the law, protect our rights, prevent fraud, or fulfill a transaction you have requested. In all cases, we seek to limit sharing to what is necessary and lawful.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include secure hosting, access controls, incident monitoring, and internal procedures designed to reduce risk. However, no internet-based system can be guaranteed to be completely secure, and you should also take care to protect your own account credentials.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        We retain personal information only for as long as needed to fulfill the purposes for which it was collected, meet legal and regulatory obligations, resolve disputes, and enforce agreements. When information is no longer necessary, we will securely delete or de-identify it where practical and permitted by law.
      </p>
    ),
  },
  {
    id: "user-rights",
    title: "User Rights",
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul className="privacy-policy-list">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate or incomplete information.</li>
          <li>Request deletion of your personal information, subject to legal exceptions.</li>
          <li>Object to certain processing activities or withdraw consent where applicable.</li>
          <li>Request a copy of your information in a portable format where appropriate.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the details below. We may ask you to verify your identity before processing certain requests.</p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children’s Privacy",
    content: (
      <p>
        Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children without appropriate parental or guardian consent. If you believe that a child has provided us with personal information without proper authorization, please contact us so we can take appropriate steps.
      </p>
    ),
  },
  {
    id: "international-data-transfers",
    title: "International Data Transfers",
    content: (
      <p>
        In some cases, your information may be processed or stored outside Nigeria by service providers or partners located in other jurisdictions. Where such transfers occur, we take reasonable steps to ensure that the information is protected in a manner consistent with this Policy and applicable data protection obligations.
      </p>
    ),
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. Any revisions will be posted on this page with an updated “Last updated” date. We encourage you to review this page periodically to stay informed about how we protect your information.
      </p>
    ),
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have questions, concerns, or requests relating to this Privacy Policy or your personal information, please contact our team through the contact page or by using the details below:
        </p>
        <p>
          Email: <a href="mailto:diluxproperties8@gmail.com">diluxproperties8@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+2349070539019">+234 9070 539 019</a>
        </p>
        <p>
          Office: <Link to="/contact-us">Visit our contact page</Link> for further assistance.
        </p>
      </>
    ),
  },
];

export function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <Helmet>
        <title>Privacy Policy | Dilux Properties</title>
        <meta
          name="description"
          content="Read Dilux Properties’ privacy policy, including how we collect, use, protect, and share personal information for our real estate services in Nigeria."
        />
        <meta
          name="keywords"
          content="Dilux privacy policy, property privacy policy Nigeria, real estate data protection, land investment privacy"
        />
        <link rel="canonical" href="https://diluxproperties.com.ng/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Dilux Properties" />
        <meta property="og:description" content="Read Dilux Properties’ privacy policy and learn how we handle personal information for property and investment services." />
        <meta property="og:url" content="https://diluxproperties.com.ng/privacy-policy" />
        <meta property="og:image" content="https://diluxproperties.com.ng/dilux-favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Dilux Properties" />
        <meta name="twitter:description" content="Read Dilux Properties’ privacy policy and learn how we handle personal information for property and investment services." />
        <meta name="twitter:image" content="https://diluxproperties.com.ng/dilux-favicon.png" />
      </Helmet>

      <a className="skip-link" href="#privacy-policy-content">
        Skip to content
      </a>

      <header className="privacy-policy-hero">
        <div className="container privacy-policy-hero__content">
          <p className="privacy-policy-hero__eyebrow">Privacy • Transparency • Trust</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-policy-hero__intro">
            We handle your information with care so you can make confident decisions about property, investment, and communication with Dilux.
          </p>
          <div className="privacy-policy-hero__meta" aria-label="Document information">
            <span>Last updated: 18 July 2026</span>
            <span>Draft for review and approval</span>
          </div>
          <div className="privacy-policy-notice" role="note">
            This Privacy Policy has been prepared as a professionally structured draft for Dilux Properties. It is intended for internal review and should be reviewed, amended where necessary, and approved by qualified legal practitioners before being adopted as the Company's official Privacy Policy.
          </div>
        </div>
      </header>

      <main id="privacy-policy-content" className="container privacy-policy-layout">
        <aside className="privacy-policy-toc" aria-label="Page contents">
          <nav>
            <h2>Contents</h2>
            <ul>
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="privacy-policy-document">
          {policySections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              className="privacy-policy-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
            >
              <h2>{section.title}</h2>
              {section.content}
            </motion.section>
          ))}
        </article>
      </main>
    </div>
  );
}
