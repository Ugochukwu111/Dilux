import { FaWhatsapp } from "react-icons/fa"
import './WhatsAppIcon.css'

export function WhatsAppIcon() {


  return (
     <a className="whatsapp-icon" target="_blank" href="https://wa.me/2349070539019"
       title="whats app">
       <FaWhatsapp size={50}/>
     </a>
  )
}
