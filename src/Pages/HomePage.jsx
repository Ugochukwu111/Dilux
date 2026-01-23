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
  diluxFaqs,
} from "../../content";
import { landListings } from "../../content";
import { TestimonialCard } from "../Components/TestimonialCard";
import howItWorksImage1 from "/src/assets/how-it-works/consultation.jpg";
import howItWorksImage3 from "/src/assets/how-it-works/money-transfer.png";
import { Faqs } from "./Faqs";
import { DiluxAds } from "../Components/DiluxAds";
import { InvestmentSection } from "../Components/InvestmentSection";
import { HeroSection } from "../Components/HeroSection.jsx";
import { Footer } from "../Components/Footer";

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
                  Guaranteed returns stem from our stringent, multi-layered
                  audit. We secure stable, legally compliant, exclusive assets.
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
                    <a href="">
                      <FaFacebook color="#1877F2" size={30} />
                    </a>{" "}
                    &nbsp;
                    <a href="">
                      <FaWhatsapp color="#25D366" size={30} />
                    </a>
                  </div>
                </div>
                <video poster={IRE} loop controls>
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
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
              <div>
                <ol>
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // This acts like an Observer
                    viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
                    transition={{ duration: 0.5 }}
                  >
                    <p>Consultation</p>
                    Speak with our expert advisors to align your financial goals
                    with the right property opportunities. We provide
                    personalized market insights to ensure your strategy is
                    built on a solid foundation.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // This acts like an Observer
                    viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
                    transition={{ duration: 0.6 }}
                  >
                    <p>Secure your Investment</p>
                    Finalize your selection through our streamlined, secure
                    portal. From legal verification to digital contracts, we
                    handle the complexities so you can commit to your asset with
                    total confidence.
                  </motion.li>
                  motion.
                  <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // This acts like an Observer
                    viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
                    transition={{ duration: 0.8 }}
                  >
                    <p>Receive Payouts</p>
                    Sit back and watch your capital grow. Whether through rental
                    yield or property appreciation, your returns are deposited
                    directly to you, providing a hassle-free passive income
                    stream
                  </motion.li>
                </ol>
              </div>
              {/* container  for illustration of pics of how it works */}
              <div className="how-it-works-image-container">
                <figure>
                  <img src={howItWorksImage1} alt="step1" />
                </figure>
                <figure>
                  <img src={howItWorksImage3} alt="step2" />
                </figure>
                <figure>
                  <img src={howItWorksImage3} alt="step3" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <InvestmentSection />

        <section className="land-listings-section">
          <div className="container land-listings-container">
            <div className="upper-container">
              <div>
                <p className="verified-property-tag">
                  <Dot size={32} className="text-green" />
                  Verifird Properties
                </p>
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
              The people , The goverment, know who we are , Numbers dont lie!
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
                { end: 24, label: "states" },
                { end: 350, label: "sold properties", duration: 3.5 },
                { end: 124, label: "Investment deals" },
                { end: 15, label: "government agency" },
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
            <br />
            <h5>
              <u>see our certigicate</u>
            </h5>
          </div>
        </section>

        <section className="testimonial-section">
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

        <section className="faq-section">
          <div className="container ">
            <h3 className="text-center text-white">
              Frequently Asked Questions
            </h3>
            {diluxFaqs.map((faq) => {
              return <Faqs key={faq.id} faq={faq} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
