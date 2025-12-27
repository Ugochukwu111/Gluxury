import axios from "axios";
import { saveToLocalStorage } from "./storage";

export const sendOtp = async (email, type) => {
  try {
    let res = await axios.post("http://localhost:5000/api/otp/send", {
      email,
      type,
    });
    return res.data.message;
  } catch (err) {
    console.error("Error sending OTP:", err.message);
  }
};

export const verifyOtp = async (email, otp, type) => {
  try {
    let res = await axios.post("http://localhost:5000/api/otp/verify", {
      email,
      otp,
      type,
    });
    saveToLocalStorage("user", res.data);
    let data = res.data;
    saveToLocalStorage("user", data.user);
    saveToLocalStorage("token", data.accessToken);
    return res.data.message;
  } catch (err) {
    const serverMessage =
      err.response?.data?.message || err.response?.data || err.message;
    console.error("Error verifying OTP:", serverMessage);
    return `verify otp error: ${serverMessage}`;
  }
};
