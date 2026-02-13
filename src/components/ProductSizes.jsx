import { X } from "lucide-react";
import './ProductSizes.css';

export  function ProductSizes({ size, onRemoveSize , isAdmin }) {
  return (
              <span  className="selected-size">
            {size}
            <button
              className={`${isAdmin ? "d-flex" : "d-none"}`}
              type="button"
              onClick={() => onRemoveSize(size)}
            >
              <X size={12} />
            </button>
          </span>
  )
}
