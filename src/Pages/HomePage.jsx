import { MoveUpRight } from "lucide-react";
import { NavBar } from "../Components/NavBar";
import { whatWeOffer } from '../../content'

import "./HomePage.css";

export function HomePage() {
  return (
    <div className="homepage-container">
      <header>
        <div className="img-overlay"></div>
        <NavBar />
        <section className="hero-section-container">
          <h1 className="text-white">
            Prime Real Estate. <br />
            <span className="text-light-gold">Guaranteed 24% Returns.</span>
          </h1>

          <p className="short-description text-light-gray">
            Invest with clarity and confidence. Access exclusive, fully vetted
            real estate opportunities,{" "}
            <em className="FWB text-light-gold">legally approved </em>to deliver{" "}
            <em className="FWB text-light-gold">premium lifestyle</em> rewards
            alongside your guaranteed{" "}
            <em className="FWB text-light-gold">24%</em> annual growth.
          </p>

          <button className="bg-white text-dark-maroon">
            Book Consultation Now
            <MoveUpRight size={20} />
          </button>
        </section>
      </header>
      <main>
        <section className="why-choose-us-section">
          <div className="container">
            <h2>The Dilux Difference</h2>
            <p className="text-dark-gray sub-text">
              Guaranteed returns stem from our stringent, multi-layered audit.
              We secure stable, legally compliant, exclusive assets.
            </p>
            <br /><br />
            <div className="offers-container">
              {whatWeOffer.map((offer)=>{
                return(
                  <div key={offer.id} className= {`offer-card ${offer.bgcolor}`}>
                 <span className="text-white ">{offer.icon}</span>
                 <p className="FWB offer-title text-white">{offer.name}</p>
                 <p className="offer-description text-bright-white">{offer.description}</p>
               </div>
                )
              })}
               
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
