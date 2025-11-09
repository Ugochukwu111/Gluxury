
import { NavLink, Link } from "react-router-dom";
import { Mail, KeyRound, SendHorizontal } from "lucide-react";
import { containerStagger, itemFadeUp } from "../../utils/Animations.jsx";
import './Auth.css'
import GoogleIcon from '/images/google.png'
import { motion } from "framer-motion";

export function  SignInPage(){
   return(
      <main className="grid-center sign-in-up-container">
      <div className="background-container">
      </div>

      <motion.form
        variants={containerStagger(0.2)}
        initial="hidden"
        animate="visible"
      >
        <div>
        <motion.h1 className="logo" variants={itemFadeUp}>
          Gluxury | Sign In
        </motion.h1>
        <motion.p variants={itemFadeUp} className="FWB text-heading text-center">
          <strong>
            Welcome Back Woman!
          </strong>
        </motion.p>
        <br />

        <motion.div className="input-container" variants={itemFadeUp}>
          
          <input type="text" placeholder="Email:" id="email" name="email" autoComplete="email" />
           <Mail size={18}  />
        </motion.div>
        <motion.div className="input-container" variants={itemFadeUp}>
          <KeyRound size={18} />
          <input type="password" placeholder="Password" id="password" name="password" autoComplete="new-password" />
        </motion.div>

        <motion.button type="button" id="submit-form-btn" className="flex-center" variants={itemFadeUp}>
          Sign In
          <SendHorizontal />
        </motion.button>
        <motion.div className="flex-center" variants={itemFadeUp} >
          <button className="external-auth-btn" id="google-sign-up-btn">
            <img src={GoogleIcon} alt="google icon" />
          </button>
        </motion.div>
        <motion.p className="text-center FWB text-heading" variants={itemFadeUp}>
          <span>Already</span> Have an account ?  
          <Link to = "/sign-up" >Sign Up</Link>
        </motion.p>
        </div>

       <div>
        <motion.p className=" text-center" variants={itemFadeUp}>
           Forgot your password? 
           <Link to="/reset-password"><u>Reset it here. </u></Link>
        </motion.p>
        </div>
        </motion.form>
        
    </main>
   )
}