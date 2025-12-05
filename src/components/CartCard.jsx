import axios from "axios";
import { useState, useEffect } from "react";
import { CCard } from './CCard'


export function CartCard() {
  const [cartItems, setCartItems] = useState([]);
  const [refreshCart, setRefreshCart] = useState(false);

  const handelGetCartAPI = async () => {
    const token = localStorage.getItem("token")
    console.log("Using token:", token);
    try {
      const res = await axios.get("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
        withCredentials: true,
      });
      if (!res) {
        console.error("No response from server");
        return;
      }
      setCartItems(res.data);
      console.log("Cart items fetched:", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handelGetCartAPI();
  }, [refreshCart]);

  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <CCard key={cartItem._id} cartItem={cartItem} setRefreshCart={setRefreshCart} />
        );
      })}
    </div>
  );
}
