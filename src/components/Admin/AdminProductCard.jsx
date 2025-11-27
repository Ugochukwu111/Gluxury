import { SquarePen, Trash2 } from "lucide-react";
import { renderStars } from "../../utils/utilsFunctions";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import axios from "axios";

import "../../Pages/Product/ProductCard";
import "./AdminProductCard.css";

dayjs.extend(relativeTime);

export function AdminProductCard({
  product,
  setOpenEdithProduct,
  setEdithProduct,
}) {
  
  const fetchProduct = async (id) => {
  const res = await axios.get(`/api/products/${id}`);
  setEdithProduct(product);
};

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
              setOpenEdithProduct(true);
              fetchProduct(product._id);
            }}
            className="bg-gradient text-white"
          >
            <SquarePen size={20} /> edith
          </button>
          <button className="text-white bg-red">
            <Trash2 size={20} />
          </button>
        </div>
      </figure>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-short-description">{product.description}</p>
        <span className="product-stars d-flex justify-s-between">
          <span className="relative-time">
            {dayjs(product.createdAt).fromNow()}
          </span>
          <span> {renderStars(product.rating)}</span>
        </span>
        <div className="d-flex justify-s-between">
          <p className="d-flex flex-column">
            <span className="product-price">Price</span>
            <span className="text-green FWB">
              ${product.price}
              <span className="text-muted">
                &nbsp;
                <del>${product.offPrice}</del>
              </span>
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
