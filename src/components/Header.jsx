import { NavLink } from "react-router-dom";
import {
  Menu,
  UserRound,
  CircleQuestionMark,
  ShoppingCart,
  ChevronDown,
  Package,
  Heart,
} from "lucide-react";
import { SearchBar } from "./SearchBar";

import "./Header.css";
import { useState } from "react";

export function Header({ onToggleSideBar, cartLength, onResults }) {

  return (
    <header className="d-flex flex-column">
      <div></div>

      <nav className="container">
        <div>
        <div className="d-flex align-center">
          <button className="menu-btn">
            <Menu />
          </button>
          <h1>GLUXURY</h1>
        </div>
        <SearchBar placeholder="Search for products, bags, and shoes" />
        <ul>
          <li
            className={`account-list-container `}
             tabIndex={0}
          >
            <UserRound /> 
            <span className="d-flex align-center hide-mobile">
            account 
            <ChevronDown className="drop-down-icon" />
            </span>
            <ul className={`dropdown-box  "show" : ""}`}>
              <li>
                <button className="bg-heading text-white">
                  Sign In
                </button>
              </li>
              <hr />
              <li>
                <NavLink to="/profile">
                 <UserRound /> My Profile
                 </NavLink>
              </li>
              <li>
                <NavLink to="/order"><Package /> Orders</NavLink>
              </li>
              <li>
                <NavLink to="/whishlist"> <Heart /> Whislist</NavLink>
              </li>
            </ul>
          </li>
          <li
            className="help-container"
            tabIndex={0}
          >
            <CircleQuestionMark /> 
            <span className="hide-mobile d-flex align-center">
            Help 
            <ChevronDown  className="drop-down-icon"/>
            </span>
            <ul className="dropdown-box">
              <li>
                <a href="">my Profile</a>
              </li>
              <li>
                <a href="">my Account</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <ShoppingCart /> <span className="hide-mobile d-flex align-center">Cart</span> 
            </a>
          </li>
        </ul>
        </div>
         <div className="d-flex justify-center nav-lower-container">
          <SearchBar placeholder="Search for products, bags, and shoes" />
        </div>
      </nav>
    </header>
  );
}
