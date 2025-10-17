import express from "express";
import {
  register,
  login,
  me,
  forgotPassword,
} from "../controllers/auth.controller.js";
import { authMiddleWare } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleWare, me);
router.post("/forgot-password", forgotPassword);

export default router;
