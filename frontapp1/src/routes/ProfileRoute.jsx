import ProfileLayout from "../components/ProfileLayout";
// import ProtectedRoute from "./ProtectedRoute";
import { protectedLoader } from "../loaders/protectedLoader";

const profileRoute = {
  path: "/profile",
  element: (
      <ProfileLayout />
  ),
  loader: protectedLoader,  
  children: [
    {
      index: true,
      element: <h1 className="text-pink-400">Profile home page content</h1>,
    },
    {
      path: "wallet",
      element: <h1 className="text-orange-400">Wallet Content</h1>,
    },
    {
      path: "settings",
      element: <h1 className="text-green-400">Settings Content</h1>,
    },
  ],
};

export default profileRoute;
