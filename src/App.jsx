
import { Routes , Route } from "react-router-dom"
import { ProductPage } from "./Pages/Product/Product"
import { CartPage } from "./Pages/CartPage"
import { SignUpPage } from "./Pages/Auth/SignUpPage"
import { SignInPage } from "./Pages/Auth/SignInPage"
import { ConfirmOtpPage } from "./Pages/Auth/ConfirmOtpPage"
import { LandingPage } from './Pages/LandingPage/LandingPage'
import { OrderPage } from './Pages/OrderPage'

import './App.css'

import bag1 from'./assets/images/bag.jpg';
import bag2 from'./assets/images/bag2.jpg';
import shoe from'./assets/images/shoe.jpg';
import shoe2 from'./assets/images/shoe2.jpg';

function App() {


  const products = [
  {
    id: "1",
    name: "Aurora Silk Clutch",
    category: "Bags",
    price: 120,
    rating: 4.8,
    description: "Elegant evening clutch with a soft gold chain and futuristic shimmer.",
    image: bag1,
  },
  {
    id: "2",
    name: "Celeste Glow Serum",
    category: "Skincare",
    price: 65,
    rating: 4.9,
    description: "Hydrating face serum infused with pink quartz essence for radiant skin.",
    image:  bag2,
  },
  {
    id: "3",
    name: "Luna Pearl Necklace",
    category: "Jewelry",
    price: 150,
    rating: 4.7,
    description: "Classic pearl necklace reimagined with a modern metallic sheen.",
    image: shoe,
  },
  {
    id: "4",
    name: "Ethereal Essence Perfume",
    category: "Fragrance",
    price: 98,
    rating: 4.8,
    description: "A luxurious blend of rose, amber, and stardust tones — timeless allure.",
    image: shoe2,
  },
  {
    id: "5",
    name: "Velora Satin Heels",
    category: "Footwear",
    price: 180,
    rating: 4.6,
    description: "Soft rose-gold heels with a futuristic strap design and cushioned comfort.",
    image: bag1,
  },
  {
    id: "6",
    name: "Nova Radiant Watch",
    category: "Accessories",
    price: 210,
    rating: 4.9,
    description: "Smart analog hybrid watch blending elegance and subtle tech brilliance.",
    image: bag2,
  },
  {
    id: "7",
    name: "Iris Luxe Tote",
    category: "Bags",
    price: 145,
    rating: 4.7,
    description: "Spacious tote bag crafted from vegan leather with gold-trimmed handles.",
    image: shoe2,
  },
  {
    id: "8",
    name: "Seraph Aura Mist",
    category: "Beauty",
    price: 55,
    rating: 4.8,
    description: "Refreshing body mist that leaves a glowing scent of pink jasmine and ",
    image: shoe,
  },
  {
    id: "9",
    name: "Eclipse Wireless Pods",
    category: "Tech",
    price: 130,
    rating: 4.9,
    description: "Wireless earbuds designed with a metallic rose finish and premium clarity.",
    image: bag1,
  },
  {
    id: "10",
    name: "Opal Glow Compact",
    category: "Makeup",
    price: 75,
    rating: 4.8,
    description: "Illuminating compact powder that enhances natural glow with a silky touch.",
    image: bag2,
  },
];

  return (
    <>
      <Routes>
        <Route path="/" element = {<ProductPage products = {products}/>} />
        <Route path="/cart" element = {<CartPage/>}/>
        <Route path="/sign-up" element = {<SignUpPage/>}/>
        <Route path = "/sign-in" element = { <SignInPage /> } />
        <Route path="/confirm-otp" element = {<ConfirmOtpPage/>} />
        <Route path="/home" element = {<LandingPage products={products}/>}/>
        <Route path="/order" element = {<OrderPage/>}/>
      </Routes>
    </>
  )
}

export default App
