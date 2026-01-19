import { SideBarHeader } from "../../components/SideBarHeader"
import { useState } from "react";
import { ProductCardsGrid  } from "./ProductCardsGrid"
import { PackageSearch } from "lucide-react";

export function ProductSearchPage({ handleGetCartAPI, cartLength,searchResult, setSearchResult}){
   
  return(
    <div className="product-search-page-container">
      <SideBarHeader 
       setSearchResult = {setSearchResult}
        cartLength ={cartLength}
        />
        <div className="d-flex flex-1 flex-column  justify-center">
       {
        searchResult.length === 0 ?
        <div className="d-flex flex-1 flex-column align-center justify-center">

         <PackageSearch size={100} />
         <h2 className="text-center">
          Search for products
         </h2>
        </div>
        :
          <ProductCardsGrid allProducts={searchResult} handleGetCartAPI={handleGetCartAPI} />
       }
         </div>
    </div>
  )
}