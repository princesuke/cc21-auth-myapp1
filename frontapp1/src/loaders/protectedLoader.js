import { useAuthStore } from "../stores/authStore";
import { redirect } from "react-router";

export function protectedLoader() {
  //ประตัวรับข้อมูล user จาก stores
  const user = useAuthStore.getState().user;
  if (!user) {
    // ถ้าไม่มี user ก็คือไม่ได้ login ก็ให้เด้งไปหน้า login
    throw redirect("/login");
  }

  return null;
}
