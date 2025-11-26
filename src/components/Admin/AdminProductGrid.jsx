
import { AdminProductCard } from "./AdminProductCard"

import '../../Pages/Product/ProductCardsGrid'

export function AdminProductGrid({allProducts, setOpenEdithProduct, setEdithProduct}){
  return(
    
    <div className='container  products-container'>
    {
      allProducts.map((product)=>{
       return( 
       <AdminProductCard 
         setOpenEdithProduct ={setOpenEdithProduct} 
         key={product.id} 
         product={product}
         setEdithProduct = {setEdithProduct}
          />
      )
      })
    }
    </div>
  )
}