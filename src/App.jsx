
import { Routes , Route } from "react-router-dom"
import { ProductPage } from "./Pages/Product/Product"
import { CartPage } from "./Pages/CartPage"
import { SignUpPage } from "./Pages/Auth/SignUpPage"
import { SignInPage } from "./Pages/Auth/SignInPage"
import { ConfirmOtpPage } from "./Pages/Auth/ConfirmOtpPage"
import { LandingPage } from './Pages/LandingPage/LandingPage'
import { OrderPage } from './Pages/OrderPage'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<ProductPage/>} />
        <Route path="/cart" element = {<CartPage/>}/>
        <Route path="/sign-up" element = {<SignUpPage/>}/>
        <Route path = "/sign-in" element = { <SignInPage /> } />
        <Route path="/confirm-otp" element = {<ConfirmOtpPage/>} />
        <Route path="/home" element = {<LandingPage/>}/>
        <Route path="/order" element = {<OrderPage/>}/>
      </Routes>
    </>
  )
}

export default App
