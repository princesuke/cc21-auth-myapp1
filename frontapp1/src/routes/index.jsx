import { createBrowserRouter } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import { protectedLoader, roleLoader } from "../loaders/protectedLoader";
import { publicLoader } from "../loaders/publicLoader";
// import ProtectedRoute from "./ProtectedRoute";
import AdminPage from "../pages/AdminPage";
import profileRoute from "./ProfileRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
        <DashboardPage />
      // </ProtectedRoute>
    ),
    loader: protectedLoader,
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: publicLoader,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPasswordPage />,
  },
  {
    path: "/admin",
    element: (
      // <ProtectedRoute allowedRoles={["admin", "staff", "superadmin"]}>
        <AdminPage />
      // </ProtectedRoute>
    ),
    loader:roleLoader(["admin", "staff", "superadmin"]),
  },
  profileRoute,
]);

export default router;
