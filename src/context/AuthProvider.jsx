import { useState , useEffect} from "react";
import api from "../utils/api";
import { AuthContext } from "./AuthContext";

export function AuthProvider({children}){
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

     const fetchUser = async () => {
    try {
      const res = await api.get("/api/user/me", );
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
    fetchUser();
  }, []);

const logOut = async () => {
  try {
    await api.post("/api/user/logout"); 
  } catch (error) {
    console.error("Backend logout failed:", error);
  } finally {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  }
};


   return(
    <AuthContext.Provider value={{user, setUser, loading, setLoading, logOut, fetchUser}}>
      {children}
    </AuthContext.Provider>
   )

}