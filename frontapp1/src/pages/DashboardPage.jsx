import React, { useEffect } from "react";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  //ประกาศตัวแปร user เพื่อรับค่าจาก auth store ไว้สำหรับแสดงผล
  const user = useAuthStore((state) => state.user);
  //ประตัวแปร logout เพื่อที่จะได้เรียก logout
  const logout = useAuthStore((state) => state.logout);

  //ประกาศ navigate เพื่อใช้ redirect ไปที่หน้า login
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    // เมื่อ logout แล้ว ให้ไปหน้า login
    navigate("/login");
  }

  useEffect(() => {
    const fetchUser = useAuthStore.getState().fetchUser;
    fetchUser();
  }, []);

  return (
    <div className="m-10 space-y-2">
      <h1 className="text-2xl font-bold">Welcome, </h1>
      <div>id: {user?.id}</div>
      <div>email: {user?.email}</div>
      <button
        onClick={handleLogout}
        className="border-2 p-1 rounded-md mt-6 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
