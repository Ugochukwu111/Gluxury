import { Link } from "react-router-dom";
import {
  ArrowRight,
  User,
  Mail,
  Phone,
  UserRoundPen,
  ArrowLeft,
  X,
  LoaderCircle,
} from "lucide-react";
import { useAuth } from "../context/useContext";
import { ScrollingInfo } from "../components/ScrollingInfo";
import { BackgroundCover } from "../utils/utilsFunctions";
import UserIcon from "/images/user.png";
import "./ProfilePage.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";

export function ProfilePage() {
  const { user, loading, setUser } = useAuth();

    const initialFormValues = {
    fullName:  "John Doe",
    email:"johndoe@gmail.com",
    phoneNumber:  '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [searchParams, setSearchParams] = useSearchParams();
  const isEditMode = searchParams.get("edit") === "true";
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // effect keeps user details in respective edith user details input if user refreshes the page
  useEffect(() => {
  if (user) {
    setFormValues({
      fullName: user.fullName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber
        ? user.phoneNumber.replace(/^234/, "")
        : "",
    });
  }
}, [user]);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // digits only

    // if (value.length > 10) return;

    setFormValues((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsSubmiting(true);
    e.preventDefault(); // prevent form refresh

    try {
      if (formValues.phoneNumber.length !== 10) {
        setPhoneNumberError("number must be exacly 10 characters");
        return;
      }

      const fullPhoneNumber = `234${formValues.phoneNumber}`;

      // Build full phone number

      // Prepare payload
      const payload = {
        fullName: formValues.fullName,
        email: formValues.email,
        phoneNumber: fullPhoneNumber,
      };

      // Call API (replace with your endpoint)
      const res = await api.put("/api/user/update-profile", { payload });
      setSearchParams({});
      setUser(res.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSubmiting(false);
    }
  };

    useEffect(() => {
    document.title = "My Profile | Gluxury";
  }, []);

  return (
    <>
      {isEditMode ? (
        <BackgroundCover>
          <form className="edit-pf-container" onSubmit={handleSubmit}>
            <button
              type="button"
              onClick={() => {
                setSearchParams({});
              }}
              className="close-edit-pf-btn"
            >
              <X />
            </button>
            <h3>edit Profile</h3>
            <p className="text-muted">
              Keep your information up to date for the best Gluxury experience.
            </p>
            <br />
            <p className="text-muted">
              We may use your <em className="FWB text-heading">phone number</em>  to <em className="FWB text-heading">provide personalized updates</em> and
              messages about your orders. Most notifications will still come to
              your <em className="FWB text-heading">email</em> .
            </p>
            <br />
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleChange}
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">
                Phone Number(<span className="text-light-green">whatsapp</span>{" "}
                number preferred)
              </label>
              <div className="phone-wrapper">
                <span className="country-code">234</span>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  placeholder="eg: 7046253045"
                  value={formValues.phoneNumber}
                  onChange={handlePhoneChange}
                  disabled={!isEditMode}
                  // maxLength={10}
                  required
                />
              </div>
              <p className="text-red phone-number-error">{phoneNumberError}</p>
            </div>

            <br />
            <div className="d-flex justify-s-between">
              <button
                type="button"
                onClick={() => {
                  setSearchParams({});
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmiting}
                className="bg-green text-white"
              >
                {isSubmiting ? (
                  <LoaderCircle className={`spin text-white `} />
                ) : (
                  "Confirm Changes"
                )}
              </button>
            </div>
          </form>
        </BackgroundCover>
      ) : (
        ""
      )}
      <main className="profile-page-main">
        <Link className="w100 d-flex " to="/">
          <ArrowLeft className="text-link" /> &nbsp; Home
        </Link>
        <br />
        <div className="hidden w100">
          <ScrollingInfo />
        </div>
        <br />
        <div className="profile-container container ">
          <div className="profile-card">
            <div className="w100">
              <div className="d-flex align-center justify-s-between">
                <figure>
                  <img src={UserIcon} alt={user?.fullName || "user"} />
                </figure>
                <div>
                  <p className="text-heading FWB">Gluxury Acount</p>
                  <button
                    type="button"
                    aria-label="edit profile"
                    onClick={() => {
                      setSearchParams({ edit: "true" });
                    }}
                  >
                    <UserRoundPen />
                  </button>
                </div>
              </div>
              <div className="user-personal-details-container">
                <div>
                  <User />
                  <p>
                    <span className="title">full name</span>
                    <span
                      className={`title-value ${
                        loading ? "skeleton-text" : ""
                      }`}
                    >
                      {user?.fullName || "John Doe"}
                    </span>
                  </p>
                </div>

                <div>
                  <Mail />
                  <p>
                    <span className="title">Email address</span>
                    <span
                      className={`title-value ${
                        loading ? "skeleton-text" : ""
                      }`}
                    >
                      {user?.email || "johndoe@gmail.com"}
                    </span>
                  </p>
                </div>

                <div>
                  <Phone />
                  <p>
                    <span className="title">Phone Number</span>
                    <span
                      className={`title-value ${
                        loading ? "skeleton-text" : ""
                      }`}
                    >
                      {user?.phoneNumber || "XXXXXXXXXXX"}
                    </span>
                  </p>
                </div>

                <div>
                  <User />
                  <p>
                    <span className="title">Role</span>
                    <span
                      className={`title-value ${
                        loading ? "skeleton-text" : ""
                      }`}
                    >
                      {user?.role || "user"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* pf stands for profile(you can see i use it in class */}

          <div className="cart-order-link-container">
            <Link to="/cart">
              View Cart &nbsp;
              <ArrowRight className="text-link" />
            </Link>
            <Link to="/order">
              View Orders &nbsp;
              <ArrowRight className="text-link" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
