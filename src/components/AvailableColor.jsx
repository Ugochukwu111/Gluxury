import { X } from "lucide-react";

export function AvailableColor({ color, removeColor, isAdmin }) {
  console.log(isAdmin);
  return (
    <div style={{ backgroundColor: `${color}` }} className="color-box">
      <button
        type="button"
        onClick={() => removeColor(color)}
        className={`${isAdmin ? "d-flex" : "d-none"}`}
      >
        <X size={13} />
      </button>
    </div>
  );
}
