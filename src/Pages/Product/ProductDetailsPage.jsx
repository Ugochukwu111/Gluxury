import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideBarHeader } from "../../components/SideBarHeader";
import { Footer } from "../../components/Footer";
import { ShoppingCart , MessageCircle, SquareArrowOutUpRight, MapPinCheckInside } from "lucide-react";

import './ProductDetailsPage.css'

export function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('')
    .then(
      (res)=>{
        setProduct(res.data);
      }
    )
  },[id]);



    return (
      <div>
      < SideBarHeader />
      <main className="product-details-page-main">
        <div className="container product-details-container">

         <div className="product-details-card">
          <figure>
            <img src="" alt="" />
          </figure>

          <div className="text-container">
            <h2>Product Name</h2>
            <p>Product Description</p>
            <p><span>0.00</span><span>0.00</span></p>
            <p>In stock : 100</p>
            <div>
              <span>Rattings</span>

            </div>
            <button className="bg-heading text-white">
               <ShoppingCart size={18} />Add to cart
            </button>
          </div>
         </div>

         <div className="key-features-container">
          <h3>Key Features </h3>
           <ul className="product-features-list">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
           </ul>
         </div>

         <div>
          <h3>Customers Also Viewed</h3>
          <div>

          </div>
         </div>
        </div>


        <div className="shipping-details-container">
          <div>
          <h4>Shipping Details</h4>
          <p>
            Please note that all shipping  or orders from you,
            will arrive at your current shipping address set in your profile which is
          </p>
          <br />
          <p className="text-muted FWB">
            Nigeria, Benin City, NewBenin ,<MapPinCheckInside size={16} />
          </p>

          <Link to="/shipping-details" className="shipping-details-link">
            View Shipping Details
            <SquareArrowOutUpRight size={18}/>
          </Link>
          </div>

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
      <Footer/>
      </div>
    )
}