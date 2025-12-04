
import {ProductCard} from './ProductCard'



import './ProductCards.css'


export function ProductCardsGrid({ allProducts}) {

 return (
  <main>
    <div className='container  products-container'>
       {allProducts?.map((product)=>(
        < ProductCard key={product.id} product={product} />
       ))}
      
    </div> 
  </main>
 )
}