
import { ChevronRight } from 'lucide-react'
import { ProductCard } from '../Pages/Product/ProductCard'
import './ProductContainer.css'

export  function ProductContainer({productCategory = 'product Category', headerColor= 'bg-heading',handleGetCartAPI, products }) {
  return (
    <div className=" container product-container ">
      <div className={` ${headerColor} d-flex align-center justify-s-between product-container-header `}>
      <h2 className='text-white'>{productCategory}</h2>
      <button className='text-white bg-transparent'>See All <ChevronRight /></button>
      </div>
      <div className="product-wrapper">

        {/* <button className='move-product-btn  move-product-back-btn'>prev</button>
        <button className=' move-product-btn move-product-forward-btn'>next</button> */}
        {
         products?.map((product)=>{
          return(
            <ProductCard 
             key={product._id}
             product={product} 
             handleGetCartAPI={handleGetCartAPI}/>
          )
         })
        }
         
      </div>
    </div>
  )
}
