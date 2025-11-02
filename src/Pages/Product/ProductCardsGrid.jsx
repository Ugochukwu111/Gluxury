
import {ProductCard} from './ProductCard'



import './ProductCards.css'


export function ProductCardsGrid({products}) {

 return (
  <main>
    <div className='container  products-container'>
       {products.map((product)=>(
        < ProductCard key={product.id} product={product} />
       ))}
      
    </div> 
  </main>
 )
}