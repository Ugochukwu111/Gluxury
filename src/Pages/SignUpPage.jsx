import { NavLink } from "react-router-dom";
import './Auth.css'

export function SignUpPage() {
  return (
    <main className="grid-center">

        <h1 className="logo">
          Gluxury
        </h1>
      
      <form>
        <p className="FWB text-heading">
          Own your glow. Sign up to shop in style
        </p>
        <br />
        <div>
          <input type="text" placeholder="Full name:" id="name" name="name" autoComplete="fullname" />
        </div>

        <div>
          <input type="text" placeholder="Email:" id="email" name="email" autoComplete="email" />
        </div>
        <div>
          <input type="password" placeholder="Password" id="password" name="password" autoComplete="new-password" />
        </div>
      
        <button type="button" id="submit-form-btn" className="flex-center">
          Sign Up for Free
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
        </button>
        <div className="flex-center">
          <button></button>
          <button></button>
        </div>
        <p className="text-center">
          Don't have an account? 
          <NavLink to = "/sign-in" >Sign in</NavLink>
        </p>
        </form>
    </main>
  );
}
