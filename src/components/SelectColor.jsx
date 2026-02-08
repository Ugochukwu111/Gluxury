import { useState } from "react";
import { SketchPicker } from "react-color";
import { AvailableColor } from "./AvailableColor";

export function SelectColor({
  colors = [],
  onAddColor,
  onRemoveColor,
  isAdmin = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingColor, setPendingColor] = useState("#ffffff");

  const handleAdd = () => {
    if (!colors.includes(pendingColor)) {
      onAddColor(pendingColor);
    }
  };

  return (
    <div className="picker-container">
      <button
        className="bg-accent-pink text-white"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Close Color Picker" : "Select available colors"}
      </button>

      <div className={`${isOpen ? "d-flex" : "d-none"} flex-column`}>
        <SketchPicker
          color={pendingColor}
          onChangeComplete={(color) => setPendingColor(color.hex)}
          disableAlpha
        />

        <button
          type="button"
          className="add-btn"
          style={{ backgroundColor: pendingColor }}
          onClick={handleAdd}
        >
          Add Color
        </button>
      </div>

      <div className="product-colors-container">
        {colors.map((color) => (
          <AvailableColor
            key={color}
            color={color}
            removeColor={onRemoveColor}
            isAdmin={isAdmin}
          />
        ))}
      </div>

      <br />
    </div>
  );
}
