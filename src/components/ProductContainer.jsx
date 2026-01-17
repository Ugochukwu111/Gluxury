import './ProductContainer.css'

export  function ProductContainer({productCategory = 'product Category', headerColor= 'bg-heading' }) {
  return (
    <div className=" container product-container ">
      <h2 className={`text-white ${headerColor}`}>{productCategory}</h2>
      <div className="product-wrapper">
        
      </div>
    </div>
  )
}
