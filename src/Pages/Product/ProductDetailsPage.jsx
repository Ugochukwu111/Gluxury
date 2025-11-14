import { Link } from "react-router-dom";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBarHeader } from "../../components/SideBarHeader";
import { Footer } from "../../components/Footer";
import {
  ShoppingCart,
  MessageCircle,
  SquareArrowOutUpRight,
  MapPinCheckInside,
  ArrowLeft
} from "lucide-react";

import "./ProductDetailsPage.css";

export function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("").then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <div>
      <main className="product-details-page-main">
        <div className="container product-details-container">
          <div className="product-details-card">
            <figure>
              <img src="" alt="" />
              <button 
              className="previous-btn"
              onClick={()=>{
                navigate(-1)
              }}
              >
                <ArrowLeft />
              </button>
            </figure>

            <div className="text-container">
              <h2 className="FWB">Product Name</h2>
              <p className="FWB">Product Description:</p>
              <br />
              <p className="FWB">
                Price: &nbsp;
                <span>0.00</span>
                &nbsp; &nbsp;
                <span>0.00</span>
              </p>
              <div>
                <span className="FWB">Rattings: &nbsp;</span>
              </div>
              <br />
              <div className="d-flex justify-s-around align-center f-wrap">
               <button className="bg-heading text-white">
                <ShoppingCart size={18} />
                Add to cart
              </button>

              <select name="" id="" className="select-quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              </div>

            </div>
          </div>

          <div className="key-features-container">
            <div>
              <h3>Key Features:</h3>
              <ul className="product-features-list">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>

            <div>
              <h3>Size(inches):</h3>
              <ul className="product-features-list">
                <li>width: &nbsp;</li>
                <li>height: &nbsp;</li>
                <li>weight: &nbsp;</li>
              </ul>
            </div>
          </div>

          <div className="viewed-product-wrapper">
            <h3>
              Customers Also Viewed :
            </h3>
            <div className="viewed-product-container">

            </div>
          </div>
        </div>

        <div className="shipping-details-container">
          <div>
            <h4>Shipping Details</h4>
            <p>
              Please note that all shipping or orders from you, will arrive at
              your current shipping address set in your profile which is
            </p>
            <br />
            <p className="text-muted FWB">
              Nigeria, Benin City, NewBenin ,<MapPinCheckInside size={16} />
            </p>

            <Link to="/shipping-details" className="shipping-details-link">
              View Shipping Details
              <SquareArrowOutUpRight size={18} />
            </Link>
          </div>
           <br />
          <div>
            <h5>questions about this product?</h5>
            <p>Chart with us on whats app</p>
            <button className="whats-app-btn">
              what's app
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
