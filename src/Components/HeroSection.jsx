import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

import { heroSlides } from "../../content";


export  function HeroSection({heroSlides }) {
    const [index, setIndex] = useState(0);

  
    const currentSlide = heroSlides[index];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, []);


  return (
      <header>
        <div className="img-overlay">
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet={currentSlide.phoneImage || currentSlide.image}
            />
            <source media="(max-width: 1920px)" srcSet={currentSlide.image} />
            <img
              key={currentSlide.image}
              src={currentSlide.image}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt=""
            />
          </picture>
        </div>
        <section className="hero-section-container">
          <div key={index} className="hero-content-wrapper">
            <h1 className="text-light-gold ">{currentSlide.heading}</h1>

            <p className="short-description text-light-gray">
              {currentSlide.subtext}
            </p>
            <Link to="/certificates" className="trust-kicker-link">
              <span className="shield-icon">🛡️</span>
              GOVERNMENT VERIFIED • SEE CERTIFICATES
            </Link>
            <br />
            <button className="bg-white text-dark-maroon">
              {currentSlide.cta}
              <MoveUpRight size={20} />
            </button>
          </div>
        </section>
      </header>
  )
}
