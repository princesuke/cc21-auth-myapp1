import React from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const { register, handleSubmit } = useForm();

  //เตรียมฟังก์ชั่น navigate ไว้เรียกใช้
  const navigate = useNavigate();

  const onSumit = async (data) => {
    try {
      await login(data.email, data.password);
      alert("Login Success!");
      //ให้เด้งหน้ากลับไปที่หน้าแรก path "/"
      navigate("/");
    } catch {
      alert("Login Failed!");
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSumit)} className="space-y-3">
        <h2 className="text-2xl font-bold">LoginPage</h2>
        <div>
          <label>Email:</label>&nbsp;
          <input className="outline-1" {...register("email")} />
        </div>
        <div>
          <label>Password:</label>&nbsp;
          <input
            type="password"
            className="outline-1"
            {...register("password")}
          />
        </div>
        <button
          type="submit"
          className="border-2 p-1 rounded-md mt-6 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
