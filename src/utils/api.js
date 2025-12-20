import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", 
  withCredentials: true, // sends refresh token cookie automatically
});

// Request interceptor: attach access token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(`axios api token ${token}`)
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);


// Response interceptor: handle expired access token
api.interceptors.response.use(
  
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log(`access expired refreshing`)
      try {
        console.log('hola')
         const res = await axios.post(
          "http://localhost:5000/api/otp/refresh",
          {},
          { withCredentials: true }
        );
        console.log(res)
        const newAccessToken = res.data.accessToken;
        console.log(`new accees token ${newAccessToken}`)
        localStorage.setItem("token", newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        console.log(err)
        localStorage.removeItem("token");
        // window.location.href = "/login"; // fallback logout
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;