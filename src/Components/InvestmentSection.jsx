import { useNavigate } from "react-router-dom";


import IRE from "../assets/team/IRE.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MoveRight } from "lucide-react";
import { useInView } from "../Hooks/UseInView";
import { roiCards } from "../../content";

export function InvestmentSection() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="investment-plan-section">
      <div className="container investment-plan-container">
        <div className="investment-video-container">
          <video src="" preload="none" poster={IRE} controls></video>
          <a
            target="_blank"
            href="https://wa.me/2349070539019"
            className="contact-ceo-link"
          >
            Contact CEO &nbsp; <FaWhatsapp size={25} />
          </a>
          <h5 className="font-body">Igwe Real Estate (IRE)</h5>
        </div>

        <div className="investment-content-container">
          <h3 className="">
            You’ve Worked Hard for Your{" "}
            <strong className="text-light-gold">Money</strong> . Let It Grow in
            Something Real.
          </h3>
          <p>
            Wealth isn’t only about how much you earn, but how wisely you grow
            it. While you focus on your work and family, Dilux helps you place
            your money in strategically located land with strong development
            potential. It’s a thoughtful way to turn years of effort into
            lasting value—with projected returns of up to 24% over time.
          </p>
          <br />
          <div className="roi-cards-container">
            {roiCards.map((card) => {
              return (
                <div 
                ref={ref}
                key={card.id} 
                className={`roi-cards ${inView ? "reveal-active" : "reveal"}`}>
                   {card.icon}
                  <p>
                    <span className="title">{card.title}</span>
                    <span className="description">
                       {card.text}
                    </span>
                  </p>
                </div>
              );
            })}

          </div>
          <br />
          <button
            className="bg-dark-maroon text-white"
            onClick={() => {
              navigate("/investment-plan");
            }}
          >
            Read More <MoveRight />
          </button>
        </div>
      </div>
    </section>
  );
}
