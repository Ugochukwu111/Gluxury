
import { ChevronRight } from 'lucide-react'
import { ProductCard } from '../Pages/Product/ProductCard'
import { useNavigate } from 'react-router'
import './ProductContainer.css'
import { ProductCardSkeleton } from './Skeleton'

export  function ProductContainer({
  productCategory = 'product Category', 
  headerColor= 'bg-heading',
  handleGetCartAPI, 
  products , 
  searchQuery , 
  loading
}) {

  const navigate = useNavigate();
  return (
    <div className=" container product-container ">
      <div className={` ${headerColor} d-flex align-center justify-s-between product-container-header `}>
      <h2 className='text-white'>{productCategory}</h2>
      <button
       onClick={()=>{navigate(`/search?q=${encodeURIComponent(searchQuery)}`);}} 
       className='text-white bg-transparent'>
        See All 
        <ChevronRight />
      </button>
      </div>
      <div className="product-wrapper">
        {loading ?
          Array(20).fill(0).map((_, i) => <ProductCardSkeleton key={i} productLoading={loading}/>)
        :
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
