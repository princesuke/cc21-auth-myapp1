import { createBrowserRouter } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
