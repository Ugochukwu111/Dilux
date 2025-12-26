import { MoveUpRight, MoveRight, MapPin } from "lucide-react";
import { useRef, } from "react";
import { NavBar } from "../Components/NavBar";
import { whatWeOffer, investmentReturns, landListings, clientTestimonials } from "../../content";
import { TestimonialCard } from '../Components/TestimonialCard'

import "./HomePage.css";

export function HomePage() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);



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
            <br />
            <br />
            <div className="offers-container">
              {whatWeOffer.map((offer) => {
                return (
                  <div key={offer.id} className={`offer-card ${offer.bgcolor}`}>
                    <span className="text-white ">{offer.icon}</span>
                    <p className="FWB offer-title text-white">{offer.name}</p>
                    <p className="offer-description text-bright-white">
                      {offer.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="investment-plan-section">
          <div className="container investment-plan-container">
            <div className="left-container">
              <h2 className="text-white">
                Your Guaranteed <span className="text-light-gold">24% </span>{" "}
                Cash Return
              </h2>
              <br />
              <p>
                We commit to full transparency. The DILUX All-Cash Return Plan
                ensures your principal is secured by legally audited real estate
                assets, delivering clear, predictable monthly income and a
                guaranteed total profit of 24%
              </p>
              <br />
              <div className="d-flex flex-1 justify-s-between">
                <p className="FWB">Capital</p>
                <p className="FWB text-green">Income</p>
              </div>
              <div>
                <br />
                {investmentReturns.map((investment) => {
                  return (
                    <div className="investment-card d-flex align-center">
                      <p>${investment.capital}</p> &nbsp; &nbsp; &nbsp;
                      <div className="flex-1 line">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      &nbsp; &nbsp; &nbsp;
                      <p className="text-green FWB">${investment.income}</p>
                    </div>
                  );
                })}
              </div>
              <br />
              <br />
              <button>
                See More Details <MoveRight />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h3 className="text-center">
              Prime Locations. Exclusive Land & Property Listings.
            </h3>
            <p className="text-center">
              Explore our curated collection of fully vetted land parcels and
              luxury properties across Nigeria's most strategic regions. Every
              listing is secured by our legal audit, guaranteeing clean titles
              and long-term value.
            </p>
            <br />
            <div className="land-listings-container">
              {landListings.map((listing) => {
                return (
                  <div className="land-listing-card">
                    <figure>
                      <img src={listing.imageURL} alt={listing.title} />
                      <span className="listing-status">{listing.status}</span>
                      <span className="listing-security">
                        {listing.security}
                      </span>
                    </figure>
                    <div className="land-listing-content">
                      <p className="listing-title">{listing.title}</p>
                      <p className="location">
                        <MapPin />
                        {listing.location}
                      </p>
                      <p className="size">{listing.size}</p>
                      <p>
                        <span className="new-price">{listing.newPrice}</span>
                        <span className="old-price">
                          <del>{listing.oldPrice}</del>
                        </span>
                      </p>
                    </div>
                    <button>Book for Inspection</button>
                  </div>
                );
              })}
            </div>

            <br />
            <br />
            <button className="view-more-lands">
              <span>View More</span> <MoveRight />
            </button>
          </div>
        </section>

        <section className="ours-numbers-section">
          <div className="container">
            <h3>Our Numbers</h3>
            <p>
              The people , The goverment, know who we are , Numbers dont lie!
            </p>
            <div className="numbers-container">
              <p>
                <span className="FWB">26+</span>
                <span className="text-dark-gray">states</span>
              </p>
              <p>
                <span className="FWB">354+</span>
                <span className="text-dark-gray">sold properties</span>
              </p>
              <p>
                <span className="FWB">156+</span>
                <span className="text-dark-gray">Investment deals</span>
              </p>

              <p>
                <span className="FWB">24+</span>
                <span className="text-dark-gray">government agency</span>
              </p>
            </div>
            <br />
            <h5>
              <u>see our certigicate</u>
            </h5>
          </div>
        </section>

        {/* <section>
          <div className="container">
            <h3 className="text-center">
              Real Results, Real Trust: Verified Returns from Dilux Investors
            </h3>

            <p className="text-center sub-text text-dark-gray">
              Our clients' success is the true measure of our due diligence.
              Read the stories of investors who have achieved their financial
              goals through our **guaranteed 24% returns** and **legally
              audited** real estate assets.
            </p>

            <div ref={wrapperRef} className="smooth-wrapper">
              <div ref={contentReff} className="smooth-content">
                <div className="spacer"></div>
                <div className="testimonial-container">
              {
                clientTestimonials.map((testimonial, index)=>{
                  return(
                    <TestimonialCard key={testimonial.id} testimonial = {testimonial}
                    index ={index}/>
                  )
                })
              }
              </div>
              </div>
              <div className="client-testimonial-card">
                 <div>
                  <figure>
                    <img src="" alt="" />
                  </figure>
                  <p className="clients-name FWB">
                    A. Williams
                  </p>
                 </div>

                 <br />
                 <div className="testimonial-content">
                   <p>
                    The 24% returns were delivered exactly as promised. Dilux is the most secure investment platform I've used. They handle the legal work with complete transparency.
                   </p>
                   <span>location: Investor, Abuja</span>
                 </div>
              </div>
            </div>
          </div>
        </section> */}
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
      </main>
    </div>
  );
}
