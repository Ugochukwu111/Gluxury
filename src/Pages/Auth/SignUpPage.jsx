import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { SendHorizontal, UserRound, Mail, KeyRound } from "lucide-react";
import "./Auth.css";
import GoogleIcon from "/images/google.png";

export function SignUpPage() {
  const intialValues = { fullName: "", email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [ isSubmit, setIsSubmit ] = useState(false);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e)=>{
     e.preventDefault();
     setFormErrors(validate(formValues));
     setIsSubmit(true);
  }

  useEffect(()=>{
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log('sign in successful')
    }
  },[formErrors])

  const validate = (values) =>{
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!values.fullName){
      errors.username = "fullName is required!";
    }else if(values.fullName.length < 8){
      errors.username = "fullName cannot me lesser than 8!";
    }

    if(!values.email){
      errors.email = 'Email is required!';
    }else if (!regex.test(values.email)){
       errors.email = 'Not a valid email format!';
    }

    if (!values.password){
      errors.password = 'Password is required!';
    }else if (values.password.length < 8){
       errors.password = 'Password must not be less than 8!';
    }

    return errors;
  }

  return (
    <main className="grid-center sign-in-up-container">
      
      <div className="background-container">

      </div>

      <form onSubmit={handleSubmit}>
        <h1 className="logo">Gluxury | Sign Up</h1>
        <p className="FWB text-heading text-center">
          <strong>
            Made for women who value care, quality, and confidence.
          </strong>
        </p>
        <br />
        <div className="input-container">
          <UserRound size={18} className={formValues.fullName?'filled-input': ''} />
         
          <input
            type="text"
            placeholder="Full name:"
            id="name"
            name="fullName"
            value={formValues.fullName}
            autoComplete="fullname"
            onChange={handleChange}
          />
        </div>
         <span className={`error ${formErrors.username? 'show' : ''}`}>{formErrors.username}</span>

        <div className="input-container">
          <Mail size={18} className={formValues.email?'filled-input': ''} />
          
          <input
            type="text"
            placeholder="Email:"
            id="email"
            name="email"
            value={formValues.email}
            autoComplete="email"
            onChange={handleChange}
          />
        </div>
        <span className={`error ${formErrors.email? 'show' : ''}`}>{formErrors.email}</span>
        <div className="input-container">
          <KeyRound size={18} className={formValues.password?'filled-input': ''} />
          
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            autoComplete="new-password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <span className={`error ${formErrors.password?'show': ''}`}>{formErrors.password}</span>

        <button type="submit" id="submit-form-btn" className="flex-center">
          Sign Up for Free
          <SendHorizontal />
        </button>
        <div className="flex-center">
          <button className="external-auth-btn" id="google-sign-up-btn">
            <img src={GoogleIcon} alt="google icon" />
          </button>
        </div>
        <p className="text-center FWB text-heading">
         Already Have an account ?<NavLink to="/sign-in">Sign in</NavLink>
        </p>

        <p className="signup-legal-text">
          By creating an account, you accept Gluxury's <Link to="/terms">Terms of Service</Link> and acknowledge the <Link to="/privacy">Privacy Policy</Link> regarding data use, and you agree to receive essential service updates.
        </p>
      </form>

    </main>
  );
}
