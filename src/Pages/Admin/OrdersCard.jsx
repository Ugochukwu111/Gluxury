import { useState } from "react";
import { PackageCheck, LoaderCircle,CheckCheck } from "lucide-react";
import { formatMoney } from "../../utils/money";
import { GluxNotification } from "../../utils/utilsFunctions";

import { Trash2 } from "lucide-react";
import dayjs from "dayjs";
import axios from "axios";

export function OrdersCard({ order, setRefreshOrders }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [notifKey, setNotifKey] = useState(0);
  const [ deliveryNotifKey, setdeliveryNotifKey ] = useState(0);
  const [delMsg, setdelMsg] = useState("");

  const [isDelivering, setIsDelivering] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [deliveredMsg, setDeliveredMsg] = useState("");

  const handleDeleteOrders = async (orderId) => {
    setIsDeleting(true);
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/cart/orders/delete/${orderId}`
      );
      console.log(res);
      setdelMsg(res.data.message);
      setIsDeleted(true);
    } catch (err) {
      setIsDeleted(false);
      console.error(err.response.data.message);
      setdelMsg(err.response.data.message);
    } finally {
      setIsDeleting(false);
      setNotifKey((prev) => prev + 1);
      setRefreshOrders((prev) => !prev);
    }
  };

  const handleDeliverOrders = async (orderId) => {
    setIsDelivering(true);
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/cart/orders/${orderId}/deliver`
      );
      setDeliveredMsg(res.data.message);
      setIsDelivered(true);
    } catch (err) {
       setIsDelivered(false);
      setDeliveredMsg(err.response.data.message);
    } finally {
      setIsDelivering(false);
      setdeliveryNotifKey(prev => !prev);
      setRefreshOrders(prev => !prev);
    }
  };

  return (
    <>
          {deliveryNotifKey > 0 && (
        <GluxNotification
          key={deliveryNotifKey}
          className={isDelivered ? "success" : "fail"}
        >
          {deliveredMsg}
        </GluxNotification>
      )}
          {notifKey > 0 && (
        <GluxNotification
          key={notifKey}
          className={isDeleted ? "success" : "fail"}
        >
          {delMsg}
        </GluxNotification>
      )}
    <div
     
      className={`order-card ${
        order.orderStatus == "ready_for_pickup" ? "delivered" : ""
      }`}
    >


      <div className="d-flex align-center justify-s-between f-wrap">
        <p className="f-wrap order-user-info ">
          <span>
            <span className="FWB text-accent-purple ">Name:</span>
            {order?.user.fullName}
          </span>
          <span>
            <span className="FWB text-accent-purple ">Email:</span>
            {order?.user.email}
          </span>
          <span>
            <span className="FWB text-accent-purple ">Number:</span> 07046353045
          </span>
          <span>
            <span className="FWB text-accent-purple ">status: &nbsp;</span>
            {order?.orderStatus}
          </span>
        </p>
        <button
          onClick={() => {
            handleDeleteOrders(order?._id);
          }}
          className={`bg-red text-white del-order-btn`}
          disabled={order.orderStatus == "ready_for_pickup" ? true : false}
        >
          {isDeleting ? (
            <LoaderCircle size={20} className={`spin text-white `} />
          ) : (
            <Trash2 />
          )}
        </button>
      </div>

      <div className="order-detail-container">
        <p className="text-end d-flex justify-s-between f-wrap">
          <span className="FWB">
            Date Ordered: &nbsp;
            <span>{dayjs(order?.createdAt).format("MMM D, YYYY")}</span>
          </span>
          <span className="FWB">Order Id: {order?.orderId}</span>
          &nbsp; &nbsp; &nbsp;
          <span className="FWB">
            Order Total:
            <span className="text-green order-total-price">
              {formatMoney(order?.total)}
            </span>
          </span>
        </p>
        <br />
        <div className=" d-flex f-wrap">
          {order?.items.map((item) => {
            return (
              <div  key={item.productId} className="d-flex order-card-item">
                <figure>
                  <img src={item.image} alt={item.name} />
                </figure>

                <div className="">
                  <p className="d-flex flex-column">
                    <span className="FWB">Quantity: {item.quantity}</span>
                    <span className="FWB">Price:{formatMoney(item.price)}</span>
                    <span className="FWB">
                      Total:{formatMoney(item.quantity * item.price)}
                    </span>
                    <span className="FWB">
                      selected delivery date:{" "}
                      {dayjs(item.deliveryDate).format("MMM D, YYYY")}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-end align-center">
          <button
            onClick={() => {
              handleDeliverOrders(order?._id);
            }}
            className="bg-heading text-white"
            disabled={order.orderStatus == "ready_for_pickup" ? true : false}
          >
            {order.orderStatus == "ready_for_pickup" ? (
              <>
              Delivered 
              <CheckCheck />
              </>
            ) : (
              <>
                {" "}
                Deliver
                <PackageCheck />
              </>
            )}
            
          </button>
        </div>
      </div>
    </div>
    </>
  );

}
