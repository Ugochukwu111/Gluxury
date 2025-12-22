import { useState , useEffect} from "react";
import { ProductCard } from "../Pages/Product/ProductCard";
import axios from "axios";
import { formatMoney } from "../utils/money";

import './ProductCardPrice.css'


export function ProductCardPrice({handleGetCartAPI}) {
  const [priceRange, setPriceRange] = useState([]);
  const [priceRangeValue, setPriceRangeValue] = useState(10000);
  const [productPriceRange, setProductPriceRange] = useState([]);

  const handleGetPriceRange = async () =>{
   try{
      const res = await axios.get("http://localhost:5000/api/products/price-range", );
      setPriceRange(res.data);
   }catch(err){
    console.error(err);
   }
  }


const handleGetProductPriceRange = async(priceRangeValue = 10000) =>{
     try{
      const res = await axios.get(`http://localhost:5000/api/products?maxPrice=${priceRangeValue}`, );
      setProductPriceRange(res.data.products);
      console.log(res.data.products)
   }catch(err){
    console.error(err);
   }
}

//the useEffect is to show a filtered product base of 5000 price once page loads
// this avoids the section beign empty on first load


useEffect(()=>{
    // Fetch all price ranges for the dropdown
  handleGetPriceRange();

  // Fetch products below default price on first load
  handleGetProductPriceRange(); // uses default 10000

},[])


  return(
    <div className="container  price-range-container">
      <div className="d-flex align-center justify-s-around">
        <h3>Product below {formatMoney(priceRangeValue)}</h3>
        <div>
        <select 
        onChange={(e) =>{ 
          const value = Number(e.target.value);
           setPriceRangeValue(value)
           handleGetProductPriceRange(value);
          }}
        value={priceRangeValue}
        name="" 
        id="">
          {priceRange?.map((p)=>{
            return(
              <option 
               key={p.priceRangeValue}
              value={p.priceRangeValue}> {formatMoney(p.priceRangeValue)}</option>
            )
          })}
          <option value="">Select range of prices</option>
        </select>
        </div>
      </div>
      <br />
      <div className="d-flex price-range-product-container">
        {productPriceRange?.map((product)=>{
          return(
             <ProductCard  
               product = {product}
               key={product._id} 
               handleGetCartAPI = 
               {handleGetCartAPI}/>
          )
        })}
       
       </div>
       <br />
    </div>
  );
}