import { useRef, useState } from "react";
import './ConfirmOtpPage.css'

export function ConfirmOtpPage(){
    const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // ✅ Only allow numbers
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // ✅ Move to next input if value entered
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // ✅ Remove error highlight if all filled
    if (newOtp.every((v) => v !== "")) {
      setError(false);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Check if any input is empty
    if (otp.some((v) => v === "")) {
      setError(true);
      return;
    }

    alert(`OTP entered: ${otp.join("")}`);
  };


  return (
    <main className='comfirm-otp-page-main'>
     
     <form action="">
     <h1 className='logo'>
      Gluxury
     </h1>

     <h2>
      Confirm OTP
     </h2>

     <p className="FWB">
      We sent a 4-digit code to 
       <span className='d-block text-muted'>
         pascaljoseph@gmail.com
      </span>
     </p>

     <div className={`input-container ${error ? "error" : ""}`}>
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
            />))}
     </div>

     <div className='d-flex justify-center '>
      <button type="button" className='bg-gradient-top text-link resend-code-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        Resend Code
      </button>
     </div>
       <br />
     <button onClick={handleSubmit} className='comfirm-otp-btn bg-gradient text-white'>
      Confirm and proceed
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
     </button>
    </form>

    <p>
      Trusted. Fast. Beautifully simple
    </p>

    <a href='' className='d-flex chart-us-link'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
      Need help? Chat with us
    </a>

    </main>
  )
}