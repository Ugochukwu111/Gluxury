import { Link ,NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  UserRound,
  CircleQuestionMark,
  ShoppingCart,
  ChevronDown,
  Package,
  Heart,
  XCircle, 
  RotateCcw, 
  CreditCard,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SearchBar } from "./SearchBar";
import { useAuth } from "../context/useContext";

import "./Header.css";


export function Header({ cartLength,  toggleSideBar }) {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  const handleLogOutOrLogIn = async () => {
    if (user) {
      await logOut();
    } else {
      navigate("/log-in");
    }
  };

  return (
    <header className="d-flex flex-column">
      <div></div>

      <nav className="container">
        <div>
          <div className="d-flex align-center">
            <button onClick={toggleSideBar} className="menu-btn">
              <Menu />
            </button>

            <Link className="logo" to="/">
            <h1>GLUXURY</h1>
            </Link>

          </div>
          <SearchBar  placeholder="Search for products, bags, and shoes" />
          <ul>
            <li className={`account-list-container `} tabIndex={0}>
              <UserRound />
              <span className="d-flex align-center hide-mobile">
                account
                <ChevronDown className="drop-down-icon" />
              </span>
              <ul className={`dropdown-box  "show" : ""}`}>
                <li>
                  <button
                    onClick={handleLogOutOrLogIn}
                    className="bg-heading text-white"
                  >
                    {user ? "Log out" : "Sign In"}
                  </button>
                </li>
                <hr />
                <li>
                  <NavLink to="/profile">
                    <UserRound /> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order">
                    <Package /> Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/whishlist">
                    {" "}
                    <Heart /> Whislist
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="help-container" tabIndex={0}>
              <CircleQuestionMark />
              <span className="hide-mobile d-flex align-center">
                Help
                <ChevronDown className="drop-down-icon" />
              </span>
              <ul className="dropdown-box">
                <li>
                  <a href="">
                    <ShoppingCart />
                    Place an Order
                  </a>
                </li>
                <li>
                  <a href="">
                    <XCircle /> Cancel an Order
                  </a>
                </li>
                <li>
                  <a href="">
                    <RotateCcw /> Returns and Refunds
                  </a>
                </li>
                <li>
                  <a href="">
                    <CreditCard /> Make Payments
                  </a>
                </li>
                <li>
                  <button className="bg-whatsapp ">
                    <FaWhatsapp size={20} />
                    Whats app
                  </button>
                </li>
              </ul>
            </li>
            <li >
              <NavLink to="/cart">
                <span className="cart-number">{cartLength || 0}</span>
                <ShoppingCart className="text-white" />
                <span className="hide-mobile d-flex align-center text-white">Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-center nav-lower-container">
          <SearchBar  placeholder="Search for products, bags, and shoes" />
        </div>
      </nav>
    </header>
  );
}
