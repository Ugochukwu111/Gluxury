
import { AdminLayout } from "../../components/Admin/AdminLayout";
import { OrdersCard } from "./OrdersCard";


import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminOrdersPage.css";

export function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [refreshOrders, setRefreshOrders] = useState(false);


  const handleGetOrders = async () => {

      try{
        const res = await axios.get('http://localhost:5000/api/cart/orders')
        if(!res){console.error('get orders admin error'); return}
        setOrders(res.data.orders);
        console.log(res.data.orders)
      }catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{
    handleGetOrders();
  },[refreshOrders]);





  return (
    <AdminLayout>


      <h2>Orders</h2>



      <div className="orders-container">
        {
          orders?.map((order)=>{
            return(
              <OrdersCard 
              setRefreshOrders={setRefreshOrders}
              order ={order}
               key={order._id}
               />
            )
          })
        }

      </div>
    </AdminLayout>
  );
}
