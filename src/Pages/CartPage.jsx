import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CartDetails } from '../components/CartDetails'
import { SideBarHeader } from '../components/SideBarHeader';

export function CartPage(){
  return (
     <div>
       <SideBarHeader />
       <CartDetails />
       <Footer />
     </div>
  )
}