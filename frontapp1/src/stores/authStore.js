import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as authService from "../api/auth";
import { isTokenExpired } from "../utils/tokenUtils";
import { redirect } from "react-router";

const userConfig = (set, get) => ({
  accessToken: null,
  user: null,
  login: async (email, password) => {
    const accessToken = await authService.login(email, password);
    set({ accessToken });

    //เมื่อ login เสร็จแล้ว ให้ เรียกข้อมูล user มา
    await get().fetchUser();
  },
  //สร้างฟังก์ชั่นเพื่อเรียกข้อมูล user
  fetchUser: async () => {
    //ให้เช็ค token ว่า token หมดอายุรึยัง
    const token = get().accessToken;
    if (!token) return;

    //เรียกฟังก์ชั่นเช็ต token หมดอายุ
    if (isTokenExpired(token)) {
      console.warn("Token หมดอายุแล้ว");
      return get().logout();
    }

    //ประกาศตัวแปร รับค่า user จาก fetchMe
    const user = await authService.fetchMe();
    set({ user });
  },
  logout: () => {
    //เครียค่า accessToken กับ user ออกไป มันก็คือ null
    set({ accessToken: null, user: null });
  },
});

export const useAuthStore = create(
  persist(userConfig, { name: "auth-storage" })
);
