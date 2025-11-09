import { useRef, useState } from "react";
import { SendHorizontal, RefreshCw ,MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { containerStagger, itemFadeUp } from "../../utils/Animations.jsx";
import './ConfirmOtpPage.css'

export function ConfirmOtpPage(){
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);


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
    }
    alert(`OTP entered: ${otp.join("")}`);
  };

  return (
    <main className='comfirm-otp-page-main'>
     
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
         pascaljoseph@gmail.com
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
               className={`${error? 'error-msg':''}`}
               inputMode="numeric"
            />))}
     </motion.div>

     <div className='d-flex justify-center '>
      <button type="button" className='bg-gradient-top text-link resend-code-btn'>
          <RefreshCw />
        Resend Code
      </button>
     </div>
       <br />
     <button type="submit" className='comfirm-otp-btn bg-gradient text-white'>
      Confirm and proceed
      <SendHorizontal />
     </button>
    </motion.form>

    <motion.p variants={itemFadeUp}>
      Trusted. Fast. Beautifully simple
    </motion.p>

    <a href='' className='d-flex chart-us-link'>
     <MessageCircle className="text-white" />
      Need help? Chat with us
    </a>

    </main>
  )
}