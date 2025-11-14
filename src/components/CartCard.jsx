import { useNavigate } from "react-router";
import { Link } from "react-router";

export function CartCard(cartItem){
  const navigate = useNavigate()
      const handleClick = () => {
    navigate(`/product/${cartItem.id}`);
  };
  return (
    <div className="cart-details-card">
                <h2>Deliverydate: Tuesday, October 21</h2>
                <div className="d-flex f-wrap cart-details-wrapper justify-s-between" >
    
                  <div className="d-flex">
                  <figure>
                    <img src={null} alt="" />
                  </figure>
    
                  <div className="product-info-container">
                    <h3>Elegant Pink Heels</h3>
                    <div>
                      <p className="FWB">price: $50</p>
                    </div>
    
                    <div className="d-flex 
                    flex-column buy-product-btn-container">
                      <Link onClick={handleClick}>
                        <u>See more details about product</u>
                      </Link>
                      <br />
                      <button className="bg-red FWB text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        Delete
                      </button>
                    </div>
                  </div>
                  </div>
    
                  <div className="delivery-options-wrapper" >
                    <h3>Choose a delivery option:</h3>
                    <div className="delivery-options-container">
      
                        <div>
                        <input type="radio" name="delivery" />
                        <p className="FWB">
                          <span>Tuesday, October 21</span>
                          <span className="text-grey d-block">Free - Shipping</span>
                        </p>
                        </div>
                        <div>
                          <input type="radio" name="delivery" />
                          <p className="FWB">
                            <span>Tuesday, October 21</span>
                            <span className="text-grey d-block">
                              $1500 - Shipping
                            </span>
                          </p>
                        </div>
                        <div>
                          <input type="radio" name="delivery" />
                          <p className="FWB">
                            <span className="text-grey ">
                              Tuesday, October 21
                            </span>
                            <span className="text-grey d-block">
                              $2000 - Shipping
                            </span>
                          </p>
                        </div>
           
                    </div>
                  </div>
                </div>
              </div>
  )
}