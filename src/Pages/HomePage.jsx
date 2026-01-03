import { useRef } from "react";
import {
  MoveUpRight,
  MoveRight,
  MapPin,
  Phone,
  Mail,
  ClipboardClock,
} from "lucide-react";
import { NavBar } from "../Components/NavBar";
import {
  whatWeOffer,
  investmentReturns,
  landListings,
  clientTestimonials,
  diluxTeam,
  diluxFaqs,
} from "../../content";
import { TestimonialCard } from "../Components/TestimonialCard";
import howItWorksImage1 from "/src/assets/how-it-works/consultation.jpg";
import howItWorksImage3 from "/src/assets/how-it-works/money-transfer.png";
import { Faqs } from "./Faqs";
import { DiluxAds } from "../Components/DiluxAds";
import diluxLogo from "../assets/dilux-logo.png";

import "./HomePage.css";

export function HomePage() {
  return (
    <div className="homepage-container">
      <header>
        <div className="img-overlay">
          <img src={howItWorksImage1} alt="" />
        </div>
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

        <DiluxAds/>

         <section className="how-it-works-section">
          <div className="container">
            <h3>How it works</h3>

            <div className="h-i-w-list">
              {/* continer text for how it works */}
              <div>
                <ol>
                  <li>
                    <p>Consultation</p>
                    Speak with our expert advisors to align your financial goals
                    with the right property opportunities. We provide
                    personalized market insights to ensure your strategy is
                    built on a solid foundation.
                  </li>

                  <li>
                    <p>Secure your Investment</p>
                    Finalize your selection through our streamlined, secure
                    portal. From legal verification to digital contracts, we
                    handle the complexities so you can commit to your asset with
                    total confidence.
                  </li>

                  <li>
                    <p>Receive Payouts</p>
                    Sit back and watch your capital grow. Whether through rental
                    yield or property appreciation, your returns are deposited
                    directly to you, providing a hassle-free passive income
                    stream
                  </li>
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

      <footer className="bg-dark-maroon text-white">
        <div className="container">
          <div className="upper-container">
            <div>
              <figure className="logo">
                <img src={diluxLogo} alt="Dilux Properties Logo" />
              </figure>
              <h6 className="text-white">
                Dilux <span className="text-light-gold">Properties</span>
              </h6>
              <p>
                Providing secure, certified, and affordable land investments
                across Nigeria. From titled acres to a guaranteed 24% ROI, we
                turn 'dirt' into your future wealth and legacy.
              </p>
            </div>

            <div>
              <h6 className="text-light-gold">Our offers</h6>
              <ul>
                <li>
                  <a href="#">24% investment ROI</a>
                </li>
                <li>
                  <a href="#">available lands and properties</a>
                </li>
                <li>
                  <a href="#">certified land titles</a>
                </li>
                <li><a href="#">legal compliance</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-light-gold">lets connect</h6>
              <ul>
                <li>
                  <a href="">
                    <MapPin/> 1007 Adeola Odeku St, Victoria Island, Lagos
                  </a>
                </li>
                <li>
                  <a href="tel:+2349012345678">
                    <Phone /> +234 901 234 5678
                  </a>
                </li>
                <li>
                  <a href="mailto:info@diluxproperties.com">
                    <Mail /> info@diluxproperties.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <ClipboardClock /> Working Hours: Mon - Fri: 9am - 6pm
                  </a>
                </li>
                <li>
                  <ul className="social-container">
                    <li>
                      <a className="fb" href=""></a>
                    </li>
                     <li>
                      <a className="whatsapp" href=""></a>
                    </li>
                     <li>
                      <a className="tiktok" href=""></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
            <br /><br />
          <div>
            <p className="text-center">
              &copy; 2025 all right reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
