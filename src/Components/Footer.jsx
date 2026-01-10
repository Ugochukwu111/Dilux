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
                <li>
                  <a href="#">legal compliance</a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-light-gold">lets connect</h6>
              <ul>
                <li>
                  <a href="">
                    <MapPin /> 1007 Adeola Odeku St, Victoria Island, Lagos
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
          <br />
          <br />
          <div>
            <p className="text-center">&copy; 2025 all right reserved</p>
          </div>
        </div>
      </footer>
  )
}
