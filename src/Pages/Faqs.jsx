
import { useState } from "react";
import { Plus, Minus } from "lucide-react";


export function Faqs({faq}) {
  const [open, setOpen] = useState(false);

  return(
    <>
    
          
                <div 
                  className={`faq-card ${open ? "open" : "closed"}`}>
                  <div className="d-flex justify-s-between align-center faq-header">
                    <h5>{faq.question}</h5>
                    <button onClick={()=> setOpen(!open)}>
                      {open? <Minus/> : <Plus /> }
                    </button>
                  </div>

                  <div className="faq-question">{faq.answer}</div>
                </div>
    
    
          </>
  )
}