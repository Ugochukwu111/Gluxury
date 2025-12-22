import { ProductCard } from "./ProductCard";

import "./ProductCards.css";

export function ProductCardsGrid({ allProducts , handleGetCartAPI}) {
  return (
    
    <main>
      <h3>All Products</h3>
      <br />
      <div className="container  products-container">
        {allProducts?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleGetCartAPI = {handleGetCartAPI}
          />
        ))}
      </div>
    </main>
  );
}
