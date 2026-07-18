import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <main className="not-found-page">
      <Helmet>
        <title>Page Not Found | Dilux Properties</title>
        <meta name="description" content="The requested Dilux Properties page could not be found." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="not-found-eyebrow">Dilux Properties</p>
        <h1 id="not-found-title">404</h1>
        <h2>We could not find that page.</h2>
        <p>The page you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary"><ArrowLeft aria-hidden="true" size={18} /> Back Home</Link>
          <Link to="/contact-us" className="not-found-secondary"><Mail aria-hidden="true" size={18} /> Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
