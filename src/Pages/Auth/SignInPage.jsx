import { useState, useEffect,  } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Mail, KeyRound, SendHorizontal, LoaderCircle } from "lucide-react";
import { containerStagger, itemFadeUp } from "../../utils/Animations.jsx";
import {
  BackgroundCover,
  DropDownPopUpNotification,
} from "../../utils/utilsFunctions.jsx";
import { saveToLocalStorage } from "../../utils/storage.js";
import "./Auth.css";
import GoogleIcon from "/images/google.png";
import { motion } from "framer-motion";
import { useAuth } from "../../context/useContext.jsx";

export function SignInPage() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();
   const { fetchUser , user} = useAuth();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
   

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsSending(true);
      const signNewUser = async () => {
        setLoading(true);
        try {
          let res = await axios.post(
            "http://localhost:5000/api/user/login",
            formValues,
             { withCredentials: true }
          );
          saveToLocalStorage('token', res.data.accessToken);
          fetchUser();
          setIsSuccess(true);
          setLoading(false);
    
          setTimeout(() => navigate("/"), 1500);
        } catch (err) {
          setLoading(false);
          if (err.response.data.message === "Invalid password") {
            setPasswordError(
              err.response.data.message || "Network error. Try again."
            );
          } else if (err.response.data.message === "User not found") {
            setPasswordError(
              err.response.data.message || "Network error. Try again."
            );
          }
          setTimeout(() => setIsSuccess(null), 1500);
        } finally {
          setIsSending(false);
        }
      };
      signNewUser();
    }
  }, [formErrors]);

  return (
    <main className="grid-center sign-in-up-container">
      {isSuccess !== null && (
        <DropDownPopUpNotification>
          {isSuccess ? (
            <p className="text-green ">✅ Sign in successful!</p>
          ) : (
            <p className="text-red d">❌ Sign in failed!</p>
          )}
        </DropDownPopUpNotification>
      )}
      <BackgroundCover className={`${loading ? "show" : "hide"}`}>
        <LoaderCircle
          size={52}
          strokeWidth={2.75}
          className="spin text-white"
        />
      </BackgroundCover>
      <div className="background-container"></div>

      <motion.form
        variants={containerStagger(0.2)}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
      >
        <div>
          <motion.h1 className="logo" variants={itemFadeUp}>
            Gluxury | Sign In
          </motion.h1>
          <motion.p
            variants={itemFadeUp}
            className="FWB text-heading text-center"
          >
            <strong>Welcome Back Woman!</strong>
          </motion.p>
          <br />

          <motion.div className="input-container" variants={itemFadeUp}>
            <Mail
              size={18}
              className={formValues.email ? "filled-input" : ""}
            />
            <input
              type="text"
              placeholder="Email:"
              id="email"
              name="email"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
              autoFocus
            />
          </motion.div>
          <span className={`error ${formErrors.email ? "show" : ""}`}>
            {formErrors.email}
          </span>

          <motion.div className="input-container" variants={itemFadeUp}>
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
          <span
            className={`error ${
              formErrors.password || passwordError ? "show" : ""
            }`}
          >
            {formErrors.password || passwordError}
          </span>

          <motion.button
            type="submit"
            id="submit-form-btn"
            className="flex-center"
            variants={itemFadeUp}
            disabled={loading}
          >
            Sign In
            <SendHorizontal className={`${isSending ? "sending" : "sent"}`} />
          </motion.button>
          <motion.div className="flex-center" variants={itemFadeUp}>
            <button
              type="button"
              className="external-auth-btn"
              id="google-sign-up-btn"
            >
              <img src={GoogleIcon} alt="google icon" />
            </button>
          </motion.div>
          <motion.p
            className="text-center FWB text-heading"
            variants={itemFadeUp}
          >
            <span>Already</span> Have an account ?
            <Link to="/sign-up">Sign Up</Link>
          </motion.p>
        </div>

        <div>
          <motion.p className=" text-center" variants={itemFadeUp}>
            Forgot your password?
            <Link to="/forgot-password">
              <u>Reset it here. </u>
            </Link>
          </motion.p>
        </div>
      </motion.form>
    </main>
  );
}
