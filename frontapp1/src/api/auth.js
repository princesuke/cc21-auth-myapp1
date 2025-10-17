import { publicApi, authApi } from "../libs/axios";

export async function login(email, password) {
  const res = await publicApi.post("/auth/login", { email, password });
  return res.data.accessToken;
}
