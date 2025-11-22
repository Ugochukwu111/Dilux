import { NavLink} from 'react-router-dom'
import { ShieldCheck, TrendingUp, LandPlot, Users,Menu  } from "lucide-react"
import { useState } from 'react'
import diluxLogo from '../assets/dilux-logo.png'

import './NavBar.css'

export function NavBar() {
   
  const[isNavBar, setIsNavBar] = useState(false);



  return (
    <div className='nav-bar-container-wrapper'>
    <div className={`nav-bar-container ${isNavBar?'active-nav': '' }`}>
      <figure className='dilux-logo'>
        <img src={diluxLogo} alt="diluc logo" />
      </figure>

     <div 
       className={`d-flex align-center flex-1 justify-s-between navbar-book-btn-container 
         ${isNavBar? 'show' : ''}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="investment-plan">
              <TrendingUp />
              <span>
                Investment Plan
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio">
              <LandPlot />
              <span>
                Portfolio
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="our-team">
              <Users />
              <span>
                Our Team
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="faqs">
               <ShieldCheck />
               <span>
                 FAQs/S
               </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className='bg-dark-maroon text-white'>
        Book Consultation Now
      </button>
      </div>

     <button 
       className='d-none nav-bar-btn'
       onClick={()=>{ setIsNavBar(prev => !prev) ; console.log(isNavBar)}}
       >
        <Menu />
     </button>
      
    </div>
    </div>
  );
}
