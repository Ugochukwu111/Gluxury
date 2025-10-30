import { SideBarHeader } from "../components/SideBarHeader";
import { Footer } from "../components/Footer";

import './OrderPage.css'

export function OrderPage() {
  return (
    <div className="layout-container">
      <SideBarHeader />
      <main>
        <div className="order-container ">
          <div className="upper-container">
            <div className="d-flex order-total-content-container"> 
              <p>
                <span className="FWB">Order Placed: </span>
                <span> october 27</span>
              </p>
              <p>
                <span className="FWB">Total: </span>
                <span> $90.90</span>
              </p>
            </div>

            <div>
              <span className="FWB">Order ID:  </span>
              <span> 4ur9ur90uw0jewoj8ru9283u9032i</span>
            </div>
          </div>

          <div className="bottom-container">

            <div className="order-product-card">
              <figure>
                <img src="" alt="" />
              </figure>

              <div className="order-product-card-info" >
                <div >
                  <p className="FWB">crystal zirocania Stud earrings </p>
                  <p> arriving on october 28</p>
                  <p>Quantity: 1</p>
                </div>
                <button>
                  Track package <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-telescope-icon lucide-telescope"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/><path d="m13.56 11.747 4.332-.924"/><path d="m16 21-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/><path d="m6.158 8.633 1.114 4.456"/><path d="m8 21 3.105-6.21"/><circle cx="12" cy="13" r="2"/></svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
