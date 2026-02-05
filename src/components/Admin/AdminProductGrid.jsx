import {ShoppingCart} from 'lucide-react'
import { AdminProductCard } from "./AdminProductCard"

import '../../Pages/Product/ProductCardsGrid'
import { all } from 'axios'


export function AdminProductGrid({allProducts, setOpenEdithProduct,  handleOpenEdit, setIsDelPopUp,handleOpenDelete}){
  return(
    <div className='container  products-container'>

        {allProducts.length === 0 && (
        <div className="empty-cart-container">
          <ShoppingCart size={50}/>
          <br />
          <div>
            <p className='FWB text-center text-heading'>Fetching data ...</p>
          </div>
        </div>
      )}
    {
      allProducts.map((product)=>{
       return( 
       <AdminProductCard
         setIsDelPopUp = {setIsDelPopUp} 
         handleOpenEdit = {handleOpenEdit}
         setOpenEdithProduct ={setOpenEdithProduct} 
         key={product.id} 
         product={product}
          handleOpenDelete = {handleOpenDelete}
          />
      )
      })
    }
    </div>
  )
}