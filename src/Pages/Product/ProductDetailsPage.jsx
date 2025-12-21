import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import {
  ShoppingCart,
  MessageCircle,
  MapPinCheckInside,
  ArrowLeft,
  LoaderCircle,
} from "lucide-react";
import { formatMoney } from "../../utils/money";
import { renderStars } from "../../utils/utilsFunctions";
import { AddToCartAPI } from "../../utils/utilsFunctions";
import { GluxNotification } from "../../utils/utilsFunctions";

import "./ProductDetailsPage.css";

export function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addToCartMsg, setAddToCartMsg] = useState("");
  const [notifKey, setNotifKey] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
    setProduct(res.data);
    });
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handelAddToCartAPI = async (productId, quantity) => {
    setIsAddingToCart(true);
    try {
      const res = await AddToCartAPI(productId, quantity);
      if (!res) {
        setAddedToCart(false);
        console.error("No response from AddToCartAPI");
        return;
      }
      setAddedToCart(true);
      setAddToCartMsg(`${quantity}, Added`);
    } catch (err) {
      setAddedToCart(false);
      console.error("Error adding to cart:", err);
      setAddToCartMsg(`Error adding to cart`);
    } finally {
      setIsAddingToCart(false);
      setNotifKey((prev) => prev + 1);
    }
  };
  return (
    <div>
      {notifKey > 0 && (
        <GluxNotification
          key={notifKey}
          className={addedToCart ? "success" : "fail"}
        >
          {isAddingToCart ? addToCartMsg : addToCartMsg}
        </GluxNotification>
      )}

      <main className="product-details-page-main">
        <div className="container product-details-container">
          <div className="product-details-card">
            <figure>
              <img src={product?.image} alt={product?.name} />
              <button
                className="previous-btn"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ArrowLeft />
              </button>
            </figure>

            <div className="text-container">
              <h2 className="FWB">{product?.name}</h2>
              <p className="FWB">
                Description: &nbsp;
                <span className="text-muted">{product?.description}</span>
              </p>
              <p className="off-percent">{product?.offPercent * 100}%</p>
              <br />
              <div className="d-flex justify-s-between f-wrap product-price-rate-category-container">
                <div>
                  <p className="FWB">
                    Price: &nbsp;
                    <span className="text-green">
                      {formatMoney(product?.price)}
                    </span>
                    &nbsp; &nbsp;
                    <del className="text-light-red">
                      {formatMoney(product?.offPrice)}
                    </del>
                  </p>
                  <span className="FWB">
                    Rattings: &nbsp;
                    {renderStars(product?.rating)}
                  </span>
                </div>
                <div>
                  <p className="FWB">Category: {product?.category}</p>
                  <p className="FWB">size: {product?.size}</p>
                </div>
              </div>
              <br />
              <br />
              <div className="d-flex justify-s-around align-center f-wrap">
                <button
                  onClick={() => {
                    handelAddToCartAPI(product?._id, quantity);
                  }}
                  className="bg-heading text-white"
                >
                  {isAddingToCart ? (
                    <>
                      <LoaderCircle size={20} className={`spin text-white `} />
                      adding
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to cart
                    </>
                  )}
                </button>

                <select
                  onChange={handleQuantityChange}
                  value={quantity}
                  name=""
                  id=""
                  className="select-quantity"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="shipping-details-container">
          <br />
          <div>
            <h4>📦 Shipping & Order Details</h4>
            <p>
              Please note that your order will be shipped for pickup at the
              following location:
            </p>
            <br />
            <p className="text-muted FWB">
              Nigeria, Benin City, NewBenin ,<MapPinCheckInside size={16} />
            </p>

            <div>
              <h5>Need Assistance?</h5>
              <ul>
                <li>
                  For Directions to the Pickup Location or to Arrange Delivery:
                  Call{" "}
                  <a href="tel:+2347046253045">
                    <u>07046253045</u>
                  </a>{" "}
                  or contact us directly on
                  <a target="_blank" href="https://wa.me/2347046253045">
                    <u>WhatsApp.</u>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div>
            <h5>questions about this product?</h5>
            <p>Chart with us on whats app</p>
            <a target="_blank" href="https://wa.me/2347046253045">
              <button className="whats-app-btn">
                what's app
                <MessageCircle size={18} className="text-white" />
              </button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
