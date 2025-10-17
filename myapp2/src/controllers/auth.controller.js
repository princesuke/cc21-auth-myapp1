import { createUser } from "../services/auth.services.js";

export async function register(req, res) {
  const { email, password } = req.body;
  const user = await createUser(email, password);
  res.status(201).json({
    id: user.id,
    email: user.email,
  });
}
