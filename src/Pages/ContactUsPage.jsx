import { Link as ScrollLink } from "react-scroll";
import { Footer } from "../Components/Footer";
import { DiluxAds } from "../Components/DiluxAds";
import { Helmet } from "react-helmet-async";
import { WhatsAppIcon } from "../Components/WhatsAppIcon";
import { contactHeroSlides } from "../../content";
import { HeroSection } from "../Components/HeroSection";
import { NavBar } from "../Components/NavBar";


import {
  MapPin,
  Mail,
  Phone,
  SendHorizontal,
} from "lucide-react";
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
      <WhatsAppIcon/>
      <NavBar/>
       <HeroSection heroSlides={contactHeroSlides} scrollCTA = {true} />
      
      <section id="location-map-section">
        <div className="container">
          <h2>Our Location</h2>
          <iframe
            title="Dilux Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.924933851761!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b44b1234567%3A0xabcdef1234567890!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1670000000000!5m2!1sen!2sng"
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
              <MapPin /> 1007 Adeola Odeku St, Victoria Island, Lagos
            </p>
            <p>
              {" "}
              <Phone /> +234 7046 253 045 (NGN/whats app)
            </p>
            <p>
              {" "}
              <Mail />
              Contact@diluxproperties.com
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
