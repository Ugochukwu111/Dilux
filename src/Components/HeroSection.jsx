import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";
import "./HeroSection.css";

export function HeroSection({ heroSlides }) {
  const [index, setIndex] = useState(0);

  const currentSlide = heroSlides[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollLinkClick = (e) => {
    e.preventDefault();
    const hashIndex = currentSlide?.link.indexOf("#");
    if (hashIndex === -1) return;

    const targetId = currentSlide.link.slice(hashIndex + 1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", currentSlide.link);
    }
  };

  const isInPageLink = currentSlide?.link.includes("#");

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
            fetchpriority="high"
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

          <Link to="" className="trust-kicker-link">
            <span className="shield-icon">🛡️</span>
            GOVERNMENT VERIFIED •
          </Link>

          <br />
          {isInPageLink ? (
            <a
              href={currentSlide.link}
              className="bg-white text-dark-maroon hero-cta-link"
              onClick={handleScrollLinkClick}
            >
              {currentSlide.cta}
              <MoveUpRight size={20} />
            </a>
          ) : (
            <Link
              to={currentSlide.link}
              className="bg-white text-dark-maroon hero-cta-link"
            >
              {currentSlide.cta}
              <MoveUpRight size={20} />
            </Link>
          )}
        </div>
      </section>
    </header>
  );
}
