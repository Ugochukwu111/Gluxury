import { useState } from "react";
import { ProductSizes } from "./ProductSizes";

export function SelectSize({ sizes, selectedSizes, onAddSize, onRemoveSize }) {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="d-flex align-start f-wrap size-selection-container">
      <button 
       onClick={() => setIsOpen(prev => !prev)}
       className="bg-accent-purple text-white" 
       type="button">
        {isOpen ? "Hide sizes" : "Add available sizes"}
      </button>

     {isOpen && (<div className= {`select-sizes-container `}>
        {sizes.map((size) => (
          <button
            type="button"
            key={size}
            onClick={() => {
              if (!selectedSizes.includes(size)) onAddSize(size);
            }}
          >
            {size}
          </button>
        ))}
      </div>)}
      

      <div className="selected-sizes-container">
        {selectedSizes.map((size) => (
          <ProductSizes key={size} size={size} onRemoveSize={onRemoveSize} isAdmin={true}  />
        ))}
      </div>
    </div>
  );
}
