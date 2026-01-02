import { AdminLayout } from "../../components/Admin/AdminLayout";
import { OrdersCard } from "./OrdersCard";

import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminOrdersPage.css";
import api from "../../utils/api";
import { u } from "framer-motion/client";

export function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [refreshOrders, setRefreshOrders] = useState(false);

  const handleGetOrders = async () => {
    try {
      const res = await api.get("/api/cart/orders");
      if (!res) {
        console.error("get orders admin error");
        return;
      }
      setOrders(res.data.orders);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetOrders();
  }, [refreshOrders]);

  useEffect(() => {
    document.title = "Order Management | Admin | Gluxury";
  }, []);
  return (
    <AdminLayout>
      <h2>Orders</h2>

      <div className="orders-container">
        {orders?.map((order) => {
          return (
            <OrdersCard
              setRefreshOrders={setRefreshOrders}
              order={order}
              key={order._id}
            />
          );
        })}
      </div>
    </AdminLayout>
  );
}
