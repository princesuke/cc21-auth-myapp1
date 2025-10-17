import { createUser, verifyUser, getMe } from "../services/auth.services.js";
import createError from "http-errors";
import { generateToken } from "../utils/jwt.js";

export async function register(req, res) {
  const { email, password } = req.body;
  const user = await createUser(email, password);
  res.status(201).json({
    id: user.id,
    email: user.email,
  });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await verifyUser(email, password);
  if (!user) {
    throw createError(401, "Invalid credentials");
  }
  const accessToken = generateToken(user.id);
  res.json({ accessToken });
}

export async function me(req, res) {
  const userId = req.userId;
  const user = await getMe(userId);
  res.json({ id: user.id, email: user.email, role: user.role });
}
