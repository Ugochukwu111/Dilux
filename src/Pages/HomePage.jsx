import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoveRight, Dot } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { WhatsAppIcon } from "../Components/WhatsAppIcon.jsx";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  whatWeOffer,
  clientTestimonials,
  diluxTeam,
} from "../../content";
import { landListings } from "../../content";
import { TestimonialCard } from "../Components/TestimonialCard";
import howItWorksImage1 from "/src/assets/how-it-works/consultation.jpeg";
import howItWorksImage2 from '/src/assets/how-it-works/property-inspection.jpeg';
import howItWorksImage3 from "/src/assets/how-it-works/ownership-documentation.jpeg";
import { DiluxAds } from "../Components/DiluxAds";
import { InvestmentSection } from "../Components/InvestmentSection";
import { HeroSection } from "../Components/HeroSection.jsx";
import {FaqSection } from '../Components/FaqSection.jsx'
import { Footer } from "../Components/Footer";
import { Helmet } from "react-helmet-async";



import IRE from "../assets/team/IRE.jpg";

import { PartnerSlider } from "../Components/PartnerSlider";
import { ListingCard } from "../Components/ListingCard";
import { DiluxDifferenceCard } from "../Components/DiluxDifferenceCard";
import { heroSlides } from "../../content";

import "./HomePage.css";

