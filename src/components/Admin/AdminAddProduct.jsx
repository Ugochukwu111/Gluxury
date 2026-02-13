import { AddProductForm } from "./AddProductForm";
import { SearchBar } from "../SearchBar";
import { AdminProductGrid } from "./AdminProductGrid";
import { BackgroundCover, GluxNotification } from "../../utils/utilsFunctions";
import { X, Save, ArrowLeft, LoaderCircle } from "lucide-react";
import "./AdminAddProduct.css";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { SelectColor } from "../../components/SelectColor";
import { SelectSize } from "../../components/SelectSize";

export function AdminAddProduct({
  allProducts,
  refreshProducts,
  handleOpenDelete,
  adminAnalytics,
}) {
  const [openEdithProduct, setOpenEdithProduct] = useState(false);
  const [edithProduct, setEdithProduct] = useState({});
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [notifKey, setNotifKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [adminResults, setAdminResults] = useState([]);
  const [query, setQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

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
      if (key === "image" || key === "newImageFile") return;

      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });
    if (edithProduct.newImageFile)
      formData.append("image", edithProduct.newImageFile);
    setIsLoading(true);
    console.log("save hit");
    try {
      let res = await api.put(`/api/products/${edithProduct._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsSuccessful(true);
    } catch (err) {
      console.log(err);
      setIsSuccessful(false);
    } finally {
      refreshProducts();
      setIsLoading(false);
      handleCloseEdit();
      setNotifKey((prev) => prev + 1);
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get("edit");

    if (productId) {
      const product = allProducts.find((p) => p._id === productId);
      if (product) setEdithProduct(product);
      setOpenEdithProduct(!!product);
    } else {
      setOpenEdithProduct(false);
      setEdithProduct({});
    }
  }, [location.search, allProducts]);

  const handleOpenEdit = (product) => {
    setEdithProduct(product);
    setOpenEdithProduct(true);
    navigate(`?edit=${product._id}`, { replace: false });
  };

  const handleCloseEdit = () => {
    setOpenEdithProduct(false);
    setEdithProduct({});
    navigate("", { replace: false });
  };

  // Initialize query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search") || "";
    setQuery(searchQuery);

    if (searchQuery) {
      // Optional: fetch results immediately
      api
        .get(`/api/products/search?query=${searchQuery}`)
        .then((res) => setAdminResults(res.data))
        .catch(() => setAdminResults([]));
    } else {
      setAdminResults([]);
    }
  }, [location.search]);

  // Update URL whenever query changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    navigate(`?${params.toString()}`, { replace: true });
  }, [query, navigate]);

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
        <div className="admin-product-section">
          <h3 className="text-center">Product Collections:</h3>
          <br />
          <SearchBar
            placeholder="Search in admin..."
            onResults={setAdminResults}
            query={query}
            setQuery={setQuery}
          />
          <br />
          <AdminProductGrid
            handleOpenEdit={handleOpenEdit}
            allProducts={adminResults.length > 0 ? adminResults : allProducts}
            setOpenEdithProduct={setOpenEdithProduct}
            setEdithProduct={setEdithProduct}
            handleOpenDelete={handleOpenDelete}
          />

          {openEdithProduct && (
            <BackgroundCover
              onClick={(e) => {
                if (e.target === e.currentTarget) handleCloseEdit();
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
                      handleCloseEdit();
                    }}
                  >
                    <X />
                  </button>
                </div>
                <p id="edith-product-desc">
                  Update your luxury product details
                </p>
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
                        setEdithProduct({
                          ...edithProduct,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="grid-input-container ">
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


                  </div>

                  <SelectSize
                    sizes={[35, 36, 37, 38, 39, 40]}
                    selectedSizes={edithProduct.size || []}
                    onAddSize={(size) =>
                      setEdithProduct((prev) => ({
                        ...prev,
                        size: [...(prev.size || []), size],
                      }))
                    }
                    onRemoveSize={(size) =>
                      setEdithProduct((prev) => ({
                        ...prev,
                        size: (prev.size || []).filter((s) => s !== size),
                      }))
                    }
                  />

                  <SelectColor
                    colors={edithProduct.colors || []}
                    isAdmin={true}
                    onAddColor={(color) =>
                      setEdithProduct((prev) => ({
                        ...prev,
                        colors: [...(prev.colors || []), color],
                      }))
                    }
                    onRemoveColor={(hex) =>
                      setEdithProduct((prev) => ({
                        ...prev,
                        colors: (prev.colors || []).filter((c) => c !== hex),
                      }))
                    }
                  />
                </div>

                <div className="d-flex justify-s-between align-center f-wrap  edith-form-btns-container">
                  <button
                    className="bg-red text-white"
                    type="button"
                    onClick={() => {
                      handleCloseEdit();
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
