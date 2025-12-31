import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { containerStagger, itemFadeUp } from "../../utils/Animations.jsx";
import { SendHorizontal, UserRound, Mail, KeyRound,LoaderCircle  } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../../utils/storage.js";
import { sendOtp } from '../../utils/sendOtp.js'
import "./Auth.css";
import { BackgroundCover } from '../../utils/utilsFunctions.jsx'
import GoogleIcon from "/images/google.png";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function SignUpPage() {
  const intialValues = { fullName: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () =>{
    setLoading(true);
    try{
      const result = await sendOtp(formValues.email, 'Confirm Email');
    navigate("/confirm-otp", { state: { email: formValues.email, type: "Confirm Email" } });
    }catch (err) {
    alert("Failed to send OTP: " + err.message);
  }finally{
    setLoading(false);
  }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmailError("");
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const signNewUser = async () => {
        setIsSending(true);
        try {
          let res = await axios.post(
            `${API_BASE_URL}/api/user/signup`,
            formValues, 
            { withCredentials: true }
          );
          let userData = res.data;
          saveToLocalStorage("user", userData);
          setIsSending(false);

          setTimeout(()=>{
            handleSendOtp()
          }, 200);

         
        } catch (err) {
          setIsSending(false);
           console.error(err)
          if (err?.response.data.message == "Email already registered") {
            setEmailError(err.response.data.message);
          }
        }
      };
      signNewUser();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.fullName) {
      errors.username = "fullName is required!";
    } else if (values.fullName.length < 8) {
      errors.username = "fullName cannot be lesser than 8!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must not be less than 8!";
    }

    return errors;
  };

  return (
    <main className="grid-center sign-in-up-container">
                        <BackgroundCover 
                        className={`${loading? "show" : "hide"}`}>
                      <LoaderCircle 
                        size={52} 
                        strokeWidth={2.75}
                        className="spin text-white"
                         />
                      </BackgroundCover>
      <div className="background-container"></div>

      <motion.form
        onSubmit={handleSubmit}
        variants={containerStagger(0.2)}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1 variants={itemFadeUp} className="logo">
            Gluxury | Create Your Profile
          </motion.h1>

          <motion.p
            variants={itemFadeUp}
            className="FWB text-heading text-center"
          >
            <strong>
              Curated for the woman who values exceptional craftsmanship, timeless quality, and the power of confidence.
            </strong>
          </motion.p>

          <motion.div variants={itemFadeUp} className="input-container">
            <UserRound
              size={18}
              className={formValues.fullName ? "filled-input" : ""}
            />
            <input
              type="text"
              placeholder="Full name:"
              id="name"
              name="fullName"
              value={formValues.fullName}
              autoComplete="fullname"
              onChange={handleChange}
              autoFocus
            />
          </motion.div>
          <span className={`error ${formErrors.username ? "show" : ""}`}>
            {formErrors.username}
          </span>

          <motion.div variants={itemFadeUp} className="input-container">
            <Mail
              size={18}
              className={formValues.email ? "filled-input" : ""}
            />
            <input
              type="text"
              placeholder="Email:"
              id="email"
              name="email"
              value={formValues.email}
              autoComplete="email"
              onChange={handleChange}
              className="email-input"
            />
          </motion.div>
          <span
            className={`error ${formErrors.email || emailError ? "show" : ""}`}
          >
            {formErrors.email || emailError}
          </span>

          <motion.div variants={itemFadeUp} className="input-container">
            <KeyRound
              size={18}
              className={formValues.password ? "filled-input" : ""}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              autoComplete="new-password"
              value={formValues.password}
              onChange={handleChange}
            />
          </motion.div>
          <span className={`error ${formErrors.password ? "show" : ""}`}>
            {formErrors.password}
          </span>

          <motion.button
            variants={itemFadeUp}
            type="submit"
            id="submit-form-btn"
            className="flex-center sign-up-btn"
            disabled={isSending}
          >
            Sign Up for Free
            <SendHorizontal
              className={`${isSending ? "sending" : "sent"}`}
            />
          </motion.button>

          <motion.div variants={itemFadeUp} className="flex-center">
            <button className="external-auth-btn" id="google-sign-up-btn">
              <img src={GoogleIcon} alt="google icon" />
            </button>
          </motion.div>

          <motion.p
            variants={itemFadeUp}
            className="text-center FWB text-heading"
          >
            Already Have an account ?<NavLink to="/login">Log in</NavLink>
          </motion.p>
        </div>

        <div>
          <motion.p variants={itemFadeUp} className="signup-legal-text">
            By creating an account, you accept Gluxury's{" "}
            <Link to="/terms">Terms of Service</Link> and acknowledge the{" "}
            <Link to="/privacy">Privacy Policy</Link> regarding data use, and
            you agree to receive essential service updates.
          </motion.p>
        </div>
      </motion.form>
    </main>
  );
}
