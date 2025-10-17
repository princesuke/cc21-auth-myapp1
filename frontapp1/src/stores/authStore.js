import { create } from "zustand";
import { persist } from "zustand/middleware";

const userConfig = (set, get) => ({
  accessToken: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuthStore = create(
  persist(userConfig, { name: "auth-storage" })
);
