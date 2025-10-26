
import { Routes , Route } from "react-router-dom"
import { ProductPage } from "./Pages/Product"
import { CartPage } from "./Pages/CartPage"
import { SignUpPage } from "./Pages/SignUpPage"
import { SignInPage } from "./Pages/SignInPage"
import { ConfirmOtpPage } from "./Pages/ConfirmOtpPage"
import { LandingPage } from './Pages/LandingPage'

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
      </Routes>
    </>
  )
}

export default App
