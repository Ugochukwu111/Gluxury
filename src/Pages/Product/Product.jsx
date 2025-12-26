import { useAuth } from "../../context/useContext";
import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { ProductCardsGrid } from "./ProductCardsGrid";
import { SideBarHeader } from "../../components/SideBarHeader";
import { ScrollingInfo } from "../../components/ScrollingInfo";
import { ProductCardPrice } from "../../components/ProductCardPrice";

export function ProductPage({
  allProducts,
  cartLength,
  handleGetCartAPI,
  onResults,
  productLoading,
}) {
  return (
    <div className="d-flex flex-column ">
      <SideBarHeader cartLength={cartLength} onResults={onResults} />
      <Announcement />
      <div className="hidden">
        <ScrollingInfo />
      </div>
      <br />
      <br />
      <ProductCardPrice 
        handleGetCartAPI={handleGetCartAPI}
         />
      <ProductCardsGrid
        productLoading ={productLoading}
        allProducts={allProducts}
        handleGetCartAPI={handleGetCartAPI}
      />
      <Footer />
    </div>
  );
}
