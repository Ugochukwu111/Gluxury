import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CartDetails } from '../components/CartDetails'
import { SideBarHeader } from '../components/SideBarHeader';

export function CartPage({cartItems, handelGetCartAPI, cartLength}){
  return (
     <div>
       <SideBarHeader cartLength = {cartLength}/>
       <CartDetails cartItems={cartItems} handelGetCartAPI={handelGetCartAPI}/>
       <Footer />
     </div>
  )
}