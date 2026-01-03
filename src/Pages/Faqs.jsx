import { useState } from "react";
import { Plus, Minus } from "lucide-react";


export function Faqs({faq}) {
  const [open, setOpen] = useState(false);

  return(
    <>
    
          
                <div 
                  className={`faq-card ${open ? "open" : "closed"}`}>
                  <div className="d-flex justify-s-between align-center faq-header">
                    <h6>{faq.question}</h6>
                    <button onClick={()=> setOpen(!open)}>
                      {open? <Minus size={20}/> : <Plus size={20} /> }
                    </button>
                  </div>
          

                  <div className="faq-question">{faq.answer}</div>
                </div>
    
    
          </>
  )
}