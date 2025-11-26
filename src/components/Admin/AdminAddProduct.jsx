
import { AddProductForm } from "./AddProductForm";
import { FilterProducts } from "../FilterProducts";
import { SearchBar } from "../SearchBar";
import { AdminProductGrid } from "./AdminProductGrid";
import { BackgroundCover } from "../../utils/utilsFunctions";
import { X,Save ,ArrowLeft} from "lucide-react";
import './AdminAddProduct.css'
import { useState } from "react";

export function AdminAddProduct({ allProducts,refreshProducts }) {
  const [openEdithProdut, setOpenEdithProduct] = useState(false);
  const [edithProduct, setEdithProduct] = useState({});




  return (
    <>
      <AddProductForm refreshProducts = {refreshProducts} />
      <div>
        <h3 className="text-center">Product Collections:</h3>
        <br />
        <div>
          <SearchBar />
          <FilterProducts />
          <AdminProductGrid 
            allProducts={allProducts} 
            setOpenEdithProduct = {setOpenEdithProduct}
            setEdithProduct = {setEdithProduct}
             />

          <BackgroundCover className={`${openEdithProdut ? "hide" : "show"}`}>
            <form className={`edith-form ${openEdithProdut?'hide':'show'}`}>
              <div className="d-flex align-center justify-s-between">
                <h4>Edith product</h4>
                <button type="button" aria-label="close edith product form button"
                onClick={()=>{setOpenEdithProduct(true)}}
                >
                  <X />
                </button>
              </div>
              <p>
                Update your luxury product details
              </p>
              <div className="edith-form-input-container">
                <div className="edith-product-image-container">
                  <label htmlFor="edith-product-image">Product Image</label>
                  <input 
                  type="file"
                   className="d-none" />
                  <figure>
                    <img src="" alt="" />
                  </figure>
                </div>
                    <br />
                <div>
                  <label htmlFor="edith-product-name">Product Name</label>
                  <input type="text" id="edith-product-name" />
                </div>

                <div className="grid-input-container">
                  <div>
                    <label htmlFor="edith-price">Price</label>
                    <input type="number" id="edith-price" />
                  </div>
                  <div>
                    <label htmlFor="edith-stock-quantity">Stock:</label>
                    <input type="number" id="edith-stock-quantity" />
                  </div>
                  <div className="d-flex  flex-column ">
                    <label htmlFor="edith-category"
                    className="" 
                    >Category:</label>
                    <select id="edith-category"
                    className="w100 flex-1 "
                    >
                      <option value="bag">bag</option>
                      <option value="bag">shoe</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="edith-product-width">Width:</label>
                    <input type="number" id="edith-product-width" />
                  </div>
                  <div>
                    <label htmlFor="edith-product-width">Height:</label>
                    <input type="number" id="edith-product-height" />
                  </div>
                  <div className="">
                    <label className="text-center">Size</label>
                    <select
                      id="product-size"
                      className=" "
                      value=""
                      onChange=""
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
                <button className="bg-red text-white"
                type="button"
                onClick= {()=>{setOpenEdithProduct(true)}}
                >
                  <ArrowLeft />
                  Cancel
                </button>
              <button className="bg-green text-white">
                <Save />
                Save Changes
              </button>
              </div>
            </form>
          </BackgroundCover>
        </div>
      </div>
    </>
  );
}
