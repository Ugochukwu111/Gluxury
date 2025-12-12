
import { AdminLayout } from "../../components/Admin/AdminLayout";
import { OrdersCard } from "./OrdersCard";

import "./AdminOrdersPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

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
  },[])


  return (
    <AdminLayout>
      <h2>Orders</h2>

      <div className="orders-container">
        {
          orders?.map((order)=>{
            return(
              <OrdersCard order ={order} key={order._id}/>
            )
          })
        }
        <OrdersCard/>
        <div className="order-card">
          <div className="d-flex align-center justify-s-between">

              <p className="f-wrap order-user-info ">
                <span><span className="FWB text-accent-purple ">Name:</span> John Doe</span>
                <span><span className="FWB text-accent-purple ">Email:</span> johndoe@gmail.com</span>
                <span><span className="FWB text-accent-purple ">Number:</span> 07046353045</span>
                <span><span className="FWB text-accent-purple ">status:</span> pending</span>
              </p>


            <button className="bg-heading text-white">
              Deliver

              </button>
          </div>

          <div className="order-detail-container">
            <p className="text-end d-flex justify-end">
              <span className='FWB'>Order Id:</span>
              &nbsp;     &nbsp;     &nbsp;
              <span className='FWB'>
                Order Total: <span className="text-green">0</span>
                </span>
            </p>
            <br />
            <div className="d-flex">
              <figure>
                <img src="" alt="" />
              </figure>

              <div >
                 <p className="d-flex flex-column">
                  <span className="FWB">Quantity:</span>
                  <span className="FWB">Price:</span>
                  <span className="FWB">Total:</span>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
