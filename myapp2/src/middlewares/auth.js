import { verifyToken } from "../utils/jwt.js";
import createError from "http-errors";

export function authMiddleWare(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw createError(401, "Invalid credentials");
  }
  //   "Bearer jasdhahsdjalsdklasdfasdfalk;d"
  console.log(authHeader);
  const token = authHeader.split(" ")[1];
  try {
    const payload = verifyToken(token);
    req.userId = payload.userId;
    next();
  } catch {
    throw createError(403);
  }
}
