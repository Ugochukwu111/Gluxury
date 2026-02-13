import { AdminLayout } from "../../components/Admin/AdminLayout";
import { OrdersCard } from "./OrdersCard";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import "./AdminOrdersPage.css";
import api from "../../utils/api";


export function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [refreshOrders, setRefreshOrders] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

   const query = searchParams.get('q')|| ""
  

  const handleGetOrders = async ( searchQuery = '') => {
    try {
      const res = await api.get(`/api/cart/orders`, {
        params: searchQuery ? { q: searchQuery } : {},
      });
      setOrders(res.data.orders);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetOrders(query.trim());
  }, [refreshOrders, query]);

  useEffect(() => {
    document.title = "Order Management | Admin | Gluxury";
  }, []);




  return (
    <AdminLayout>
      <h2>Orders</h2>

      <div className="admin-orders-page">
        <SearchBar 
         placeholder=" (Admin) quickly find orders by ID"
         searchPath = {null}
         />
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
      </div>
    </AdminLayout>
  );
}
