import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL, 
  withCredentials: true, 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isLoginPage = window.location.pathname === "/login";
    const isAuthRequest = originalRequest?.url.includes("/login") || originalRequest.url.includes("/logout") || originalRequest.url.includes("/refresh");

    if (error.response?.status === 401 && !originalRequest._retry && !isLoginPage && !isAuthRequest) {
      originalRequest._retry = true;
      try {
        // Use 'api' instance instead of 'axios' to maintain settings, 
        // but use the relative path
        const res = await api.post("/api/otp/refresh");
        
        const newAccessToken = res.data.accessToken;
        localStorage.setItem("token", newAccessToken);
        
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        // If refresh fails, clear everything and force login
        localStorage.removeItem("token");
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;