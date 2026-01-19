import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "../../components/Skeleton";

import "./ProductCards.css";

export function ProductCardsGrid({ allProducts , handleGetCartAPI, productLoading}) {
  return (
    
    <main>
      
      <div className="products-container-wrapper">
        <h3 className="bg-heading text-white">All Products</h3>
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
      </div>
    </main>
  );
}
