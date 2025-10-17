import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as authService from "../api/auth";

const userConfig = (set, get) => ({
  accessToken: null,
  user: null,
  login: async (email, password) => {
    const accessToken = await authService.login(email, password);
    set({ accessToken });
  },
  logout: () => {},
});

export const useAuthStore = create(
  persist(userConfig, { name: "auth-storage" })
);
