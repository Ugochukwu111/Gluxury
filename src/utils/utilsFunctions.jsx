const BASE_URL = import.meta.env.VITE_API_BASE_URL
import api from "./api";
import { Star, StarHalf, StarOff, Activity } from "lucide-react";
import dayjs from "dayjs";
import { formatMoney } from "./money";

console.log(BASE_URL)

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
  try {
    let res = await api.post(
      "/api/cart/add",
      {
        productId,
        quantity,
      },
    );
    return res?.data.message;
  } catch (err) {
    return err.response?.data?.message || "Something went wrong";
  }
};

export const GenerateWhatsAppMessage = (order) => {
  const header = `GLUXURY Notification
\nHello ${order.user.fullName},

Your order has been received and an email has been sent with the details.

Date Ordered: ${dayjs(order.placedAt).format("MMM D, YYYY")}
Order Id: ${order.orderId}
Order Total: ${formatMoney(order.total)}

`;

  const itemsText = order.items
    .map(
      (item, index) => `
Item ${index + 1}:
Product: ${item.name}
Selected delivery date: ${dayjs(item.deliveryDate).format("MMM D, YYYY")}
Delivery price : ${formatMoney(item.deliveryPrice)}
Price: ${formatMoney(item.price)}
Quantity: ${item.quantity}
Total: ${formatMoney(item.total)}
`
    )
    .join("\n");

  const footer = `\nThank you for shopping with GLUXURY!`;

  return header + itemsText + footer;
};

export async function FilterProducts(endpoint, limit = null) {
  if (!endpoint) {
    throw new Error("filterProducts: endpoint is required");
  }

  let url = `${BASE_URL}/api/products/${endpoint}`;

  if (limit !== null && limit !== undefined) {
    url += `?limit=${limit}`;
  }

  try {
    const response = await api.get(url);
    return  response.data.products
  } catch (error) {
    console.error("filterProducts error:", error);
    return [];
  }
}