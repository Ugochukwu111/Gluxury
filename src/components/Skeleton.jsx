import "../Pages/Product/ProductCard";
import "./Skeleton.css";

export function ProductCardSkeleton({productLoading}) {
  return (
    <div className={`product-card is-skeleton ${!productLoading ? "fade-out" : ""}`}>
      <figure>
        <div className="skeleton skeleton-image"></div>
      </figure>

      <div className="product-info">
        <div>
          <p className="product-name skeleton skeleton-text"></p>
          <span className="product-stars skeleton skeleton-stars"></span>
          <p className="product-short-description skeleton skeleton-text"></p>
        </div>

        <div className="d-flex justify-s-between align-center product-price-container">
          <p className="product-discount-price skeleton skeleton-text"></p>

          <div className="d-flex flex-column align-center p-relative">
            <button className="product-icon product-cart-btn skeleton skeleton-btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
