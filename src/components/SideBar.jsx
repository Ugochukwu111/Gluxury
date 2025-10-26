
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
            <a href="">
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
                className="lucide lucide-message-circle-icon lucide-message-circle"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
              Message
            </a>
          </li>
          <li>
            <a href="">
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
                className="lucide lucide-calendar-arrow-down-icon lucide-calendar-arrow-down"
              >
                <path d="m14 18 4 4 4-4" />
                <path d="M16 2v4" />
                <path d="M18 14v8" />
                <path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" />
                <path d="M3 10h18" />
                <path d="M8 2v4" />
              </svg>
              Order History
            </a>
          </li>
          <li>
            <a href="">
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
                className="lucide lucide-heart-pulse-icon lucide-heart-pulse"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
              </svg>
              WishList
            </a>
          </li>
          <li>
            <a href="">
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
                className="lucide lucide-user-round-icon lucide-user-round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              Profile
            </a>
          </li>
          <li>
            <a href="">
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
                className="lucide lucide-arrow-left-right-icon lucide-arrow-left-right"
              >
                <path d="M8 3 4 7l4 4" />
                <path d="M4 7h16" />
                <path d="m16 21 4-4-4-4" />
                <path d="M20 17H4" />
              </svg>
              Transaction History
            </a>
          </li>
        </ul>
      </div>

      <button className="bg-red FWB text-white">
        Log Out
      </button>
    </aside>
  );
}
