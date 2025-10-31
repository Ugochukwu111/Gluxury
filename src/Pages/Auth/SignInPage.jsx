// import './Auth.css'
import { NavLink } from "react-router-dom";
import './Auth.css'
import GoogleIcon from '/images/google.png'

export function  SignInPage(){
   return(
      <main className="grid-center sign-in-up-container">

        <h1 className="logo">
          Gluxury | Sign In
        </h1>
      
      <form>
        <p className="FWB text-heading text-center">
          <strong>
            Welcome Back Woman!
          </strong>
        </p>
        <br />

        <div className="input-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          <input type="text" placeholder="Email:" id="email" name="email" autoComplete="email" />
        </div>
        <div className="input-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round-icon lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>
          <input type="password" placeholder="Password" id="password" name="password" autoComplete="new-password" />
        </div>
      
        <button type="button" id="submit-form-btn" className="flex-center">
          Sign In
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
        </button>
        <div className="flex-center">
          <button className="external-auth-btn" id="google-sign-up-btn">
            <img src={GoogleIcon} alt="google icon" />
          </button>
        </div>
        <p className="text-center FWB text-heading">
          <span>Already</span> Have an account ?  
          <NavLink to = "/sign-up" >Sign Up</NavLink>
        </p>

        <div className="bottom-left-container "></div>
        <div className="fast-delivery-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-electric-icon lucide-truck-electric"><path d="M14 19V7a2 2 0 0 0-2-2H9"/><path d="M15 19H9"/><path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"/><path d="M2 13v5a1 1 0 0 0 1 1h2"/><path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/></svg>
          <span className="FWB text-white">
            Fast  delivery!
          </span>
        </div>
        </form>
    </main>
   )
}