import { useAuth } from "../../context/useContext";
import { Announcement } from "../../components/Announcement";
import { Footer } from "../../components/Footer";
import { ProductCardsGrid } from "./ProductCardsGrid";
import { SideBarHeader } from "../../components/SideBarHeader";
import { ScrollingInfo } from "../../components/ScrollingInfo";
import { ProductCardPrice } from "../../components/ProductCardPrice";
import { useEffect, useState } from "react";
  
import { ProductContainer } from '../../components/ProductContainer';
import { FilterProducts } from "../../utils/utilsFunctions";

export function ProductPage({
  allProducts,
  cartLength,
  handleGetCartAPI,
  productLoading,
  setSearchResult
}) {
  const [shoes, setShoes] = useState([]);
  const [bags, setBags] = useState([]);

useEffect(() => {
  async function loadShoes() {
    const shoeData = await FilterProducts("shoe", 20);
    setShoes(shoeData);
  }

    async function loadBags() {
    const bagData = await FilterProducts("bag", 20);
    setBags(bagData);
  }

  
  loadShoes()
  loadBags();
}, []);

  


  return (
    <div className="d-flex flex-column padding-top ">
      <SideBarHeader setSearchResult={setSearchResult} cartLength={cartLength} />
      {/* <div className="hidden">
        <ScrollingInfo />
      </div> */}
      <br />
      <ProductContainer 
        productCategory='Shoes'
        products = {shoes}
        handleGetCartAPI={handleGetCartAPI}
        />
        <ProductContainer 
        productCategory='Bags'
        headerColor = 'bg-accent-pink'
        products={bags}
        handleGetCartAPI={handleGetCartAPI}
        />
      {/* <ProductContainer 
        productCategory="Flash Sales" 
        headerColor = 'bg-red'
        handleGetCartAPI={handleGetCartAPI}
        /> */}
      {/* <ProductCardPrice 
        handleGetCartAPI={handleGetCartAPI}
         /> */}
      <ProductCardsGrid
        productLoading ={productLoading}
        allProducts={allProducts}
        handleGetCartAPI={handleGetCartAPI}
      />
      <Footer />
    </div>
  );
}
