import { publicApi, authApi } from "../libs/axios";

export async function login(email, password) {
  const res = await publicApi.post("/auth/login", { email, password });
  return res.data.accessToken;
}

// สร้างฟังชั่นเพื่อ fetch ข้อมูลของ user ที่ login
export async function fetchMe() {
  //เรียก intance ที่แนบ header ที่ส่ง access token ไปด้วย
  //ประกาศตัวรับค่า ที่ได้จาก backend
  const res = await authApi.get("/auth/me");
  return res.data;
}

export async function sendForgotPassword(email) {
  //ส่งข้อมูล email ไปที่ backend
  // method post,  path -> /auth/forgot-password
  const res = await publicApi.post("/auth/forgot-password", { email });

  return res.data.link;
}

export async function resetPassword(token, newPassword) {
  const res = await publicApi.post(`/auth/reset-password/${token}`, {
    password: newPassword,
  });
  return res.data;
}
