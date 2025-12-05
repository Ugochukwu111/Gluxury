import axios from "axios";
import { useState } from "react";
import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { ProductCardsGrid } from "./ProductCardsGrid";
import { FilterProducts } from "../../components/FilterProducts";
import { SideBarHeader } from "../../components/SideBarHeader";
import {
  GluxNotification,
  AddToCartAPI,
} from "../../utils/utilsFunctions";




export function ProductPage({ allProducts }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [AddedToCartMsg, setIsAddedToCartMsg] = useState("");
  const [productId, setProductId] = useState(null);
    const [notifKey, setNotifKey] = useState(null);


      const handleAddToCart = async () => {
       try {
        const res = await AddToCartAPI(productId);
        setIsAddedToCart(true);
        setIsAddedToCartMsg(res);
        console.log('Add to cart response:', res);
       }catch(err){
        console.log(err);
        setIsAddedToCart(false);
        setIsAddedToCartMsg( 'Error adding to cart');
        setIsAddedToCartMsg(err|| 'Error adding to cart');
       }finally{
        setNotifKey((prev) => prev + 1);
       }
      }

  return (
    <div className="d-flex flex-column">
      {/* {notifKey && (
        <GluxNotification
          key={notifKey}
          className={isAddedToCart ? "success" : "error"}
          
        >
          {isAddedToCart ? AddedToCartMsg : `Failed to add to cart`}
        </GluxNotification>
      )} */}
      <SideBarHeader />
      <Announcement />
      <FilterProducts />
      <ProductCardsGrid 
        setProductId={setProductId}
        allProducts={allProducts}
        handleAddToCart={handleAddToCart}
         />
      <Footer />
    </div>
  );
}
