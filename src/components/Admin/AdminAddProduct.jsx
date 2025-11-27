import { AddProductForm } from "./AddProductForm";
import { FilterProducts } from "../FilterProducts";
import { SearchBar } from "../SearchBar";
import { AdminProductGrid } from "./AdminProductGrid";
import { GluxNotification } from "../../utils/utilsFunctions";
import { BackgroundCover } from "../../utils/utilsFunctions";
import { X, Save, ArrowLeft, LoaderCircle } from "lucide-react";
import "./AdminAddProduct.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";



export function AdminAddProduct({ allProducts, refreshProducts }) {
  const [openEdithProduct, setOpenEdithProduct] = useState(false);
  const [edithProduct, setEdithProduct] = useState({});
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [notifKey, setNotifKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const popupRef = useRef(null);
const previouslyFocusedElementRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setEdithProduct((prev) => ({
          ...prev,
          image: reader.result,
          newImageFile: file,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    Object.entries(edithProduct).forEach(([key, value]) => {
      if (key !== "image") formData.append(key, value);
    });
    if (edithProduct.newImageFile)
      formData.append("image", edithProduct.newImageFile);
    setIsLoading(true);
    try {
      let res = await axios.put(
        `http://localhost:5000/api/products/${edithProduct._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setNotifKey((prev) => prev + 1);
      setIsSuccessful(true);
    } catch (err) {
      console.log(err);
      setIsSuccessful(false);
      setNotifKey((prev) => prev + 1);
    } finally {
      refreshProducts();
      setOpenEdithProduct(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (openEdithProduct) {
      previouslyFocusedElementRef.current = document.activeElement;
      setTimeout(() => popupRef.current?.focus(), 0);
    } else {
      previouslyFocusedElementRef.current?.focus?.();
    }
  }, [openEdithProduct]);

  return (
    <>
      {notifKey > 0 && (
        <GluxNotification
          key={notifKey}
          className={isSuccessful ? "success" : "fail"}
        >
          {isSuccessful
            ? "Product Updated Successfully"
            : "Update Product Failed"}
        </GluxNotification>
      )}

      <AddProductForm refreshProducts={refreshProducts} />
      <div>
        <h3 className="text-center">Product Collections:</h3>
        <br />
        <div>
          <SearchBar />
          <FilterProducts />
          <AdminProductGrid
            allProducts={allProducts}
            setOpenEdithProduct={setOpenEdithProduct}
            setEdithProduct={setEdithProduct}
          />

          {openEdithProduct && (
            <BackgroundCover
            onClick={(e) => {
              setOpenEdithProduct(false);
            }}
            className={`${openEdithProduct ? "show" : "hide"}`}
          >
            <form
             
              ref={popupRef}
              id="edith-product-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="edith-product-title"
              aria-describedby="edith-product-desc"
              className={`edith-form ${openEdithProduct ? "show" : "hide"} `}
            >
              <div className="d-flex align-center justify-s-between">
                <h4 id="edith-product-title">Edith product</h4>
                <button
                  type="button"
                  aria-label="close edith product form button"
                  onClick={() => {
                    setOpenEdithProduct(false);
                  }}
                >
                  <X />
                </button>
              </div>
              <p id="edith-product-desc">Update your luxury product details</p>
              <div className="edith-form-input-container">
                <div className="edith-product-image-container">
                  <label htmlFor="edith-product-image">Product Image</label>
                  <input
                    type="file"
                    className="d-none"
                    id="edith-product-image"
                    onChange={handleImageChange}
                  />
                  <figure>
                    <img src={edithProduct.image} alt={edithProduct.name} />
                    <button
                      onClick={() =>
                        document.getElementById("edith-product-image").click()
                      }
                      type="button"
                      className="edith-product-photo-btn bg-text-muted"
                      disabled={true}
                    >
                      edith photo
                    </button>
                  </figure>
                </div>
                <br />
                <div>
                  <label htmlFor="edith-product-name">Name</label>
                  <input
                    type="text"
                    id="edith-product-name"
                    value={edithProduct.name || ""}
                    onChange={(e) =>
                      setEdithProduct({ ...edithProduct, name: e.target.value })
                    }
                  />
                </div>

                <div className="grid-input-container">
                  <div>
                    <label htmlFor="edith-price">Price</label>
                    <input
                      type="number"
                      id="edith-price"
                      value={edithProduct?.price || ""}
                      onChange={(e) => {
                        const price = Number(e.target.value);

                        setEdithProduct((prev) => {
                          const offPercent = prev.offPercent;
                          const offPrice = price + price * offPercent;

                          return {
                            ...prev,
                            price,
                            offPrice,
                          };
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="edith-stock-quantity">Stock:</label>
                    <input
                      type="number"
                      id="edith-stock-quantity"
                      value={edithProduct?.stockquantity || 0}
                      onChange={(e) =>
                        setEdithProduct({
                          ...edithProduct,
                          stockquantity: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="d-flex  flex-column ">
                    <label htmlFor="edith-category" className="">
                      Category:
                    </label>
                    <select
                      id="edith-category"
                      className="w100 flex-1"
                      value={edithProduct?.category || ""}
                      onChange={(e) =>
                        setEdithProduct({
                          ...edithProduct,
                          category: e.target.value,
                        })
                      }
                    >
                      <option value="bag">bag</option>
                      <option value="shoe">shoe</option>
                    </select>
                  </div>

                  <div
                    className={`${
                      edithProduct.category == "shoe" ? "d-none" : ""
                    }`}
                  >
                    <label htmlFor="edith-product-width">Width:</label>
                    <input
                      type="number"
                      id="edith-product-width"
                      value={edithProduct?.width || 0}
                      onChange={(e) =>
                        setEdithProduct({
                          ...edithProduct,
                          width: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div
                    className={`${
                      edithProduct.category == "shoe" ? "d-none" : ""
                    }`}
                  >
                    <label htmlFor="edith-product-width">Height:</label>
                    <input
                      type="number"
                      id="edith-product-height"
                      value={edithProduct?.height || 0}
                      onChange={(e) =>
                        setEdithProduct({
                          ...edithProduct,
                          height: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div
                    className={`${
                      edithProduct.category == "shoe" ? "" : "d-none"
                    }`}
                  >
                    <label className="text-center">Size</label>
                    <select
                      id="product-size"
                      className=" "
                      value={edithProduct?.size || 0}
                      onChange={(e) =>
                        setEdithProduct({
                          ...edithProduct,
                          size: e.target.value,
                        })
                      }
                    >
                      {[35, 36, 37, 38, 39, 40].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-s-between align-center f-wrap">
                <button
                  className="bg-red text-white"
                  type="button"
                  onClick={() => {
                    setOpenEdithProduct(false);
                  }}
                >
                  <ArrowLeft />
                  Cancel
                </button>
                <button
                  className="bg-green text-white"
                  onClick={handleSave}
                  type="button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoaderCircle className={`spin text-white `} />
                  ) : (
                    <Save />
                  )}
                  Save Changes
                </button>
              </div>
            </form>
          </BackgroundCover>
          )}
        </div>
      </div>
    </>
  );
}
