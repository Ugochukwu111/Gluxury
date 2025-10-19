import './CartDetails.css'


export function CartDetails(){
  return(
    <main>
       <div className="container">
           <div className="cart-details-card">
               <figure>
                <img src="" alt="" />

                 <div className="product-color-type-container">
                  <button type="button"></button>
                  <button type="button"></button>
                  <button type="button"></button>
                 </div>
               </figure>

               <div className="product-info-container">
                    <h3>
                      Elegant Pink Heels
                    </h3>
                    <div>
                    <p>
                      3-inch block heel, suede finish
                      <span className="size">Size 39</span>
                      <span className="selected-color">Blush Pink</span>
                      <span className="price-per-item">
                      price-per-item: $50
                      </span>
                    </p>
                    <p>
                      sub total price: $50
                    </p>
                  </div>


                 <div className='d-flex buy-product-btn-container'>
                  <button className='FWB flex-1 bg-accent-purple text-white'>
                    see more details
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                  </button>
                  <button className='FWB flex-1 bg-green text-white'>
                    Buy
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
                  </button>
                </div>
               </div>

           </div>
       </div>
    </main>
  )
}