import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CartDetails } from '../components/CartDetails'
import { SideBarHeader } from '../components/SideBarHeader';

export function CartPage({cartItems, handleGetCartAPI, cartLength, onResults}){
  return (
     <div>
       <SideBarHeader cartLength = {cartLength} onResults={onResults} />
       <CartDetails 
         cartItems={cartItems} 
         handleGetCartAPI = { handleGetCartAPI }
         />
       <Footer />
     </div>
  )
}