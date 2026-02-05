import axios from "axios";
import { toast } from "react-toastify";
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
import { SideBarHeader } from "../../components/SideBarHeader";

import "./ProductDetailsPage.css";

export function ProductDetailsPage({cartLength, handleGetCartAPI}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);


  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products/id/${id}`).then((res) => {
      setProduct(res.data);
      handleGetCartAPI()
    });
  }, [id]);

  

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handelAddToCartAPI = async (productId, quantity) => {
    setIsAddingToCart(true);
    try {
      const res = await AddToCartAPI(productId, quantity);
      toast.success(`${quantity} item(s) added to cart!`);
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error("Error adding to cart");
    } finally {
      setIsAddingToCart(false);
      handleGetCartAPI()
    }
  };
  return (
    <div>
      <SideBarHeader  cartLength={cartLength}/>
      <main className="product-details-page-main container">
        {/* left container || top ( for mobile)*/}
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
            <div>
              <h2 className="FWB">
                {product?.name}
              </h2>
            </div>
            <hr />
            <div>
            <p className="d-flex f-wrap align-center">
              <span className="FWB details-product-price">
                {formatMoney(product?.price)}
              </span>
              &nbsp; &nbsp;
              <del className="text-muted">
                {formatMoney(product?.offPrice)}
              </del>
              <span className="off-percent">
                 {product?.discount * 100 || 0} %
              </span>
            </p>
              <span className="FWB">
                  {renderStars(product?.rating)}
                </span>
                <p className="FWB">Category: {product?.category}
                </p>
            </div>
            <hr />

            <div className="d-flex justify-s-between f-wrap product-price-rate-category-container">
              <div>
                <p className="">
                  Available sizes :
                </p>
                <button>{product?.size}</button>
              </div>
            </div>
            <div className="d-flex justify-s-around align-center f-wrap">
              <button
                onClick={() => {
                  handelAddToCartAPI(product?._id, quantity);
                }}
                className="bg-heading text-white details-add-to-cart-btn"
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
            <p>
              <a href="">
                <u>call +2347045253045 to place an order</u>
              </a>
            </p>
          </div>
        </div>

        {/* right container || bottom ( for mobile)*/}
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
