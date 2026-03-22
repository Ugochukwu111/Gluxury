import { Footer } from "../../components/Footer";
import { ProductCardsGrid } from "./ProductCardsGrid";
import { SideBarHeader } from "../../components/SideBarHeader";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "../../components/WhatsAppIcon.jsx";

import { ProductContainer } from "../../components/ProductContainer";
import { FilterProducts } from "../../utils/utilsFunctions";

export function ProductPage({
  allProducts,
  cartLength,
  handleGetCartAPI,
  productLoading,
}) {
  const [shoes, setShoes] = useState([]);
  const [loadingShoes, setLoadingShoes] = useState(false);
  const [bags, setBags] = useState([]);
  const [loadingBags, setLoadingBags] = useState(false);

  useEffect(() => {
    async function loadShoes() {
      setLoadingShoes(true);
      try {
        const shoeData = await FilterProducts("shoe", 20);
        setShoes(shoeData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingShoes(false);
      }
    }

    async function loadBags() {
      try {
        setLoadingBags(true);
        const bagData = await FilterProducts("bag", 20);
        setBags(bagData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingBags(false);
      }
    }

    loadShoes();
    loadBags();
  }, []);

  return (
    <div className="d-flex flex-column padding-top ">
      <SideBarHeader cartLength={cartLength} />

      <br />
      <WhatsAppIcon />
      <ProductContainer
        loading = {loadingShoes}
        productCategory="Shoes"
        products={shoes}
        handleGetCartAPI={handleGetCartAPI}
        searchQuery="shoe"
      />
      <ProductContainer
        loading ={loadingBags}
        productCategory="Bags"
        headerColor="bg-accent-pink"
        products={bags}
        handleGetCartAPI={handleGetCartAPI}
        searchQuery="bag"
      />
      <ProductCardsGrid
        productLoading={productLoading}
        allProducts={allProducts}
        handleGetCartAPI={handleGetCartAPI}
      />
      <Footer />
    </div>
  );
}
