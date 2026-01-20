import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppIcon() {

  const whatsAppStyle = {
    'color': '#ffffff',
    'position': 'fixed',
    'right':'3rem',
    'bottom': '3rem',
    'background-color': '#25D366',
    'border-radius': '50%',
     'display': 'grid',
     'place-items': 'center',
     'padding': '.35em',
     'box-shadow': '2px 2px 4px var(--dark-gray)',
     'z-index': '100',
     'cursor': 'pointer',

  }


  return (
     <a
       style={whatsAppStyle} 
       title="whats app">
       <FaWhatsapp size={50}/>
     </a>
  )
}
