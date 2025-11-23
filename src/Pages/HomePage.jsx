import { MoveUpRight } from 'lucide-react'
import { NavBar } from '../Components/NavBar'

import './HomePage.css'


export function HomePage(){
  return (
    <div className='homepage-container'>
      <header>
        <div className="img-overlay"></div>
         <NavBar/>
          <section className='hero-section-container'>
            <h1 className='text-white'>
              Prime Real Estate. <br />
              <span className='text-light-gold'>
                Guaranteed 24% Returns.
              </span> 
            </h1>

            <p className='short-description text-light-gray'>
              Invest with clarity and confidence. Access exclusive, fully vetted real estate opportunities, <em className='FWB text-light-gold'>legally approved </em>to deliver <em className='FWB text-light-gold'>premium lifestyle</em> rewards alongside your guaranteed <em className='FWB text-light-gold'>24%</em> annual growth.
            </p>

            
      <button className='bg-white text-dark-maroon'>
        Book Consultation Now
        <MoveUpRight size={20} />
      </button>

          </section>
      </header>
      <main>
        <h1></h1>
      </main>
       
    </div>
  )
}