import { useAuthStore } from "../stores/authStore";
import { Navigate } from "react-router";

export default function ProtectedRoute({ allowedRoles, children }) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  console.log("role=>", user.role);
  if (allowedRoles && !allowedRoles.includes(user.role.toLowerCase())) {
    return <Navigate to="/login" />;
  }

  return children;
}
