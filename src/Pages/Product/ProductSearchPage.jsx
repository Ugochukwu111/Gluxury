import { SideBarHeader } from "../../components/SideBarHeader"
import { useState } from "react";
import { ProductCardsGrid  } from "./ProductCardsGrid"
import { PackageSearch } from "lucide-react";

export function ProductSearchPage({ handleGetCartAPI, cartLength}){
   const [results, onResults] = useState([]);
  console.log(results)
  return(
    <div className="product-search-page-container">
      <SideBarHeader 
        onResults = {onResults}
        cartLength ={cartLength}
        />
        <div className="bd d-flex flex-column align-center justify-center search-result-container">
       {
        results.length === 0 ?
        <div className="d-flex flex-column align-center justify-center">
         <PackageSearch size={100} />
         <h2 className="text-center">
          Search for products
         </h2>
        </div>:
          <ProductCardsGrid allProducts={results} handleGetCartAPI={handleGetCartAPI} />
       }
         </div>
    </div>
  )
}