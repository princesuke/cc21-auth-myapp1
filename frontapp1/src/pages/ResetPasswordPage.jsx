import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { resetPassword } from "../api/auth";

export default function ResetPasswordPage() {
  const { register, handleSubmit } = useForm();
  //ประกาศ รับ token จาก params url ที่เราแนบมา
  const { token } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("password is", data.password);
    console.log("token is", token);
    //นำ token กับ password ส่งไปที่ backend เพื่อ reset password
    //เมื่อ reset สำเร็จ ให้ไปที่หน้า login
    try {
      await resetPassword(token, data.password);
      alert("Password reset successful");
      //ถ้ามันสำเร็จ ก็ให้ ไปที่หน้า login
      navigate("/login");
    } catch (err) {
      alert("Reset failed:", err.message);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl">Reset Password Page</h2>
      <form className="space-y-3 pt-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>New Password:</label>&nbsp;
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
          Reset Password
        </button>
      </form>
    </div>
  );
}
