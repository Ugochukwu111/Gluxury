import { ArrowLeft, Send, LoaderCircle } from "lucide-react";
import { Link , useNavigate, useLocation} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BackgroundCover } from "../../utils/utilsFunctions";
import "./ForgotPasswordPage.css";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [mailError, setMailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();
  

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateEmail(email);
    setMailError(error);

    if (error) return;

    setIsLoading(true);
    setSuccessMsg("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/forgot-password", // change this to your endpoint
        { email }
      );

      if (res?.data?.message) {
        setSuccessMsg(res.data.message);
        localStorage.setItem('fg-email', email);
        navigate("/confirm-otp", { state: { email: email, type: "Forgot Password" } });
      }
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      setMailError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="forgot-password-main">
      <BackgroundCover className={`${isLoading ? "show" : "hide"}`}>
        <LoaderCircle size={52} strokeWidth={2.75} className="spin text-white" />
      </BackgroundCover>

      <Link to="/sign-in">
        <button className="back-button">
          <ArrowLeft />
        </button>
      </Link>

      <h1>Forgot Password</h1>

      <form onSubmit={handleSubmit} className="forgot-password-form">

        <p className="text-white FWB">
          Forgot your password? Let’s help you get back in.
        </p>

        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email: e.g. johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        {mailError && <span className="text-red">{mailError}</span>}
        {successMsg && <span className="text-green">{successMsg}</span>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              Sending... <LoaderCircle className="spin" size={18} />
            </>
          ) : (
            <>
              Send Code <Send />
            </>
          )}
        </button>
      </form>
    </main>
  );
}
