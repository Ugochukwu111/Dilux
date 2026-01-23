import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adsData } from "../../content";

import "./DiluxAds.css";

export function DiluxAds() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % adsData.length);
    }, 5000); // 5 seconds rotation

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const currentAd = adsData[index];

  return (
    <section className="ads-section">
      <div className="container d-flex justify-center">
        <div className="ads-container">
          <div>
            <h4 className="text-light-gold">{currentAd.heading}</h4>
            <small className="text-white">{currentAd.subtext}</small>
          </div>

          <Link to={currentAd.link}>
          <button className="text-white bg-light-gold">
            {currentAd.btnText}
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
