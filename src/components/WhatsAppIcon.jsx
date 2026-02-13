import { FaWhatsapp } from "react-icons/fa"
import './WhatsAppIcon.css'

export function WhatsAppIcon() {


  return (
     <a className="whatsapp-icon" target="_blank" href="https://wa.me/2348131234567"
       title="whats app">
       <FaWhatsapp className="text-white" size={50}/>
     </a>
  )
}
