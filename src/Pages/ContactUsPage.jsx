import { Footer } from "../Components/Footer";
import { DiluxAds } from "../Components/DiluxAds";
import { Helmet } from "react-helmet-async";
import { WhatsAppIcon } from "../Components/WhatsAppIcon";
import { contactHeroSlides } from "../../content";
import { HeroSection } from "../Components/HeroSection";
import { NavBar } from "../Components/NavBar";

import { MapPin, Mail, Phone, SendHorizontal } from "lucide-react";
import "./ContactUsPage.css";

export function ContactUsPage() {
  return (
    <div className="contact-page-container">
      <Helmet>
        <title>Contact Dilux | Land & Investment Experts in Edo State</title>
        <meta
          name="description"
          content="Contact Dilux for land inspections, consultations, and verified property inquiries in Edo State. We make land ownership simple and secure."
        />
        <meta
          name="keywords"
          content="contact land realtor Edo State, land inspection Edo State, property consultation Edo, Dilux contact, land investment Edo State"
        />
      </Helmet>
      <WhatsAppIcon />
      <NavBar />
      <HeroSection heroSlides={contactHeroSlides} />

      <section id="location-map-section">
        <div className="container">
          <h2>Our Location</h2>
          <iframe
            title="Dilux Location Map"
            src="https://www.google.com/maps?q=Dilux%20Properties%20Benin%20City&z=17&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <DiluxAds />
      <section id="contact-form-section">
        <div className="container contact-us-form-container">
          <div>
            <h3>
              Questions on how to be a land Owner ?
              <span>
                need a personal payment schedule? Ask the question we provide
                the answer
              </span>
            </h3>
            <p>
              Once your email is sent we will respond and get in touch with you
              within 24 hours
            </p>

            <p>
              <a
                href="https://maps.app.goo.gl/6jeqKpDXkVPLnrm78"
                target="_blank"
              >
                <MapPin /> G10 Elizabeth Nmoye Plazza,188 Uselu Lagos Road
                ,Benin City
              </a>
            </p>
            <p>
              <a href="tel:+2349070539019">
                <Phone /> +234 9070 539 019
              </a>
            </p>
            <p>
              <a href="mailto:diluxproperties8@gmail.com">
                <Mail /> diluxproperties8@gmail.com
              </a>
            </p>
          </div>
          <form>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                autoComplete="name"
                id="name"
                name="name"
                placeholder="Eg: Johon Doe"
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                required
                autoComplete="email"
                type="email"
                id="email"
                name="email"
                placeholder="Eg: johndoe@email.com"
              />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea required name="message" id="message"></textarea>
            </div>
            <button>
              Submit <SendHorizontal />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
