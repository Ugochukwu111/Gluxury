import { Upload } from "lucide-react";

import "./AdminAddProduct.css";

export function AdminAddProduct() {
  return (
    <section className="add-products-section">
      <div>
        <div className="d-flex justify-s-between align-start">
          <div className="text-content">
            <h3>Add to Inventory</h3>
            <p>Input product details, pricing.</p>
          </div>

          <button className="bg-accent-gold text-white">+ Add Product</button>
        </div>

        <div className="">
          <br />

          <form className="">
            <div className=" image-input-container">
              <div className="image-upload-text-content">
                <Upload className="M-auto" />
                <p>Drop your image here or click to browse</p>
                <span className="text-muted">PNG, JPG up to 10MB</span>
              </div>

              <label htmlFor="image-input">Product Image</label>
              <input type="File" id="image-input" />
            </div>
            <br />

            <div className="d-flex product-name-details-container justify-s-around f-wrap ">
              <div className="w100  ">
                <label htmlFor="product-name">Product name</label>
                <input
                  type="text"
                  id="product-name"
                  placeholder="Eg: etheral silk green bag"
                  className="M-auto"
                />
              </div>

              <div className="w100">
                <label htmlFor="product-description">Description:</label>
                <input type="text" className="w-100"
                id="product-description"
                 />
              </div>
            </div>
            <br />

            {/* price container */}
            <div>
              <div className="d-flex justify-center off-price-btn-container">
                <button type="button">15%</button>
                <button type="button">25%</button>
                <button type="button">35%</button>
                <button type="button">50%</button>
                <button type="button">50%</button>
              </div>

              <div className="d-flex justify-s-around align-center f-wrap">
                <div>
                  <label htmlFor="product-price">Price($)</label>
                  <input type="text" id="product-price" placeholder="5000$" />
                </div>

               <p className="FWB">$<del>0.090</del></p> 
              </div>
            </div>

            <br />
            <div className="d-flex align-center justify-s-evenly f-wrap">
              <div>
                <label htmlFor="product-stock">Stock Quantity:</label>
                <input type="number" step={1} placeholder="50" id="product-stock" />
              </div>
              <div className="category-container">
                <label htmlFor="product-category">Category:</label>
                <select name="" id="product-category">
                  <option value="bag">Bag</option>
                  <option value="shoe">Shoe</option>
                </select>
              </div>
            </div>

            <br />

            <button className="add-product-button bg-green text-white">
              Add Product
            </button>
          </form>
        </div>
      </div>

      <div></div>
    </section>
  );
}
