import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CartDetails } from '../components/CartDetails'

export function CartPage(){
  return (
     <div>
      <Header />
       <CartDetails />
       <Footer />
     </div>
  )
}