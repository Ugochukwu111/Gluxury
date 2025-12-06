import dayjs from "dayjs";
import { formatMoney } from "../utils/money";

export function DeliveryOption({
  option,
  cartItemId,
  optionIndex,
  handleDeliveryChange,
  cartItem,
}) {
  return (
    <div>
      <input
        type="radio"
        name={`delivery-${cartItemId}`}
        value={dayjs(option.date).format("dddd MMMM D")}
        checked={cartItem.selectedDeliveryOption === optionIndex}
        onChange={() => {
          handleDeliveryChange(cartItemId, optionIndex);
        }}
      />
      <p className="FWB">
        <span>{dayjs(option.date).format("dddd MMMM D")}</span>
        <span className="text-grey d-block">
          {" "}
          {option.price === 0
            ? "Free - Shipping"
            : `${formatMoney(option.price)} - Shipping`}
        </span>
      </p>
    </div>
  );
}
