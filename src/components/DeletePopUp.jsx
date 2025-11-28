import { X, TriangleAlert } from "lucide-react";
import { BackgroundCover } from "../utils/utilsFunctions";
import "./DeletePopUp.css";

export function DeletePopUp({ isDelPopUp, handleCloseDelete, deleteProduct }) {
  return (
    <BackgroundCover className={`${isDelPopUp ? "show" : "hide"}`}>
      <div className="delete-card">
        <div className="red-line"></div>
        <button onClick={handleCloseDelete} className="close-del-card-btn">
          <X />
        </button>
        <div>
          <TriangleAlert className="text-red" />
        </div>
        <br />
        <div className="delete-content">
          <h4>Delete Product</h4>
          <p>Are you sure you want to delete</p>
          <p className="FWB">"{deleteProduct.name}"</p>
          <p className="text-center">
            This action cannot be undone.The product will be permanently removed
            from your inventory.
          </p>
          <div className="del-product-card">
            <figure>
              <img
                loading="egar"
                src={deleteProduct.image}
                alt={deleteProduct.name}
              />
            </figure>
            <div className="text-start">
              <p>{deleteProduct.name}</p>
              <span>{deleteProduct._id}</span>
              <br />
              <small>{deleteProduct.price}</small>
            </div>
          </div>

          <div className="d-flex justify-s-between">
            <button onClick={handleCloseDelete} className="bg-text-muted ">
              Cancel
            </button>
            <button className="bg-red text-white">Confirm Delete</button>
          </div>
        </div>
      </div>
    </BackgroundCover>
  );
}
