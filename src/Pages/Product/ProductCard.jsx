import dayjs from "dayjs";
import { useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import { renderStars } from "../../utils/utilsFunctions.jsx";
import { useNavigate } from "react-router-dom";
import { AddToCartAPI } from "../../utils/utilsFunctions.jsx";
import { formatMoney } from "../../utils/money.js";
import { BadgeCheck, CircleX } from "lucide-react";
import "./ProductCard.css";

dayjs.extend(relativeTime);

export function ProductCard({ product, handleGetCartAPI }) {
  const [isAddedToCart, setIsAddedToCart] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = async (productId) => {
    try {
      const res = await AddToCartAPI(productId);
      // handleGetCartAPI() was define in app
      handleGetCartAPI(); // this lets me update cartlength and diplay at the header
      setIsAddedToCart("true");
    } catch (err) {
      console.log(err);
      setIsAddedToCart("false");
    }
  };

  const daysAgo = dayjs().diff(dayjs(product.createdAt), "day");
  const isNew = daysAgo <= 14;


  return (
    <div
      className={`product-card ${
        isAddedToCart === "true" ? "added" : "failed"
      }`}
    >
      <figure>
        {isNew && <span className="product-card-bage">new</span>}
        <button className="product-like-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
        </button>
        <img src={product.image} alt={product.name} />
        <figcaption className="stock-price">
          {product.offPercent * 100}%
        </figcaption>
      </figure>
      <div className="product-info">
        <div onClick={handleClick} tabIndex={0}>
          <p className="product-name">{product.name}</p>
          <span className="product-stars d-flex align-center">{renderStars(product.rating)} &nbsp; (<span>{product.rating }</span>) </span>
          <p className="product-description">
            {product.description}</p>
        </div>

        <div className="d-flex justify-s-between align-center ">
          <p className="product-discount-price product-price-container">
            <span className="product-price"> {formatMoney(product.price)}
            </span>
            &nbsp;
            <span>
              <del>{formatMoney(product.offPrice)}</del>
            </span>
          </p>

          <div className=" d-flex flex-column align-center p-relative">
            {isAddedToCart === "true" && (
              <BadgeCheck
                className="added-icon"
                onAnimationEnd={() => setIsAddedToCart(null)}
              />
            )}
            {isAddedToCart === "false" && (
              <CircleX
                className="not-added-icon"
                onAnimationEnd={() => setIsAddedToCart(null)}
              />
            )}
            <button
              onClick={() => {
                handleAddToCart(product._id);
              }}
              className="product-icon product-cart-btn"
              type="button"
              aria-label="add to cart button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
