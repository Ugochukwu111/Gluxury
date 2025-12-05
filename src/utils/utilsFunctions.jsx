import axios from "axios";
import { Star, StarHalf, StarOff, Activity } from "lucide-react";

export function renderStars(count) {
  const stars = [];
  const totalStars = 5;
  const fullStars = Math.floor(count);
  const hasHalf = count % 1 !== 0;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} color="#ffcc00" fill="#ffcc00" size={15} />);
    } else if (hasHalf && i === fullStars + 1) {
      stars.push(<StarHalf key={i} color="#ffcc00" fill="#ffcc00" size={15} />);
    } else {
      stars.push(<StarOff key={i} color="#d3d3d3" size={15} />);
    }
  }

  return stars;
}

export function BackgroundCover({ children, className, onClick }) {
  return (
    <div onClick={onClick} className={`background-cover ${className || ""}`}>
      {children}
    </div>
  );
}

export function DropDownPopUpNotification({ children, className }) {
  return (
    <div className={`dropdown-notification-popup ${className}`}>{children}</div>
  );
}

export function GluxNotification({ children, className }) {
  return (
    <div className={`gluxury-notification-card ${className}`}>
      <Activity />
      <span>{children}</span>
    </div>
  );
}

export function GetGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export const AddToCartAPI = async (productId, quantity = 1) => {
  const accessToken = localStorage.getItem("token");
    console.log("Access Token:", accessToken);
  if (!accessToken) {
    console.error("user not loggen in");
    return;
  }
  try {
    let res = await axios.post(
      "http://localhost:5000/api/cart/add",
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );
    return res?.data.message;
  } catch (err) {
    return err;
  }
};
