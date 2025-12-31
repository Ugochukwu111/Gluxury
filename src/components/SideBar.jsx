import { NavLink } from "react-router";
import { ShoppingCart,ClipboardClock,UserRound,House} from "lucide-react";
import { useAuth } from "../context/useContext";
import "./SideBar.css";


import UserIcon from "/images/user.png";

export function SideBar({onToggleSideBar, ref}) {

    const { user ,loading, logOut}= useAuth();

  return (
    <aside ref = {ref} aria-label = "sidebar closed">
      <div>
        <button onClick={onToggleSideBar} type="button" className="close-side-bar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="user-details-container">
          <figure>
            <img src={UserIcon} alt={user?.fullName|| "profile"} />
          </figure>
          <p className={`user-name text-heading FWB ${loading ? "skeleton-text" : ""}`}>
            {user?.fullName || 'John Doe'}
            </p>
          <p className="user-state-country">
            <span className={`${loading ? "skeleton-text" : ""}`}>
              {user?.email || 'johndoe@gmail.com'}
            </span>
          </p>
          <hr />
        </div>
        <br />
        <ul>
            <li>
            <NavLink to="/">
            <House />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
            <ShoppingCart />
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <ClipboardClock />
              Order History
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <UserRound />
              Profile
            </NavLink>
          </li>

        </ul>
      </div>

      <button 
        onClick={logOut}
        className="bg-red FWB text-white">
        Log Out
      </button>
    </aside>
  );
}