export function HomePage() {
  const [randomIndex, setRandomIndex] = useState(0);

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * landListings.length);
    setRandomIndex(num);
  };

  useEffect(() => {
    const intervalId = setInterval(generateRandomNumber, 5000);
    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <div className="homepage-container">
        <Helmet>
        <title>Dilux | Secure Land & Investment Platform in Edo State</title>
        <meta
          name="description"
          content="Dilux helps Nigerian youths secure legally verified land in prime Edo State locations and grow wealth through safe, transparent land investment opportunities."
        />
        <meta
          name="keywords"
          content="buy land in Edo State, land investment Edo State, verified land Edo State, land with C of O Edo State, real estate investment Edo State, Dilux properties"
        />
      </Helmet>
      <HeroSection heroSlides={heroSlides} />
      <main>
        <PartnerSlider />
        <WhatsAppIcon />
        {/* dilux-differences section */}
        <section className="why-choose-us-section">
          <div className="container">
            <div className="d-flex vedio-content-container">
              <div>
                <h2>The Dilux Difference</h2>
                <p className="text-dark-gray sub-text">
                At DILUX Properties, we make land acquisition simple, secure, and transparent. Our process is built to give you clarity, confidence, and complete peace of mind from start to finish.
                </p>
                <br />

                <div className="offers-container">
                  {whatWeOffer.map((offer) => {
                    return <DiluxDifferenceCard key={offer.id} offer={offer} />;
                  })}
                </div>
              </div>
              <div className="video-container ">
                <div className="d-flex justify-s-between">
                  <p className="FWB">connect on &rarr;</p>
                  <div>
                    <a href="https://web.facebook.com/igwerealestate3" target="_blank">
                      <FaFacebook color="#1877F2" size={30} />
                    </a>
                    &nbsp;
                    <a href="https://wa.me/2349070539019" target="_blank">
                      <FaWhatsapp color="#25D366" size={30} />
                    </a>
                  </div>
                </div>
                <video 
                  poster={IRE} 
                  loop 
                  controls
                  preload="none"
                  >
                  <source
                    src="https://res.cloudinary.com/dy4qtrmgz/video/upload/q_auto,f_auto/v1774018775/WhatsApp_Video_2026-03-20_at_3.48.30_PM_zedutg.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <DiluxAds />
        <section className="how-it-works-section">
          <div className="container">
            <h3>How it works</h3>

            <div className="h-i-w-list">
              {/* continer text for how it works */}
              <div className="step-container">
                <ol>
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // This acts like an Observer
                    viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
                    transition={{ duration: 0.5 }}
                  >
                    <p>Consultation</p>
                    Start at our office — meet our team, see our presence, and get answers to all your questions. We guide you through the property, understand your goals, and provide advice so you can make informed decisions with confidence.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // This acts like an Observer
                    viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
                    transition={{ duration: 0.6 }}
                  >
                    <p>Free Property Inspection</p>
                    Next, inspect the property for free. Walk the land, ask questions, and experience it firsthand. Payment is only discussed once you are fully satisfied, ensuring clarity and peace of mind.
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // This acts like an Observer
                    viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
                    transition={{ duration: 0.8 }}
                  >
                    <p>Ownership & Documentation</p>
                    At DILUX, your ownership is in the documents. When you receive your official paperwork from us, the land is yours — fully secured and legally recognized.
                  </motion.li>
                </ol>
              </div>
              {/* container  for illustration of pics of how it works */}
              <div className="how-it-works-image-container">
                <figure className="first-img">
                  <img loading="lazy" src={howItWorksImage1} alt="Consultation" />
                </figure>
                <div className="right-two-img-container">
                  <figure>
                    <img loading="lazy"  src={howItWorksImage2} alt="Free property inspection"/>
                  </figure>
                  <figure>
                    <img loading="lazy"  src={howItWorksImage3} alt="Documentation" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InvestmentSection />

        <section className="land-listings-section">
          <div className="container land-listings-container">
            <div className="upper-container">
              <div>
                {/* <p className="verified-property-tag">
                  <Dot size={32} className="text-green" />
                  Verifird Properties
                </p> */}
                <h2>Curated , Trusted, and Ready for you</h2>
              </div>

              <div className="d-flex flex-column">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  nulla nemo ut quasi odio. Eos corporis culpa expedita iure
                  necessitatibus illo temporibus dolore dignissimos, inventore
                  maxime accusamus quo voluptatum eligendi.
                </p>
                <br />
                <div className="d-flex justify-end">
                  <Link to="/properties" className="btn">
                    Explore All Properties <MoveRight />
                  </Link>
                </div>
              </div>
            </div>
            <ListingCard
              key={landListings[randomIndex]?.id}
              listing={landListings[randomIndex]}
            />
          </div>
        </section>

        <section className="ours-numbers-section">
          <div className="container">
            <h3>Our Numbers</h3>
            <p>
              The people , The government, know who we are , Numbers don't lie!
            </p>
            <motion.div
              className="numbers-container"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2, // This makes each number wait 0.2s after the previous one
                  },
                },
              }}
            >
              {[
                { end: 5, label: "states" },
                { end: 44, label: "Sold Properties", duration: 3.5 },
                { end: 95, label: "Investment Deals" },
                { end: 8, label: "Legal & Property Contractors " },
              ].map((stat, idx) => (
                <motion.p
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="FWB">
                    <CountUp
                      end={stat.end}
                      suffix="+"
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                      duration={stat.duration || 2.5}
                    />
                  </span>
                  <span className="FWB text-dark-maroon">{stat.label}</span>
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="testimonial-section">
          <br /><br />

          <div className="">
            <h3 className="text-center">Real Results, Real Trust</h3>
            <p className="text-center sub-text text-dark-gray">
              Verified stories from investors who earned guaranteed 24% growth.
            </p>

            <div className="testimonial-container">
              {clientTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <h3 className="text-center">
              The <em className="text-light-gold">Visionaries</em> Behind Your
              Next Project
            </h3>

            {/* div below contain the slider */}
            <div className="slider-wrapper">
              <div className="team-slider infinite-mode">
                {diluxTeam.map((member) => {
                  return (
                    <figure key={`first-${member.name}`}>
                      <img src={member.image} alt={member.name} />
                      <figcaption>
                        <span className="member-name">{member.name}</span>{" "}
                        <br />
                        <span className="member-position">
                          {member.position}
                        </span>
                      </figcaption>
                      <div className="overlay">
                        {/* <p className="member-bio">{member.bio}</p> */}
                      </div>
                    </figure>
                  );
                })}

                {diluxTeam.map((member) => {
                  return (
                    <figure key={`second-${member.name}`} aria-hidden="true">
                      <img src={member.image} alt={member.name} />
                      <figcaption>
                        <span className="member-name">{member.name}</span>{" "}
                        <br />
                        <span className="member-position">
                          {member.position}
                        </span>
                      </figcaption>
                      <div className="overlay">
                        {/* <p className="member-bio">{member.bio}</p> */}
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>

            {/* div below contains buttons for movement of the slider */}
            <p>
              Meet the Dilux team:{" "}
              <span className="text-light-gold FWB">
                specialists in land acquisition, zoning, and long-term
                investment strategy.
              </span>{" "}
              We don't just find dirt; we find your future foundation.
            </p>
          </div>
        </section>
          <FaqSection/>
      </main>
      <Footer />
    </div>
  );
}
