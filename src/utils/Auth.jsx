import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useContext";

export function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // or a spinner

  if (!user) return <Navigate to="/login" replace />; // redirect if not logged in

  return <Outlet />; // render nested routes
}


export function AdminRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;


  if (!user || user.role !== 'admin') return <Navigate to="/login" replace />; // block non-admins

  return <Outlet />;
}
