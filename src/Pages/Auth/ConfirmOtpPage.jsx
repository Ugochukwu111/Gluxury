import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SendHorizontal, RefreshCw ,MessageCircle,LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { containerStagger, itemFadeUp } from "../../utils/Animations.jsx";
import { verifyOtp , sendOtp } from "../../utils/sendOtp.js";
import  { BackgroundCover } from "../../utils/utilsFunctions.jsx"
import './ConfirmOtpPage.css'

export function ConfirmOtpPage(){
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { email, type  } = location.state || {} ;
  const navigate = useNavigate();

    const handleSendRefreshOtp = async () =>{
    setLoading(true);
    try{
      const message = await sendOtp(email, type);
      console.log(message);
    }catch (err) {
    alert("Failed to send OTP: " + err.message);
  }finally{
    setLoading(false);
  }
  }

   const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow numbers
    if (!/^[0-9]?$/.test(value)) {
      console.log('not a number');
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if a number was entered
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // Remove error if all inputs are filled
    if (newOtp.every(v => v !== "")) {
      setError(false);
    }
  };

    const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some(v => v === "")) {
      setError(true);
      return;
    }else{
      handleVerifyOtp()
    }
  };

  const handleVerifyOtp = async() => {
    setLoading(true)
    try{
     const message = await verifyOtp(email, otp.join(""), type);
      if (message === 'OTP verified successfully'){
        setTimeout(()=>{
          navigate('/')
        }, 1500);
      }else{
        setError(true);
      }
    }catch(err){
      console.error(err);
       setError(true);
    }finally{
          setTimeout(()=>{
          setLoading(false);
        }, 1000);
    }
  }

  return (
    <main className='comfirm-otp-page-main'>
      
          <BackgroundCover 
          className={`${loading? "show" : "hide"}`}>
        <LoaderCircle 
          size={52} 
          strokeWidth={2.75}
          className="spin text-white"
           />
        </BackgroundCover>
      

     <motion.form
       onSubmit={handleSubmit} 
        variants={containerStagger(0.2)}
        initial="hidden"
        animate="visible"
       >
     <motion.h1 className='logo' variants={itemFadeUp}>
      Gluxury
     </motion.h1>

     <motion.h2 variants={itemFadeUp}>
      Confirm OTP
     </motion.h2>

     <motion.p className="FWB" variants={itemFadeUp}>
      We sent a 4-digit code to 
       <span className='d-block text-muted'>
         {email}
      </span>
     </motion.p>

     <motion.div className={`input-container`} variants={itemFadeUp}>
          {otp.map((value, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              autoComplete="off"
              value={value}
              ref={(el) => (inputsRef.current[i] = el)}
               onChange={(e) => handleChange(e, i)}
               onKeyDown={(e) => handleKeyDown(e, i)}
               className=
               {`${error? 'error-msg':''} ${loading?'text-green':''}`}

               inputMode="numeric"
            />))}
     </motion.div>

     <div className='d-flex justify-center '>
      <button 
        type="button" 
        className='bg-gradient-top text-link resend-code-btn'
        onClick={handleSendRefreshOtp}
        >
          <RefreshCw />
        Resend Code
      </button>
     </div>
       <br />
     <button 
       type="submit" 
       className='comfirm-otp-btn bg-gradient text-white'
       >
      Confirm and proceed
      <SendHorizontal />
     </button>
    </motion.form>

    <motion.p variants={itemFadeUp}>
      Trusted. Fast. Beautifully simple
    </motion.p>

    <Link to='' className='d-flex chart-us-link'>
     <MessageCircle className="text-white" />
      Need help? Chat with us
    </Link>

    </main>
  )
}