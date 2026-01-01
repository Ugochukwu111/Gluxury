import { SquarePen, Trash2 } from "lucide-react";
import { renderStars } from "../../utils/utilsFunctions";
import { formatMoney } from '../../utils/money'
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

import "../../Pages/Product/ProductCard";
import "./AdminProductCard.css";

dayjs.extend(relativeTime);

export function AdminProductCard({
  product,
  handleOpenEdit,
  handleOpenDelete
}) {
  


  return (
    <div className="product-card">
      <figure>
        <img
          src={product.image}
          loading="lazy"
          alt={product.name}
          decoding="async"
        />
        <div className="edith-delete-container">
          <button
            onClick={() => {
               handleOpenEdit(product)
            }}
            className="bg-gradient text-white"
          >
            <SquarePen size={20} /> edith
          </button>
          <button 
            onClick={()=>{ 
              handleOpenDelete(product)
            }}
            className="text-white bg-red">
            <Trash2 size={20} />
          </button>
        </div>
      </figure>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-description">{product.description}</p>
        <span className="product-stars d-flex justify-s-between">
          <span className="relative-time">
            {dayjs(product.createdAt).fromNow()}
          </span>
          <span> {renderStars(product.rating)}</span>
        </span>
        <div className="d-flex justify-s-between">
          <p className="d-flex flex-column product-price-container">
            <span className="text-green FWB product-price f-wrap">
              {formatMoney(product.price)}
              </span>
              <span className="text-muted product-discount-price">
                &nbsp;
                <del>{formatMoney(product.offPrice)}</del>
              </span>
            
          </p>

          <p className="d-flex flex-column align-center">
            <span>Stock</span>
            <span>{product.stockquantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
