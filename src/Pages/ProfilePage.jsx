import { Link } from "react-router-dom";
import {
  ArrowRight,
  User,
  Mail,
  Phone,
  ShoppingBag,
  BaggageClaim,
  UserRoundPen,
  ArrowLeft,
  X ,
} from "lucide-react";

import { ScrollingInfo } from "../components/ScrollingInfo";
import { BackgroundCover } from "../utils/utilsFunctions";
import UserIcon from "/images/user.png";
import "./ProfilePage.css";
import { useState } from "react";

export function ProfilePage() {
  const [edithProfile, setEdithProfile] = useState(false);



  return (
    <>
      {edithProfile ? (
        <BackgroundCover>
          <form className="edith-pf-container">
            <button
            onClick={()=>{
                setEdithProfile(false)
              }} 
            className="close-edith-pf-btn"><X /></button>
            <h3>Edith Profile</h3>
            <p className="text-muted">Keep your information up to date for the best Gluxury experience.</p>
            <br />
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="fullName"
                autoComplete="phoneNumber"
                 />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              autoComplete="phoneNumber"
              />
            </div>

              <br />
            <div className="d-flex justify-s-between">
              <button onClick={()=>{
                setEdithProfile(false)
              }}>Cancel</button>
              <button className="bg-green text-white">
                Confirm Changes
              </button>
            </div>
          </form>
        </BackgroundCover>
      ) : (
        ""
      )}
      <main className="profile-page-main">
        <Link className="w100 d-flex " to="/">
          {" "}
          <ArrowLeft className="text-link" /> &nbsp; Home
        </Link>
        <br />
          <div className="hidden w100">
            <ScrollingInfo />
          </div>
          <br />
        <div className="profile-container container ">
        
          <div className="profile-card">
            <div className="w100">
              <div className="d-flex align-center justify-s-between">
                <figure>
                  <img src={UserIcon} alt={"user"} />
                </figure>
                <div>
                  <p className="text-heading FWB">Gluxury Acount</p>
                  <button
                    aria-label="edith profile"
                    onClick={() => {
                      setEdithProfile(true);
                    }}
                  >
                    <UserRoundPen />
                  </button>
                </div>
              </div>
              <div className="user-personal-details-container">
                <div>
                  <User />
                  <p>
                    <span className="title">full name</span>
                    <span className="title-value">Pascal joseph</span>
                  </p>
                </div>

                <div>
                  <Mail />
                  <p>
                    <span className="title">Email address</span>
                    <span className="title-value">pascaljoseph@gmail.com</span>
                  </p>
                </div>

                <div>
                  <Phone />
                  <p>
                    <span className="title">Phone Number</span>
                    <span className="title-value">07046253045</span>
                  </p>
                </div>

                <div>
                  <User />
                  <p>
                    <span className="title">Role</span>
                    <span className="title-value">User</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* pf stands for profile(you can see i use it in class naming) */}
          <div className="pf-cart-order-container">
            <div className="pf-items">
              <ShoppingBag />
              &nbsp;&nbsp;
              <div>
                <p>Cart Items</p>
              </div>
              <div className="circle">
                <span>4</span>
              </div>
            </div>

            <div className="pf-items">
              <BaggageClaim />
              &nbsp;&nbsp;
              <div>
                <p>Order Total</p>
              </div>
              <div className="circle">
                <span>4</span>
              </div>
            </div>
          </div>

          <div className="d-flex justify-center cart-order-link-container">
            <Link to="/cart">
              View Cart &nbsp;
              <ArrowRight className="text-link" />
            </Link>
            <Link to="/order">
              View Orders &nbsp;
              <ArrowRight className="text-link" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
