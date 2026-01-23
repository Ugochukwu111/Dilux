import { NavBar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import "./HomePage.css";
import { investmentHeroSlides } from "../../content";
import { motion } from "framer-motion";
import { DiluxAds } from "../Components/DiluxAds";
import { PartnerSlider } from "../Components/PartnerSlider";
import { Footer } from "../Components/Footer";
import { WhatsAppIcon } from "../Components/WhatsAppIcon";
import { roiCards } from "../../content";
import {FaqSection } from '../Components/FaqSection.jsx'
import { MessageCircle } from "lucide-react";


import { Play } from "lucide-react";
import "./InvestmentPage.css";

export function InvestmentPage() {
  const headerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const headerItem = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
      },
    },
  };

  const cardItem = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="homepage-container investment-page-container">
      <NavBar />
      <WhatsAppIcon />
      <HeroSection heroSlides={investmentHeroSlides} />
      <PartnerSlider />
      <section className="bg-light-green">
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="d-flex justify-center flex-column align-center">
            <motion.h2 className="text-center" variants={headerItem}>
              ROI Steps
            </motion.h2>
            <motion.button
              className="bg-green text-white"
              variants={headerItem}
            >
              <Play />
              CEO explaining ROI
            </motion.button>
          </motion.div>
          <motion.div 
            variants={cardContainer} 
            className="roi-card-container">
            {roiCards.map((card) => {
              return (
                <motion.div
                  key={card.id}
                  variants={cardItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="roi-card"
                  id={`${card.id}`}
                >
                  <figure>
                    <span> Step {card.id}</span>
                    <img loading="lazy" src={card.image} alt={card.title} />
                    <figcaption className="title">
                      {card.icon} {card.title}
                    </figcaption>
                  </figure>
                  <div className="roi-content">
                    <p>
                      {card.longDesc.split("\n\n").map((para, i) => (
                        <span key={i} className="break">
                          {para}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="d-flex flex-column align-center justify-center">
          <p className="FWB text-green">Ready to invest ? Still have questions? chart with use directly</p>
         <br />
           <button className="bg-green text-white chat-with-us-btn">
             <MessageCircle /> Chat With Us Directly
           </button>
          </div>
        </motion.div>
      </section>
      <DiluxAds />
      <FaqSection/>
      <Footer />
    </div>
  );
}
