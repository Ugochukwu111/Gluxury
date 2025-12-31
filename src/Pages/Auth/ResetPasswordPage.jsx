import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import  { BackgroundCover } from "../../utils/utilsFunctions.jsx"
import { LoaderCircle } from "lucide-react"; 

import "./ForgotPasswordPage.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function ResetPasswordPage() {
  const initialValues = { password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); 
  };

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Field cannot be empty";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Field cannot be empty";
    }
    if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }
    if(values.password.length < 8 || values.confirmPassword.length < 8){
      errors.confirmPassword = "Password can not be less than 8";
    }
    return errors;
  };

       
  const handleSubmit = async (e) => {

    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
       const email = localStorage.getItem('fg-email');
      try {
        const res = await axios.post(`http://localhost:5000/api/user/reset-password`,{...formValues, email} );
        setIsSuccess(true);
        setTimeout(() => navigate("/login"), 2000); 
      } catch (err) {
        console.log(err);
        setIsSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main className="forgot-password-main">

          <BackgroundCover 
          className={`${isSubmitting? "show" : "hide"}`}>
        <LoaderCircle 
          size={52} 
          strokeWidth={2.75}
          className="spin text-white"
           />
        </BackgroundCover>
      <h1>Reset Password</h1>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <label htmlFor="password" className="text-muted">
          New Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <p className="text-red">{formErrors.password}</p>}

        <label htmlFor="confirmPassword" className="text-muted">
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="new-password"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        {formErrors.confirmPassword && <p className="text-red">{formErrors.confirmPassword}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Resetting..." : "Confirm Reset Password"}
        </button>

        {isSuccess === true && <p className="success">Password reset successfully!</p>}
        {isSuccess === false && <p className="error">Something went wrong. Try again.</p>}
      </form>
    </main>
  );
}
