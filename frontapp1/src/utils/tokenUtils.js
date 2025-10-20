import { jwtDecode } from "jwt-decode";

export function isTokenExpired(token) {
  try {
    //ปรับรับตัวแปรวันหมดอายุ จาก token
    const { exp } = jwtDecode(token);
    //เงื่อนว่า เวลาปัจจุบัน มากกว่า หรือเท่ากับ เวลาหมดอายุไหม
    //ถ้าเวลาปัจจุบันมากกว่า แปลว่า token นั้นหมดอายุแล้ว
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
}
