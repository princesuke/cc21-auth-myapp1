import express from "express";
import { register, login, me } from "../controllers/auth.controller.js";
import { authMiddleWare } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleWare, me);

export default router;
