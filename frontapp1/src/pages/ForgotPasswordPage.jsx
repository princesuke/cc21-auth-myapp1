//มีฟอร์ม ที่ รับค่า email แล้วก็ค่า email ไปที่ backend
//เพื่อที่จะได้ลิงค์ ที่ไปหน้า resetpassword เพื่อกรอก password ใหม่
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendForgotPassword } from "../api/auth";

export default function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm();
  //ให้สร้างตัวแปร useState รับค่า link
  const [resetLink, setResetLink] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    //เอาข้อมูล data.email ส่งไปให้ backend
    //แล้วเอาลิงค์ แสดงในหน้านี้ เพื่อไว้กดไปหน้า reset ได้
    const link = await sendForgotPassword(data.email);
    //เก็บค่าลิงค์ที่ได้ไปไว้ใน resetLink เพื่อจะเอาไปไว้แสดง re render ออกมา
    setResetLink(link);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl">ForgotPasswordPage</h2>
      <form className="space-y-3 pt-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>&nbsp;
          <input className="outline-1" {...register("email")} />
        </div>
        <button
          type="submit"
          className="border-2 p-1 rounded-md mt-6 cursor-pointer"
        >
          Send Reset Password
        </button>
      </form>
      {/* แสดง reset ลิงค์ ให้กดไปหน้าใหม่ */}
      {resetLink && (
        <div className="mt-20">
          ลิงค์สำหรับ reset password: <br />
          <a href={resetLink} target="_blank" className="text-blue-400">
            คลิกเพื่อ Reset Password
          </a>
        </div>
      )}
    </div>
  );
}
