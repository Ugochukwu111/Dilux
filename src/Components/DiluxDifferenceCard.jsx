
import { useInView } from "../Hooks/UseInView";

export  function DiluxDifferenceCard({ offer }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  
  return (
    <div 
      key={offer.id}
      ref={ref} 
      className={`offer-card ${offer.bgcolor} ${
      inView ? "reveal-active" : "reveal"
      }`}>
      <span className="text-white ">{offer.icon}</span>
      <p className="FWB offer-title text-white">{offer.name}</p>
      <p className="offer-description text-bright-white">{offer.description}</p>
    </div>
  );
}
