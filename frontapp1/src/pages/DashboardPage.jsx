import React from "react";
import { useAuthStore } from "../stores/authStore";

export default function DashboardPage() {
  //ประกาศตัวแปร user เพื่อรับค่าจาก auth store ไว้สำหรับแสดงผล
  const user = useAuthStore((state) => state.user);

  return (
    <div className="m-10 space-y-2">
      <h1 className="text-2xl font-bold">Welcome, </h1>
      <div>id: {user?.id}</div>
      <div>email: {user?.email}</div>
      <button className="border-2 p-1 rounded-md mt-6 cursor-pointer">
        Logout
      </button>
    </div>
  );
}
