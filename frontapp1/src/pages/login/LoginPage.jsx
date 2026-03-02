import React from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./LoginPage.module.css";

const loginSchema = z.object({
  email: z.email("อีเมลไม่ถูกต้อง").min(1, "กรุณากรอกอีเมล"),
  password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
});

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

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
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSumit)} className={styles.formCard}>
        <h2 className={styles.title}>Login</h2>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            {...register("email")}
            placeholder="example@mail.com"
            className={`${styles.input} ${
              errors.email ? styles.inputError : styles.inputSuccess
            }`}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="••••••••"
            className={`${styles.input} ${
              errors.password ? styles.inputError : styles.inputSuccess
            }`}
          />
          {errors.password && (
            <span className={styles.errorText}>{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
}
