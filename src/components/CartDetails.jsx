import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CartCard } from "./CartCard";
import "./CartDetails.css";
import { formatMoney } from "../utils/money";
import api from "../utils/api";

export function CartDetails({cartItems, handleGetCartAPI}) {
  const [summary, setSummary] = useState({});
  const [refreshCart, setRefreshCart] = useState(false);
   console.log(handleGetCartAPI)
  const navigate = useNavigate();

  const placeOrder = async ()=>{
    try{
     const res = await api.post(`http://localhost:5000/api/cart/place-order`,
     )
     navigate('/order');
    }catch(err){
      console.log('error placing order', err)
    }
  }

    const fetchSummary = async () => {
    try {
      const res = await api.get("http://localhost:5000/api/cart/summary")
      setSummary(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetCartAPI()
     fetchSummary();
  }, [refreshCart]);




  return (
    <main>
      <div className="container cart-payment-container">
        <div className="cart-details-card-container">
          <CartCard cartItems={cartItems} setRefreshCart={setRefreshCart} />
        </div>

        <div className="payment-summary-container">
          <h3>Payment Summary</h3>
          <p>
            <span>items({summary?.totalQuantity || 0})</span>
            <span>{formatMoney(summary.itemsTotal) || 0}</span>
          </p>
          <p>
            <span>Shipping</span>
            <span>{formatMoney(summary?.deliveryTotal) || 0}</span>
          </p>
          <hr />
          <br />
          <p className="text-green FWB">
            <span>Order total:</span>
            <span>{formatMoney(summary?.grandTotal) || 0}</span>
          </p>

          <button 
            onClick={()=>{placeOrder()}}
            className="bg-green text-white ">
            Place your order
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send-horizontal-icon lucide-send-horizontal"
            >
              <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
              <path d="M6 12h16" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
