import { useNavigate } from "react-router-dom";
import { Link,} from "react-router-dom";
import { motion } from "framer-motion";


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
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // This acts like an Observer
          viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
          transition={{ duration: 0.5 }}
         className="investment-video-container">
          <video src="" preload="none" poster={IRE} controls></video>
          <a
            target="_blank"
            href="https://wa.me/2349070539019"
            className="contact-ceo-link"
          >
            Contact CEO &nbsp; <FaWhatsapp size={25} />
          </a>
          <h5 className="font-body">Igwe Real Estate (IRE)</h5>
        </motion.div>

        <div className="investment-content-container">
          <h3 className="">
            You’ve Worked Hard for Your{" "}
            <strong className="text-light-gold">Money</strong> . Let It Grow in
            Something Real.
          </h3>
          <p>
           Don't just earn wealth—grow it. Dilux secures your future by placing your capital in strategic land assets with high development potential, offering a 24% projected return while you focus on life.
          </p>
          <br />
          <div className="roi-cards-container">
            {roiCards.map((card) => {
              return (
                <div 
                ref={ref}
                key={card.id} 
                className={`roi-cards ${inView ? "reveal-active" : "reveal"}`}>
                  <div className={`roi-cards-upper-container ${card.bg} text-white`}>
                    {card.icon}
                    <span className="title">{card.title}</span>
                  </div>
                  <div className="roi-cards-lower-container">
                  <p className="description">
                       {card.shortDesc}
                  </p>
                   <Link>Read more  </Link>
                  </div>
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
