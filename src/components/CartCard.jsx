import axios from "axios";
import { useState, useEffect } from "react";
import { CCard } from './CCard'


export function CartCard({fetchSummary}) {
  const [cartItems, setCartItems] = useState([]);
  const [refreshCart, setRefreshCart] = useState(false);

  const handelGetCartAPI = async () => {
    const token = localStorage.getItem("token")
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
          <CCard key={cartItem._id} cartItem={cartItem} setRefreshCart={setRefreshCart}
          fetchSummary = {fetchSummary}
            />
        );
      })}
    </div>
  );
}
