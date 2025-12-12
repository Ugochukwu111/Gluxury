import { PackageCheck } from "lucide-react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export function OrdersCard({ order }) {
  return (
    <div className="order-card">
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

        <button className="bg-heading text-white">
          Deliver
          <PackageCheck />
        </button>
      </div>

      <div className="order-detail-container">
        <p className="text-end d-flex justify-s-between f-wrap">
          <span className="FWB">
            Date Ordered: &nbsp;
             <span>
              {dayjs(order?.createdAt).format("MMM D, YYYY")}
             </span>
          </span>
          <span className="FWB">Order Id: {order?.orderId}</span>
          &nbsp; &nbsp; &nbsp;
          <span className="FWB">
            Order Total:
            <span className="text-green">{formatMoney(order?.total)}</span>
          </span>
        </p>
        <br />
        <div className=" d-flex f-wrap">
          {order?.items.map((item) => {
            return (
              <div className="d-flex order-card-item">
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
      </div>
    </div>
  );
}
