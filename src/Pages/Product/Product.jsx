
import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { ProductCardsGrid } from "./ProductCardsGrid";
import { FilterProducts } from "../../components/FilterProducts";
import { SideBarHeader } from "../../components/SideBarHeader";
import { ScrollingInfo } from "../../components/ScrollingInfo";
import { GluxNotification, AddToCartAPI } from "../../utils/utilsFunctions";

export function ProductPage({ allProducts ,cartLength , handleGetCartAPI}) {
  return (
    <div className="d-flex flex-column ">
      <SideBarHeader cartLength = {cartLength} />
      <Announcement />
      <div className="hidden">
        <ScrollingInfo />
      </div>
      <br />
      <br />
      <br />
      <FilterProducts />
      <ProductCardsGrid allProducts={allProducts} handleGetCartAPI={handleGetCartAPI} />
      <Footer />
    </div>
  );
}
