import { useState , useEffect} from 'react'
import axios from 'axios'
import { SideBarHeader } from "../components/SideBarHeader";
import { Footer } from "../components/Footer";
import { formatMoney } from '../utils/money.js'
import dayjs from "dayjs";

import './OrderPage.css'

export function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
  const handleGetOrders = async () =>{
    const token = localStorage.getItem('token');
    try{
      const res = await axios.get('http://localhost:5000/api/cart/my-orders',{
        headers:{ Authorization: `Bearer ${token}` },
        withCredentials: true,
      })

      if(!res){console.error('get orders error'); return}
      console.log(res.data);
      setOrders(res.data);
    }catch(err){
      console.log(err);
    }
  }

  handleGetOrders();

  }, []);

   console.log(orders)
  return (
    <div className="layout-container">
      <SideBarHeader />
      <main>
        {
          orders?.map((order)=>{
            return(
             <div className="order-container bg-white ">
          <div className="upper-container">
            <div className="d-flex order-total-content-container"> 
              <p>
                <span className="FWB">Order Placed: </span>
                <span>{dayjs(order.placedAt).format("DD MMM YYYY")}</span>
              </p>
              <p>
                <span className="FWB">Total: </span>
                <span>{formatMoney(order.total)}</span>
              </p>
            </div>

            <div>
              <span className="FWB">Order ID:  </span>
              <span> {order.orderId}</span>
            </div>
          </div>

          <div className="bottom-container">
               {order.items.map((item)=>{
                 return(
        <div className="order-product-card">
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>

              <div className="order-product-card-info" >
                <div >
                  <p className="FWB">
                    Name: {item.title} 
                    </p>
                  <p className="FWB">Delivery date: {dayjs(item.deliveryDate).format("DD MMM YYYY")}</p>
                  <p className="FWB"> Quantity: {item.quantity }</p>
                  <p className='FWB'>
                    Pice: <span className='text-green'>{formatMoney(item.price)}</span> </p>
                </div>
                <button >
                  {order.status}
                </button>
              </div>

            </div>
                 )
               })}
      

          </div>
        </div>
            ) 
          })
        }
    
      </main>
      <Footer />
    </div>
  );
}
