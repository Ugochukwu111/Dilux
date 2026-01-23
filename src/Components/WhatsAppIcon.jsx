import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppIcon() {

  const whatsAppStyle = {
    'color': '#ffffff',
    'position': 'fixed',
    'right':'3rem',
    'bottom': '3rem',
    'backgroundColor': '#25D366',
    'borderRadius': '50%',
     'display': 'grid',
     'placeItems': 'center',
     'padding': '.35em',
     'boxShadow': '2px 2px 4px var(--dark-gray)',
     'zIndex': '100',
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
