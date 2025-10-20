import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as authService from "../api/auth";

const userConfig = (set, get) => ({
  accessToken: null,
  user: null,
  login: async (email, password) => {
    const accessToken = await authService.login(email, password);
    set({ accessToken });

    //เมื่อ login เสร็จแล้ว ให้ เรียกข้อมูล user มา
    get().fetchUser();
  },
  //สร้างฟังก์ชั่นเพื่อเรียกข้อมูล user
  fetchUser: async () => {
    //ประกาศตัวแปร รับค่า user จาก fetchMe
    const user = await authService.fetchMe();
    set({ user });
  },
  logout: () => {},
});

export const useAuthStore = create(
  persist(userConfig, { name: "auth-storage" })
);
