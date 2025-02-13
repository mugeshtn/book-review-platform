import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  role?: "admin"; // Optional role check (for admin pages)
}

const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>; // Show loader while checking auth state

  if (!user) return <Navigate to="/login" replace />; // Redirect if not logged in

  if (role && user.role !== role) return <Navigate to="/books" replace />; // Redirect non-admins

  return <Outlet />; // Allow rendering nested routes
};

export default ProtectedRoute;
