
import { AdminProductCard } from "./AdminProductCard"

import '../../Pages/Product/ProductCardsGrid'

export function AdminProductGrid({products}){
  return(
    
    <div className='container  products-container'>
    {
      products.map((product)=>{
       return( <AdminProductCard key={product.id} product={product} />)
      })
    }
    </div>
  )
}