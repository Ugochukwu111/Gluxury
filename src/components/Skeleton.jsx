import "../Pages/Product/ProductCard";
import "./Skeleton.css";
import "./CartDetails.css"; 
import "../Pages/OrderPage.css"; 

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

