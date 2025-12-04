import axios from "axios";
import { useState } from "react";
import { Announcement } from "../../components/Announcement";
import { Footer } from '../../components/Footer';
import { ProductCardsGrid } from './ProductCardsGrid';
import { FilterProducts } from '../../components/FilterProducts'
import { SideBarHeader } from '../../components/SideBarHeader';

import { GluxNotification } from "../../utils/utilsFunctions";
import {  IsLoggedIn  } from "../../utils/Auth";

IsLoggedIn();

export function ProductPage({products, allProducts}){
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToCartMsg, setIsAddedToCartMsg] = useState("");

  // a function that handles adding productv to cart 
  // by calling and api and giving it the product id
  const handleAddToCart =  async (id) =>{
       try{
          let res = await axios.post(`http://localhost:5000/api/cart/:${id}`);
          setIsAddedToCart(true);
          setIsAddedToCartMsg(res.data.message || "Added");
       }catch(err){
          console.log(err);
          setIsAddedToCart(false);
          setIsAddedToCartMsg(err.message || "Failed to add to cart");
       }finally{
          // maybe show a notification that product has been added to cart
       }
  }




  return(
     <div className="d-flex flex-column">
      {isAddedToCartMsg && (
        <GluxNotification
          type={isAddedToCart ? "success" : "error"}
          message={isAddedToCartMsg}
        />
      )}
       <SideBarHeader />
       <Announcement />
       <FilterProducts/>
       <ProductCardsGrid products={products} allProducts={allProducts}/>
       <Footer />
     </div>
  );
}