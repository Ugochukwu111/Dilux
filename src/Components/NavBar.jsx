import { NavLink, Link} from 'react-router-dom'
import { ShieldCheck, TrendingUp, LandPlot, Users,Menu  } from "lucide-react"
import { useState } from 'react'
import diluxLogo from '../assets/dilux-logo.png'

import './NavBar.css'

export function NavBar() {
   
  const[isNavBar, setIsNavBar] = useState(false);



  return (
    <div className='nav-bar-container-wrapper'>
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
            <NavLink to="investment-plan">
              <TrendingUp />
              <span>
                Investment Plan
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="properties">
              <LandPlot />
              <span>
                Properties
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="certificate">
              <Users />
              <span>
                Certificate
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="contact us">
               <ShieldCheck />
               <span>
                Contact us
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
