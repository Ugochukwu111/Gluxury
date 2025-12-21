import { ProductCard } from "./ProductCard";

import "./ProductCards.css";

export function ProductCardsGrid({ allProducts , handleGetCartAPI}) {
  return (
    
    <main>
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
