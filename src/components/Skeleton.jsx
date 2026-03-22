import "../Pages/Product/ProductCard.css";
import "./Skeleton.css";
import "./CartDetails.css"; 
import "../Pages/OrderPage.css"; 
import { ShoppingCart } from "lucide-react";

export function ProductCardSkeleton({ productLoading }) {
  return (
    <div className={`product-card is-skeleton ${!productLoading ? "fade-out" : ""}`}>
      {/* Out of stock overlay */}
      <div className={`low-quantity-overlay show`}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>

      <figure>
        {/* New badge placeholder */}
        <span className="product-card-bage skeleton skeleton-text">&nbsp;</span>

        {/* Like button placeholder */}
        <button className="product-like-btn d-none skeleton skeleton-btn">&nbsp;</button>

        {/* Image placeholder */}
        <div className="skeleton skeleton-image"></div>

        {/* Discount placeholder */}
        <figcaption className="off-percent skeleton skeleton-text">&nbsp;</figcaption>
      </figure>

      <div className="product-info">
        <div tabIndex={0}>
          {/* Product name */}
          <p className="product-name skeleton skeleton-text">&nbsp;</p>

          {/* Price container */}
          <p className="product-discount-price product-price-container">
            <span className="product-price skeleton skeleton-text">&nbsp;</span>
            <span className="text-grey">
              <del className="skeleton skeleton-text">&nbsp;</del>
            </span>
          </p>

          {/* Stars */}
          <span className="product-stars d-flex align-center skeleton skeleton-stars">&nbsp;</span>
        </div>

        {/* Add to cart button */}
        <button
          className="product-icon product-cart-btn skeleton skeleton-btn"
          type="button"
          aria-label="add to cart button"
        >
          <ShoppingCart size={22} /> &nbsp;
        </button>
      </div>
    </div>
  );
}

export function CCardSkeleton() {
  return (
    <div className="cart-details-card is-skeleton">
      {/* Delete button */}
      <button className="del-btn skeleton skeleton-btn" />

      {/* Delivery date */}
      <h2 className="skeleton skeleton-text" style={{ width: "50%" }} />

      <div className="d-flex f-wrap cart-details-wrapper justify-s-between">
        {/* Left side */}
        <div className="d-flex">
          <figure className="skeleton skeleton-image" />

          <div className="product-info-container">
            <h3 className="skeleton skeleton-text" style={{ width: "70%" }} />
            <p className="skeleton skeleton-text" style={{ width: "90%" }} />

            <div>
              <p className="FWB skeleton skeleton-text" style={{ width: "50%" }} />
              <p className="FWB skeleton skeleton-text" style={{ width: "40%" }} />
              <p className="FWB skeleton skeleton-text" style={{ width: "45%" }} />
            </div>

            <div className="d-flex flex-column buy-product-btn-container">
              <span className="skeleton skeleton-text" style={{ width: "60%" }} />

              <div className="d-flex align-center">
                <div
                  className="cart-item-select-quantity skeleton skeleton-text"
                  style={{ width: "60px", height: "36px" }}
                />
                <div
                  className="bg-heading text-white skeleton skeleton-btn"
                  style={{ width: "80px", height: "36px", marginLeft: "0.5em" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side — delivery options */}
        <div className="delivery-options-wrapper">
          <h3 className="skeleton skeleton-text" style={{ width: "70%" }} />
          <div className="delivery-options-container">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="skeleton skeleton-text"
                style={{ height: "40px", marginBottom: "0.5em" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrderCardSkeleton() {
  return (
    <div className="order-container is-skeleton">
      <div className="upper-container">
        <div className="d-flex order-total-content-container">
          <p>
            <span className="FWB skeleton skeleton-text"></span>
            <span className="skeleton skeleton-text"></span>
          </p>
          <p>
            <span className="FWB skeleton skeleton-text"></span>
            <span className="FWB text-green skeleton skeleton-text"></span>
          </p>
        </div>

        <div>
          <span className="FWB skeleton skeleton-text"></span>
          <span className="skeleton skeleton-text"></span>
        </div>
      </div>

      <div className="bottom-container">
        {Array(2).fill(0).map((_, i) => (
          <div key={i} className="order-product-card">
            <figure>
              <div className="skeleton skeleton-image"></div>
            </figure>

            <div className="order-product-card-info">
              <div>
                <p className="FWB skeleton skeleton-text"></p>
                <p className="FWB skeleton skeleton-text"></p>
                <p className="FWB skeleton skeleton-text"></p>
                <p className="FWB skeleton skeleton-text"></p>
              </div>
              <button className="skeleton skeleton-btn"></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

