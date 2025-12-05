import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { formatMoney } from "../utils/money.js";
import { AddToCartAPI } from "../utils/utilsFunctions.jsx";
import { DeliveryOption } from './DeliveryOption.jsx'

export function CCard({cartItem, setRefreshCart}) {
   const [quantity, setQuantity] = useState(1);

   const handleQuantityChange = (e) => {
     setQuantity(Number(e.target.value));
   };

   const navigate = useNavigate();
   const handleClick = () => {
     navigate(`/product/${cartItem.productId._id}`);
   };

   const handelAddToCartAPI = async (productId, quantity) => {
    
     try{
       const res = await AddToCartAPI(productId, quantity);
       console.log("Add to cart response:", res);
       if(!res){
         console.error("No response from AddToCartAPI");
         return;
       }
     } catch (err) {
       console.error("Error adding to cart:", err);
     }finally{
      setRefreshCart(prev => !prev);
     }
   };

   console.log( cartItem._id)

   return(
    <div className="cart-details-card">
            <h2>Deliverydate: Tuesday, October 21</h2>
            <div className="d-flex f-wrap cart-details-wrapper justify-s-between">
              <div className="d-flex">
                <figure>
                  <img loading="lazy" 
                  src={cartItem.productId.image} 
                  alt={cartItem.productId.name} 
                  />
                </figure>

                <div className="product-info-container">
                  <h3>{cartItem.productId.name}</h3>
                  <p>{cartItem.productId.description}</p>
                  <div>
                    <p className="FWB">
                      <span>price: {
                      formatMoney(cartItem.productId.price)}</span> &nbsp;
                      <del>
                        {formatMoney(cartItem.productId.offPrice)}</del>
                    </p>
                    <p className="FWB">Quantity: {cartItem.quantity}</p>
                    <p className="FWB text-green">Total: 
                      <span>
                        {formatMoney(cartItem.total)}
                      </span>
                    </p>
                  </div>

                  <div
                    className="d-flex 
                    flex-column buy-product-btn-container"
                  >
                    <Link onClick={handleClick}>
                      <u>See more details about product</u>
                    </Link>

                    <div className="d-flex align-center">
                      <select
                        onChange={handleQuantityChange}
                        className="cart-item-select-quantity"
                        name=""
                        value={quantity}
                        id=""
                      >
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                        <option value="6"> 6</option>
                        <option value="7"> 7</option>
                        <option value="8"> 8</option>
                        <option value="9"> 9</option>
                        <option value="10">10</option>
                      </select>
                      <button 
                        className="bg-heading text-white"
                        onClick = {()=>{
                          handelAddToCartAPI(cartItem.productId._id, quantity);
                        }}
                      >Add</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="delivery-options-wrapper">
                <h3>Choose a delivery option:</h3>
                <div className="delivery-options-container">
                  { cartItem.deliveryOptions.map((option, index)=>{
                      return(
                        <DeliveryOption 
                        key={index} 
                         cartItemId = {cartItem._id}
                        option={option}/>
                      )
                  }) }
                </div>
              </div>
            </div>
          </div>
   )
}