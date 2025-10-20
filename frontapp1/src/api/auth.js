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
