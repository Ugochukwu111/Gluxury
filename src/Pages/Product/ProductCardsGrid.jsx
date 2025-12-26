import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "../../components/Skeleton";

import "./ProductCards.css";

export function ProductCardsGrid({ allProducts , handleGetCartAPI, productLoading}) {
  return (
    
    <main>
      <h3>All Products</h3>
      <br />
      <div className="container  products-container">
        {
          productLoading
          ?Array(14).fill(0).map((_, i) => <ProductCardSkeleton
           key={i}
           productLoading = {productLoading}
            />)
          :  allProducts?.map((product) => (
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
