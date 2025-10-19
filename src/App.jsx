
import { Routes , Route } from "react-router-dom"
import { ProductPage } from "./Pages/Product"
import { CartPage } from "./Pages/CartPage"

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<ProductPage/>} />
        <Route path="/cart" element = {<CartPage/>}/>
      </Routes>
    </>
  )
}

export default App
