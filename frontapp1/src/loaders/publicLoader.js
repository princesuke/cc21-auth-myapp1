import { useAuthStore } from "../stores/useAuthStore";
import { redirect } from "react-router";

 export const publicLoader = () => {
   const user = useAuthStore.getState().user;
    if (user) return redirect("/");
 }