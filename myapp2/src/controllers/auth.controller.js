import {
  createUser,
  verifyUser,
  getMe,
  findUserByEmail,
  updateUserPassword,
} from "../services/auth.services.js";
import createError from "http-errors";
import {
  generateToken,
  generateResetToken,
  verifyResetToken,
} from "../utils/jwt.js";

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

export async function forgotPassword(req, res) {
  const { email } = req.body;
  const user = await findUserByEmail(email);
  if (!user) {
    throw createError(404, "User not found");
  }

  //เราจะสร้าง link ที่ให้เค้ามา reset password
  //สร้าง token เฉพาะที่ใช้ สำหรับ reset password เท่านั้น
  // return link สำหรับ reset ออกไป

  const frontLink = "http://localhost:5173/reset-password";
  const token = generateResetToken(user.id);
  const link = `${frontLink}/${token}`;
  res.json({ message: "Reset link generated", link });
}

export async function resetPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const payload = verifyResetToken(token);
    const userId = payload.userId;
    const user = await updateUserPassword(userId, password);
    res.json({
      message: "Password reset successful",
      user: { id: user.id, email: user.email },
    });
  } catch (err) {
    throw createError(400, "Invalid or token has been expired");
  }
}
