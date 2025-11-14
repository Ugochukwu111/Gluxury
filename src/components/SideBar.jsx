import { NavLink } from "react-router";
import { MessageCircle,ClipboardClock,HeartPulse,UserRound, ArrowLeftRight } from "lucide-react";
import "./SideBar.css";

import ProfilePic from '../assets/images/Gluxury-anime-girl-profile.webp'

export function SideBar({onToggleSideBar, ref}) {
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
            <img src={ProfilePic} alt=" profile pic" />
          </figure>
          <p className="user-name text-heading FWB">
            Gift Ugo
            </p>
          <p className="user-state-country">
            <span>Benin City,</span>
            <span> Nigeria</span>
          </p>
          <hr />
        </div>
        <br />
        <ul>
          <li>
            <NavLink href="">
              <MessageCircle />
              Message
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <ClipboardClock />
              Order History
            </NavLink>
          </li>
          <li>
            <NavLink href="">
              <HeartPulse />
              WishList
            </NavLink>
          </li>
          <li>
            <NavLink href="">
              <UserRound />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink href="">
              <ArrowLeftRight />
              Transaction History
            </NavLink>
          </li>
        </ul>
      </div>

      <button className="bg-red FWB text-white">
        Log Out
      </button>
    </aside>
  );
}
