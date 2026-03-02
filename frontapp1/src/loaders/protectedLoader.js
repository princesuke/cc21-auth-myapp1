import { useAuthStore } from "../stores/useAuthStore";
import { redirect } from "react-router";

// 1. สร้าง Base Guard (ฟังก์ชันกลางสำหรับเช็คสิทธิ์)
function guard(user, allowedRoles) {
  if (!user) return redirect("/login");
  
  if (allowedRoles) {
    const userRole = user.role?.toLowerCase();
    const roles = allowedRoles.map(r => r.toLowerCase());
    if (!roles.includes(userRole)) return redirect("/");
  }
}

// 2. สำหรับหน้าทั่วไปที่ต้องการแค่ Login (ไม่ต้องใส่ () ใน index.jsx)
export const protectedLoader = () => {
  const user = useAuthStore.getState().user;
  return guard(user);
}

// 3. สำหรับหน้า Admin หรือหน้าที่ต้องการเช็ค Role (ใส่ () ใน index.jsx)
export const roleLoader = (allowedRoles) => () => {
  const user = useAuthStore.getState().user;
  return guard(user, allowedRoles);
}
