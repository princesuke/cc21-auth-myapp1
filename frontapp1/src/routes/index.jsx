import { createBrowserRouter } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
// import { protectedLoader } from "../loaders/protectedLoader";
import ProtectedRoute from "./ProtectedRoute";
import AdminPage from "../pages/AdminPage";
import profileRoute from "./ProfileRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
    // loader: protectedLoader,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
      <ProtectedRoute allowedRoles={["admin", "staff", "superadmin"]}>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
  profileRoute,
]);

export default router;
