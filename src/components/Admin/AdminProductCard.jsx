import { SquarePen, Trash2 } from "lucide-react";
import { renderStars } from "../../utils/utilsFunctions";
import { formatMoney } from "../../utils/money";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { useNavigate } from "react-router";

import "../../Pages/Product/ProductCard";
import "./AdminProductCard.css";

dayjs.extend(relativeTime);

export function AdminProductCard({
  product,
  handleOpenEdit,
  handleOpenDelete,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product?._id}`);
  };

  return (
    <div className="product-card">
      <figure>
        <figcaption className="off-percent">
          -{product?.offPercent * 100}%
        </figcaption>
        <img
          src={product.image}
          loading="lazy"
          alt={product.name}
          decoding="async"
        />
        <div className="edith-delete-container">
          <button
            onClick={() => {
              handleOpenEdit(product);
            }}
            className="bg-gradient text-white"
          >
            <SquarePen size={20} /> edith
          </button>
          <button
            onClick={() => {
              handleOpenDelete(product);
            }}
            className="text-white bg-red"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </figure>
      <div className="product-info">
        <div onClick={handleClick} tabIndex={0}>
          <p className="product-name">{product?.name}</p>
          <span className="product-stars d-flex align-center">
            {renderStars(product?.rating)} &nbsp; (
            <span>{product?.rating}</span>){" "}
          </span>
          <p className="product-discount-price product-price-container">
            <span className="product-price">{formatMoney(product?.price)}</span>
            <span className="text-grey">
              <del>{formatMoney(product?.offPrice)}</del>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
