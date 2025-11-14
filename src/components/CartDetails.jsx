import "./CartDetails.css";
import dayjs from "dayjs";
import { CartCard } from "./CartCard"

export function CartDetails(cartItem) {
  const today = dayjs();

  const deliveryOptions = [
    { day: today.add(7, "day"), price: "Free" },
    { day: today.add(3, "day"), price: 1200 },
    { day: today.add(1, "day"), price: 2000 },
  ];


  return (
    <main>
      <div className="container cart-payment-container">
        <div className="cart-details-card-container">
           <CartCard/>
        </div>

        <div className="payment-summary-container">
          <h3>Payment Summary</h3>
            <p>
            <span>items(3)</span>
            <span>$45.99</span>
           </p>
          <p>
            <span>Shipping</span>
            <span>$4.99</span>
          </p>
          <hr />
          <br />
          <p className="text-green FWB">
            <span>Order total:</span>
            <span>$52.51</span>
          </p>

          <button className="bg-green text-white ">
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
