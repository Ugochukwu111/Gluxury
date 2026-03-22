import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import { renderStars } from "../../utils/utilsFunctions.jsx";
import { useNavigate } from "react-router-dom";
import { AddToCartAPI } from "../../utils/utilsFunctions.jsx";
import { formatMoney } from "../../utils/money.js";
import { Heart, ShoppingCart } from "lucide-react";
import "./ProductCard.css";

dayjs.extend(relativeTime);

export function ProductCard({ product, handleGetCartAPI }) {
  const [isAddedToCart, setIsAddedToCart] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product?._id}`);
  };

  const handleAddToCart = async (productId) => {
    try {
      const res = await AddToCartAPI(productId);
      // handleGetCartAPI() was define in app
      handleGetCartAPI(); // this lets me update cartlength and diplay at the header
      setIsAddedToCart("true");
      toast.success("Added to cart");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add to cart");
      setIsAddedToCart("false");
    }
  };

  const daysAgo = dayjs().diff(dayjs(product?.createdAt), "day");
  const isNew = daysAgo <= 14;
  console.log(product.stockquantity);
  return (
    <div
      className={`product-card ${
        isAddedToCart === "true" ? "added" : "failed"
      }`}
    >
      <div
        className={`low-quantity-overlay ${
          product?.stockquantity <= 0 ? "show" : ""
        }`}
      >
        <span>Out</span>
        <span>Of</span>
        <span>Stock</span>
      </div>
      <figure>
        {isNew && <span className="product-card-bage">new</span>}
        <button className="product-like-btn d-none">
          <Heart size={20} />
        </button>
        <img loading="lazy" src={product?.image} alt={product?.name} />
        <figcaption className="off-percent">
          -{product?.offPercent * 100}%
        </figcaption>
      </figure>
      <div className="product-info">
        <div onClick={handleClick} tabIndex={0}>
          <p className="product-name">{product?.name}</p>
          <p className="product-discount-price product-price-container">
            <span className="product-price">{formatMoney(product?.price)}</span>
            <span className="text-grey">
              <del>{formatMoney(product?.offPrice)}</del>
            </span>
          </p>
          <span className="product-stars d-flex align-center">
            {renderStars(product?.rating)} &nbsp; (
            <span>{product?.rating}</span>){" "}
          </span>
        </div>
        <button
          onClick={() => {
            handleAddToCart(product?._id);
          }}
          className="product-icon product-cart-btn"
          type="button"
          aria-label="add to cart button"
        >
          <ShoppingCart size={22} /> Add To Cart
        </button>
      </div>
    </div>
  );
}
