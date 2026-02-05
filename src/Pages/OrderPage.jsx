import { useState, useEffect } from "react";
import api from "../utils/api.js";
import { SideBarHeader } from "../components/SideBarHeader";
import { Footer } from "../components/Footer";
import { formatMoney } from "../utils/money.js";
import { ScrollingInfo } from "../components/ScrollingInfo.jsx";
import { OrderCardSkeleton } from "../components/Skeleton.jsx";
import dayjs from "dayjs";

import "./OrderPage.css";

export function OrderPage({ cartLength,  handleGetCartAPI }) {
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);

  useEffect(() => {
    setOrdersLoading(true);
    const handleGetOrders = async () => {
      try {
        const res = await api.get("/api/cart/my-orders");
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setOrdersLoading(false);
      }
    };

    handleGetOrders();
    handleGetCartAPI(); // this gets cart in orderspage,which updates cartlength and updates cartlength
  }, []);

    useEffect(() => {
    document.title = "My Orders | Gluxury";
  }, []);

  return (
    <div className="layout-container ">
      <SideBarHeader cartLength={cartLength}   />

      <div className=" hidden hr">
        <ScrollingInfo className="hidden" />
        <br />
      </div>

      <br />
      <main>
        {ordersLoading &&
          Array(5)
            .fill(0)
            .map((_, i) => <OrderCardSkeleton key={i} />)}

        {!ordersLoading && (!orders || orders.length === 0) && (
          <h4>No orders yet</h4>
        )}

        {!ordersLoading &&
          orders &&
          orders.length > 0 &&
          orders?.map((order) => {
            return (
              <div key={order.orderId} className="order-container bg-white ">
                <div className="upper-container">
                  <div className="d-flex order-total-content-container">
                    <p>
                      <span className="FWB">Order Placed: </span>
                      <span>{dayjs(order.placedAt).format("DD MMM YYYY")}</span>
                    </p>
                    <p>
                      <span className="FWB">Order Total: </span>
                      <span className="FWB text-green">
                        {formatMoney(order.total)}
                      </span>
                    </p>
                  </div>

                  <div>
                    <span className="FWB">Order ID: </span>
                    <span> {order.orderId}</span>
                  </div>
                </div>

                <div className="bottom-container">
                  {order.items.map((item) => {
                    return (
                      <div
                        key={crypto.randomUUID()}
                        className="order-product-card"
                      >
                        <figure>
                          <img src={item.image} alt={item.title} />
                        </figure>

                        <div className="order-product-card-info">
                          <div>
                            <p className="">{item.name}</p>
                            <p className="">
                              Delivery date:{" "}
                              {dayjs(item.deliveryDate).format("DD MMM YYYY")}
                            </p>
                            <p className=""> Quantity: {item.quantity}</p>
                            <p className="">
                              Pice:{" "}
                              <span className="text-green">
                                {formatMoney(item.price)}
                              </span>{" "}
                            </p>
                            <p className="">
                              Delivery price:{" "}
                              <span className="text-green">
                                {formatMoney(item.deliveryPrice)}
                              </span>
                            </p>
                            <p className="">
                              Item total:{""}
                              <span className="text-green">
                                {formatMoney(item.total)}
                              </span>
                            </p>
                          </div>
                          <button
                            className={`${
                              order.orderStatus == "ready_for_pickup"
                                ? "bg-green text-white"
                                : ""
                            }`}
                          >
                            {order.orderStatus}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </main>
      <Footer />
    </div>
  );
}
