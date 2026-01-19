import { SideBarHeader } from "../../components/SideBarHeader";
import { useSearchParams } from "react-router";
import { useState,useEffect } from "react";
import { ProductCardsGrid } from "./ProductCardsGrid";
import { PackageSearch } from "lucide-react";
import "./ProductSearchPage.css";
import "./ProductCards.css";
import { ProductCard } from "./ProductCard";
import { Footer } from "../../components/Footer";
import { ListFilter } from "lucide-react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export function ProductSearchPage({
  handleGetCartAPI,
  cartLength,
}) {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const discountPercentage = [0.5, 0.4, 0.3, 0.2, 0.1];
  const [priceRange, setPriceRange] = useState(50);
  const [seclectedDiscountPercent, setSelectedDiscountPercent] = useState(.5);

   useEffect( () => {
    if (!query) return;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/products/search?q=${query}`
      );
      setSearchResults(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
      
  }, [query]);

  return (
    <>
      <SideBarHeader
        cartLength={cartLength}
      />
      <div className="product-search-page-container container ">
        <div className="filter-and-search-product-container">
          <div className="filter-container">
            <div className=" w100">
              <div>
                <div className="d-flex align-center justify-s-between">
                  <p>Price ( ₦ )</p> <button className="bg-transparent text-link">Apply</button>
                </div>
                <input 
                 type="range" 
                 min={0} 
                 max={1000} 
                 step={10}
                 value={priceRange}
                 onChange={(e) => setPriceRange(Number(e.target.value))} 
                 />
                 <p>
                  get prices below <span>{formatMoney(priceRange)}</span>
                 </p>
              </div>
              <br />
              <h5>Discount Percent</h5>
              <br />
              <hr />

              {discountPercentage.map((percent) => {
                return (
                  <label key={percent} className="off-percent-option">
                    <input
                      type="radio"
                      value={seclectedDiscountPercent}
                      id="discount-percent"
                      name="discount-percent"
                      onChange={(e)=>{setSelectedDiscountPercent(Number(e.target.value))}}
                    />
                    {percent * 100}% or more
                  </label>
                );
              })}
            </div>
            <button className="text-white bg-heading">
              <ListFilter /> Clear Filter
            </button>
          </div>

          <div className="d-flex flex-1 flex-column justify-center ">
            {searchResults.length === 0 ? (
              <div className="d-flex flex-1 flex-column align-center justify-center">
                <PackageSearch size={100} />
                <h2 className="text-center">Search for products</h2>
              </div>
            ) : (
              <div className="search-product-container">
                {searchResults.map((product) => {
                  return (
                    <ProductCard
                      key={product._id}
                      product={product}
                      handleGetCartAPI={handleGetCartAPI}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
