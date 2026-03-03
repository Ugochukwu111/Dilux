import { Link } from "react-router-dom";
import { MapPin,Phone,Mail, ClipboardClock} from "lucide-react";
import diluxLogo from "../assets/dilux-logo.png";

export function Footer() {
  return (
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
                Providing premium, genuine, and secured property  investments in 
                Benin City, Porthacourt, Abuja and Lagos.                
              </p>
            </div>

            <div>
              <h6 className="text-light-gold">Our offers</h6>
              <ul>
                  <li>
                  <Link to="/properties">Landed properties</Link>
                </li>
                <li>
                  <Link to="/investment-plan">25% - 23% investment plans</Link>
                </li>
                <li>
                  <a to="/investment-plan" target="_blank" href="https://wa.me/2349070539019">Business Consulting</a>
                </li>
                <li>
                    Legal Land documentations
                </li>
                  <li>
                    Property marketing
                </li>
                   <li>
                    Property management 
                </li>
                <li>
                  Property development
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-light-gold">lets connect</h6>
              <ul>
                <li>
                  <a href="">
                    <MapPin /> G10 Elizabeth Nmoye Plazza,188 Uselu Lagos Road ,Benin City
                  </a>
                </li>
                <li>
                  <a href="tel:+2348114838937">
                    <Phone /> +234 8114 838 937
                  </a>
                </li>
                     <li>
                  <a href="tel:+2349070539019">
                    <Phone /> +234 9070 539 019
                  </a>
                </li>
                <li>
                  <a href="mailto:diluxproperties8@gmail.com">
                    <Mail /> diluxproperties8@gmail.com
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
                      <a className="whatsapp" target="_blank" href="https://wa.me/2349070539019"></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div>
            <p className="text-center">&copy; {new Date().getFullYear()} Dilux Properties, all right reserved.</p>
          </div>
        </div>
      </footer>
  )
}
