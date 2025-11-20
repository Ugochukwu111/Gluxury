import { SquarePen, Trash2 } from 'lucide-react'
import { renderStars } from '../../utils/utilsFunctions'

import '../../Pages/Product/ProductCard'
import './AdminProductCard.css'


export function AdminProductCard({product}){
  return(
    <div className='product-card'>
      <figure>
        <img src={product.image} alt={product.name} />
        <div className='edith-delete-container'>
        <button className='bg-gradient text-white'>
          <SquarePen size={20} /> edith
        </button>
        <button className='text-white bg-red'>  
          <Trash2 size={20} />
        </button>
        </div>
      </figure>
      <div className='product-info'>
        <p className="product-name">{product.name}</p>
        <p className="product-short-description">{product.description}</p>
        <span className='product-stars'>
          {renderStars(product.rating)}
        </span>
        <div className="d-flex justify-s-between">
          <p>
            <span className='product-price'>
              Price
              </span>
            <span>$2,499</span>
          </p>

          <p>
            <span>Stock</span>
            <span>23</span>
          </p>
        </div>
      </div>
    </div>
  )
}