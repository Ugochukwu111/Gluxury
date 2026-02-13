import { Upload, Plus, LoaderCircle, X } from "lucide-react";
import { useRef, useState } from "react";
import { renderStars } from "../../utils/utilsFunctions";
import "./AddProductForm.css";
import { BackgroundCover, GluxNotification } from "../../utils/utilsFunctions";
import api from "../../utils/api";
import { formatMoney } from "../../utils/money";
import { SelectColor } from "../../components/SelectColor";
import { SelectSize } from "../../components/SelectSize";

export function AddProductForm({ refreshProducts }) {
  const [isFormActive, setIsFormActive] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [notifKey, setNotifKey] = useState(0);
  const formRef = useRef(null);
  const sizes = [35, 36, 37, 38, 39, 40];
  const [imagePreview, setImagePreview] = useState(null);

  const [formValues, setFormValues] = useState({
    image: null,
    rating: 3,
    name: "",
    price: "",
    offPrice: "",
    offPercent: 0,
    discount: 0,
    stockquantity: "",
    category: "bag",
    size: [],
    colors: ["#000000"],
  });

  const [activePercent, setActivePercent] = useState(null);
  const discountOptions = [0.1, 0.15, 0.2, 0.3, 0.4];
  const [loading, setLoading] = useState(false);
  const [pendingColor, setPendingColor] = useState("#ffffff");

  const updateField = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    formRef.current.reset();

    setFormValues({
      image: null,
      rating: 3,
      name: "",
      price: "",
      offPrice: "",
      offPercent: 0,
      discount: 0,
      stockquantity: "",
      category: "bag",
      size: [],
      colors: ["#000000"],
    });

    setActivePercent(null);
  };

  const handleDiscountClick = (percent) => {
    setActivePercent(percent);
    updateField("discount", percent);
    formValues.offPercent = percent;
    console.log(formValues.offPercent);
    const off = Number(formValues.price) + Number(formValues.price * percent);
    updateField("offPrice", off.toFixed(2));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      if (formValues.image) {
        formData.append("image", formValues.image);
      }

      Object.keys(formValues).forEach((key) => {
        if (key === "image") return;

        if (Array.isArray(formValues[key])) {
          formData.append(key, JSON.stringify(formValues[key]));
        } else {
          formData.append(key, formValues[key]);
        }
      });

      const res = await api.post("/api/products/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await refreshProducts();
      setNotifKey((prev) => prev + 1);
      setIsSuccessful(true);
      resetForm();
    } catch (error) {
      console.error(error);
      setNotifKey((prev) => prev + 1);
      setIsSuccessful(false);
    } finally {
      setLoading(false);
      setImagePreview(null);
    }
  };

  return (
    <section className="add-products-section">
      <BackgroundCover className={`${loading ? "show" : "hide"}`}>
        <LoaderCircle
          size={52}
          strokeWidth={2.75}
          className={`spin text-white `}
        />
      </BackgroundCover>

      {notifKey > 0 && (
        <GluxNotification
          key={notifKey}
          className={isSuccessful ? "success" : "fail"}
        >
          {isSuccessful
            ? "Product Added to Inventory"
            : "Upload Failed. Please try again"}
        </GluxNotification>
      )}
      <div>
        <div className="d-flex justify-s-between align-start">
          <div className="text-content">
            <h3>Add to Inventory</h3>
            <p>Input product details, pricing.</p>
          </div>

          <button
            className="bg-accent-gold text-white"
            onClick={() => setIsFormActive((prev) => !prev)}
          >
            + Add Product
          </button>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          className={`${isFormActive ? "form-active" : "closed-form"}`}
        >
          <div className="form-content-container">
            <div className="image-input-container">
              <div className="image-upload-text-content">
                <Upload className="M-auto" />
                <p>Drop your image here or click to browse</p>
                <span className="text-muted">PNG, JPG up to 10MB</span>
              </div>
              <input
                type="file"
                accept="image/*"
                id="image-input"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    updateField("image", file); // store file for upload
                    const previewUrl = URL.createObjectURL(file); // create preview
                    setImagePreview(previewUrl);
                  }
                }}
                required
              />
              {imagePreview && (
                <div className="image-preview-container">
                  <img
                    src={imagePreview}
                    alt={formValues.name || "Product Preview"}
                  />
                </div>
              )}
            </div>

            <div className="form-input-container">
              <div className="d-flex product-name-details-container f-wrap align-center  ">
                <div className="">
                  <label htmlFor="product-name">Product name</label>
                  <input
                    type="text"
                    id="product-name"
                    placeholder="Eg: etheral silk green bag"
                    className="M-auto"
                    value={formValues.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    minLength={5}
                    maxLength={125}
                    required
                  />
                </div>
                <div className="d-flex align-center justify-center">
                  <span>{renderStars(formValues.rating)}</span>

                  <input
                    type="number"
                    step={0.5}
                    min={0}
                    max={5}
                    value={formValues.rating}
                    onChange={(e) =>
                      updateField("rating", Math.min(Number(e.target.value), 5))
                    }
                    id="product-rate-count"
                  />
                </div>
              </div>

              <div className="d-flex justify-s-around align-center f-wrap">
                <div>
                  <label htmlFor="product-price">Price(₦)</label>
                  <input
                    type="number"
                    step={1}
                    id="product-price"
                    placeholder="5000$"
                    value={formValues.price}
                    onChange={(e) => {
                      const value = e.target.value;
                      updateField("price", value);

                      if (activePercent && value !== "") {
                        const off =
                          Number(value) + Number(value) * activePercent;
                        updateField("offPrice", off.toFixed(2));
                      } else {
                        updateField("offPrice", "");
                      }
                    }}
                    required
                  />
                </div>

                <p className="">
                  <del> {formatMoney(formValues.offPrice)}</del>
                </p>
              </div>

              <div>
                <div className="d-flex justify-center off-price-btn-container">
                  {discountOptions.map((percent) => (
                    <button
                      key={percent}
                      type="button"
                      onClick={() => handleDiscountClick(percent)}
                      className={
                        activePercent === percent ? "bg-green text-white" : ""
                      }
                    >
                      {percent * 100}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="d-flex align-center justify-s-evenly f-wrap">
                <div>
                  <label htmlFor="product-stock">Stock Quantity:</label>
                  <input
                    type="number"
                    step={1}
                    placeholder="50"
                    id="product-stock"
                    value={formValues.stockquantity}
                    onChange={(e) => {
                      const value = e.target.value;
                      updateField("stockquantity", value === "" ? "" : value);
                    }}
                    required
                  />
                </div>

                <div className="category-container">
                  <label htmlFor="product-category">Category:</label>
                  <select
                    id="product-category"
                    value={formValues.category}
                    onChange={(e) => updateField("category", e.target.value)}
                  >
                    <option value="bag">Bag</option>
                    <option value="shoe">Shoe</option>
                  </select>
                </div>
              </div>

              {formValues.category === "shoe" && (
                <SelectSize
                  sizes={sizes} // all available sizes
                  selectedSizes={formValues.size} // the currently selected sizes
                  onAddSize={(size) =>
                    updateField("size", [...formValues.size, size])
                  }
                  onRemoveSize={(size) =>
                    updateField(
                      "size",
                      formValues.size.filter((s) => s !== size),
                    )
                  }
                />
              )}

              <SelectColor
                colors={formValues.colors}
                isAdmin={true}
                onAddColor={(color) =>
                  updateField("colors", [...formValues.colors, color])
                }
                onRemoveColor={(hex) =>
                  updateField(
                    "colors",
                    formValues.colors.filter((c) => c !== hex),
                  )
                }
              />

              <button
                type="submit"
                className="add-product-button  text-white"
                disabled={loading}
              >
                Add Product
                <Plus />
              </button>
            </div>
          </div>
        </form>
      </div>

      <br />
    </section>
  );
}
