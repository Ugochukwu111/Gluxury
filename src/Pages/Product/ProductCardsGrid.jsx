import { ProductCard } from "./ProductCard";

import "./ProductCards.css";

export function ProductCardsGrid({ allProducts, setProductId, handleAddToCart }) {
  return (
    
    <main>
      <div className="container  products-container">
        {allProducts?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setProductId={setProductId}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </main>
  );
}
