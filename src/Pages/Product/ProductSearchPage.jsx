import { SideBarHeader } from "../../components/SideBarHeader";
import { useSearchParams } from "react-router";
import { useState, useEffect } from "react";
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

export function ProductSearchPage({ handleGetCartAPI, cartLength }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const discountPercentage = [0.5, 0.4, 0.3, 0.2, 0.1];

  const query = searchParams.get("q");
const priceParam = searchParams.get("price");
const discountParam = searchParams.get("discount");

const price =
  priceParam !== null ? Number(priceParam) : undefined;

const discount =
  discountParam !== null ? Number(discountParam) : undefined;

  const [seclectedDiscountPercent, setSelectedDiscountPercent] =
    useState(discount);
  const [priceRange, setPriceRange] = useState(price?? 1000000);

  // const [tempPrice, setTempPrice] = useState(price);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE_URL}/api/products/search`, {
          params: {
            q: query,
            price,
            discount,
          },
        });
        setSearchResults(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query, price, discount]);

  return (
    <>
      <SideBarHeader cartLength={cartLength} />
      <div className="product-search-page-container container ">
        <div className="filter-and-search-product-container">
          <div className="filter-container">
            <div className=" w100">
              <div>
                <div className="d-flex align-center justify-s-between">
                  <p>Price ( ₦ )</p>{" "}
                  <button
                    onClick={() => {
                      setSearchParams((prev) => {
                        prev.set("price", priceRange); // Only updates URL when clicked
                        return prev;
                      });
                    }}
                    className="bg-transparent text-link"
                  >
                    Apply
                  </button>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100000}
                  step={1500}
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
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
                      value={percent}
                      checked={seclectedDiscountPercent === percent}
                      id="discount-percent"
                      name="discount-percent"
                      onChange={(e) => {
                        setSearchParams((prev) => {
                          prev.set("discount", percent);
                          return prev;
                        });
                        setSelectedDiscountPercent(percent);
                      }}
                    />
                    {percent * 100}% or more
                  </label>
                );
              })}
            </div>
            <button
              onClick={() => {
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.delete("price");
                  params.delete("discount");
                  return params;
                });
              }}
              className="text-white bg-heading"
            >
              <ListFilter /> Clear Filter
            </button>
          </div>

          <div className="d-flex flex-1 flex-column justify-center ">
            <p>
              search result matching , name:{" "}
              <span className="FWB">{query},</span> &nbsp; price-below:
              <span className="FWB"> { price !== undefined && formatMoney(price)},</span> &nbsp;
              discount-below : <span className="FWB">{ discount !== undefined && discount * 100}%</span>
            </p>
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
