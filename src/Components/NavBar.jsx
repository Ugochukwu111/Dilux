import { NavLink, Link, useNavigate} from 'react-router-dom'
import { ShieldCheck, TrendingUp, LandPlot, Users,Menu  } from "lucide-react"
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

import diluxLogo from '../assets/dilux-logo.png'

import './NavBar.css'

export function NavBar() {

  const navigate = useNavigate();
  const[isNavBar, setIsNavBar] = useState(false);

/*  
when nav bar is active ,
clicking on the blured background will run the function 
"handleCloseNavBar" 
which closes it
 */
  const handleCloseNavBar = () => {
    if(isNavBar){
      setIsNavBar(false);
    }
  }

  return (
    <div 
     onClick={handleCloseNavBar}
     className={`nav-bar-container-wrapper ${isNavBar?'active': '' }`}>
    <div className={`nav-bar-container ${isNavBar?'active-nav': '' }`}>
      <Link to="/">
      <figure className='dilux-logo'>
        <img src={diluxLogo} alt="diluc logo" />
      </figure>
      </Link>

     <div 
       className={`d-flex align-center flex-1 justify-s-between navbar-book-btn-container 
         ${isNavBar? 'show' : ''}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/investment-plan">
              <TrendingUp />
              <span>
                Investment Plan
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/properties">
              <LandPlot />
              <span>
                Properties
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">
               <ShieldCheck />
               <span>
                Contact us
               </span>
            </NavLink>
          </li>
        </ul>
      </nav>
       
       <HashLink smooth to='/contact-us#contact-form-section'>
      <button 
       className='bg-dark-maroon text-white'>
        Book Consultation Now
      </button>
      </HashLink>
      </div>

     <button 
       className='d-none nav-bar-btn'
       onClick={()=>{ setIsNavBar(prev => !prev) ;}}
       >
        <Menu />
     </button>
      
    </div>
    </div>
  );
}
