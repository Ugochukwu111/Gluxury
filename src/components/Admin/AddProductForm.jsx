import { Upload, Plus,LoaderCircle  } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { renderStars } from "../../utils/utilsFunctions";
import "./AddProductForm.css";
import { BackgroundCover } from "../../utils/utilsFunctions";

export function AddProductForm() {
  const [isFormActive, setIsFormActive] = useState(false);

  const [formValues, setFormValues] = useState({
    image: null,
    rating: 3,
    name: "",
    description: "",
    price: "",
    offPrice: "",
    discount: 0,
    stockquantity: "",
    category: "bag",
    width: "",
    height: "",
    size: "",
  });

  const [activePercent, setActivePercent] = useState(null);
  const discountOptions = [0.1, 0.15, 0.2, 0.3, 0.4];
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleDiscountClick = (percent) => {
    setActivePercent(percent);
    updateField("discount", percent);

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
        if (key !== "image") formData.append(key, formValues[key]);
      });

      console.log(formValues)

     const res = await axios.post( "http://localhost:5000/api/products/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="add-products-section">
            <BackgroundCover 
                              className={`${loading? "show" : "hide"}`}>
                            <LoaderCircle 
                              size={52} 
                              strokeWidth={2.75}
                              className="spin text-white"
                               />
                            </BackgroundCover>
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

        <br />

        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          className={`${isFormActive ? "form-active" : "closed-form"}`}
        >
          <div className="image-input-container">
            <div className="image-upload-text-content">
              <Upload className="M-auto" />
              <p>Drop your image here or click to browse</p>
              <span className="text-muted">PNG, JPG up to 10MB</span>
            </div>

            <label htmlFor="image-input">Product Image:</label>
            <input
              type="file"
              id="image-input"
              onChange={(e) => updateField("image", e.target.files[0])}
              required
            />
          </div>

          <br />

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

          <br />

          <div className="d-flex product-name-details-container justify-s-around f-wrap ">
            <div className="w100">
              <label htmlFor="product-name">Product name</label>
              <input
                type="text"
                id="product-name"
                placeholder="Eg: etheral silk green bag"
                className="M-auto"
                value={formValues.name}
                onChange={(e) => updateField("name", e.target.value)}
                minLength={10}
                maxLength={25}
                required
              />
            </div>

            <div className="w100">
              <label htmlFor="product-description">Description:</label>
              <input
                type="text"
                className="w-100"
                id="product-description"
                value={formValues.description}
                onChange={(e) => updateField("description", e.target.value)}
                minLength={30}
                maxLength={50}
                required
              />
            </div>
          </div>

          <br />

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

            <div className="d-flex justify-s-around align-center f-wrap">
              <div>
                <label htmlFor="product-price">Price($)</label>
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
                      const off = Number(value) + Number(value) * activePercent;
                      updateField("offPrice", off.toFixed(2));
                    } else {
                      updateField("offPrice", "");
                    }
                  }}
                  required
                />
              </div>

              <p className="FWB">
                $<del>{formValues.offPrice}</del>
              </p>
            </div>
          </div>

          <br />

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

          <br />

          {formValues.category === "shoe" && (
            <div className="flex-column">
              <label className="text-center">Size</label>
              <select
                id="product-size"
                className=""
                value={formValues.size}
                onChange={(e) => updateField("size", e.target.value)}
              >
                {[35, 36, 37, 38, 39, 40].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}

          {formValues.category === "bag" && (
            <div className="justify-s-around d-flex f-wrap">
              <div>
                <label htmlFor="product-width">width:</label>
                <input
                  type="number"
                  id="product-width"
                  value={formValues.width}
                  onChange={(e) => updateField("width", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="product-height">height:</label>
                <input
                  type="number"
                  id="product-height"
                  value={formValues.height}
                  onChange={(e) => updateField("height", e.target.value)}
                />
              </div>
            </div>
          )}

          <br />

          <button
            type="submit"
            className="add-product-button bg-green text-white"
            disabled={loading}
          >
            "Add Product"
            <Plus />
          </button>
        </form>
      </div>

      <br />
    </section>
  );
}
