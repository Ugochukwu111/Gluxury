import axios from "axios";
import { saveToLocalStorage } from "./storage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const sendOtp = async (email, type) => {
  try {
    let res = await axios.post(`${API_BASE_URL}/api/otp/send`, {
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
    let res = await axios.post(`${API_BASE_URL}/api/otp/verify`, {
      email,
      otp,
      type,
    });
    saveToLocalStorage("token", res.data.accessToken);
    return res.data.message;
  } catch (err) {
    const serverMessage =
      err.response?.data?.message || err.response?.data || err.message;
    console.error("Error verifying OTP:", serverMessage);
    return `verify otp error: ${serverMessage}`;
  }
};
