import { Link } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import { Trash } from "lucide-react";
import api from "../utils/api.js";

import { formatMoney } from "../utils/money.js";
import { AddToCartAPI } from "../utils/utilsFunctions.jsx";
import { DeliveryOption } from "./DeliveryOption.jsx";

export function CCard({ cartItem, setRefreshCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handelAddToCartAPI = async (productId, quantity) => {
    try {
      const res = await AddToCartAPI(productId, quantity);
    } catch (err) {
      console.error("Error adding to cart:", err);
    } finally {
      setRefreshCart((prev) => !prev);
    }
  };

  const handleDeliveryChange = async (cartItemId, optionIndex) => {
    try {
      const res = await api.put(`/api/cart/delivery`, {
        cartItemId,
        optionIndex,
      });
      setRefreshCart((prev) => !prev); // refresh cart after update
    } catch (err) {
      console.error("Error updating delivery option", err);
    }
  };

  const handleDeleteCartItem = async (cartItemId) => {
    try {
      const res = await api.delete("/api/cart/delete", {
        data: { cartItemId },
      });
      setRefreshCart((prev) => !prev);
    } catch (err) {
      console.error("delete cart error ", err);
    }
  };

  let selectedDeliveryDate =
    cartItem.deliveryOptions[cartItem.selectedDeliveryOption].date;

  return (
    <div className="cart-details-card">
      <button
        aria-label="delete cart item button"
        onClick={() => {
          handleDeleteCartItem(cartItem._id);
        }}
        className="del-btn"
      >
        <Trash />
      </button>
      <h2>
        Delivery date: {dayjs(selectedDeliveryDate).format("dddd MMMM D")}
      </h2>
      <div className="d-flex f-wrap cart-details-wrapper justify-s-between">
        <div className="d-flex">
          <figure>
            <img
              loading="lazy"
              src={cartItem.productId.image}
              alt={cartItem.productId.name}
            />
          </figure>

          <div className="product-info-container">
            <h3>{cartItem.productId.name}</h3>
            <p>{cartItem.productId.description}</p>
            <div>
              <p className="FWB">
                <span>price: {formatMoney(cartItem.productId.price)}</span>{" "}
                &nbsp;
                <del>{formatMoney(cartItem.productId.offPrice)}</del>
              </p>
              <p className="FWB">Quantity: {cartItem.quantity}</p>
              <p className="FWB text-green">
                Total:
                <span>{formatMoney(cartItem.total)}</span>
              </p>
            </div>

            <div
              className="d-flex 
                    flex-column buy-product-btn-container"
            >
              <Link to={`/product/${cartItem.productId._id}`}>
                <u>See product details</u>
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
                  onClick={() => {
                    handelAddToCartAPI(cartItem.productId._id, quantity);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="delivery-options-wrapper">
          <h3>Choose a delivery option:</h3>
          <div className="delivery-options-container">
            {cartItem.deliveryOptions.map((option, index) => {
              return (
                <DeliveryOption
                  key={index}
                  cartItem={cartItem}
                  optionIndex={index}
                  cartItemId={cartItem._id}
                  option={option}
                  handleDeliveryChange={handleDeliveryChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
