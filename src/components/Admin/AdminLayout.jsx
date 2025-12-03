import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard,
  ShoppingCart,
  UserRound,
  PackageSearch,
  Crown,
  ChevronDown
 } from "lucide-react"
 import dayjs from "dayjs";
 import { GetGreeting } from "../../utils/utilsFunctions";

 const todaysDate = dayjs().format('MMMM D, YYYY');
 const greeting = GetGreeting();

 import adminProfilePic from '../../assets/images/Admin/admin-profile-photo.png'

import "./AdminLayout.css";

export function AdminLayout({children}) {
  return (
    <div className="admin-layout-container">
      <div className="admin-sidebar">
        <nav>
          <h1>
            <Crown />
             <span>Gluxury</span> 
            <span className="text-muted d-block">Admin</span>
          </h1>

          <ul>
            <li>
              <NavLink 
              to="/admin/dashboard"
               className={({ isActive }) => isActive ? "active" : ""}
              >
                <LayoutDashboard />
                <span>
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink 
               className={({ isActive }) => isActive ? "active" : ""}
              to="/admin/orders">
                <ShoppingCart />
                <span>
                  Orders
                </span> 
              </NavLink>
            </li>
            <li>
              <NavLink 
               className={({ isActive }) => isActive ? "active" : ""}
              to="/admin/users">
                <UserRound />
                 <span>
                  Users
                  </span> 
              </NavLink>
            </li>
            <li>
              <NavLink 
               className={({ isActive }) => isActive ? "active" : ""}
              to="/admin/products">
                <PackageSearch />
                <span>Products</span> 
              </NavLink>
            </li>
          </ul>
        </nav>


        <div className="admin-side-bar-adminstrator-container">
          <figure>
            <img src={adminProfilePic} alt="admin profile pic"/>
          </figure>
          <p>
            <span className="FWB">
                   Gift Ugo
            </span>
       
            <span className="text-muted">
              Adminstrator
            </span>
          </p>
        </div>
      </div>

      <div className="admin-header-main-container">
        <header className="f-wrap">
          <p>
            <span className="text-muted">
              {todaysDate}
            </span>
            <span className="d-block FWB">
              {greeting} Boss.😎
            </span>
          </p>

          <button>
            <figure>
                <img src={adminProfilePic} alt="admin profile pic"/>
            </figure>
            <p>
              <span>
                gift ugo
              </span>
              <span className="text-muted d-block">
                Admin
              </span>
            </p>
            <ChevronDown />
          </button>
        </header>

        <main className="admin-layout-container-main">
          {children}
        </main>
      </div>
    </div>
  );
}
