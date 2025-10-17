import prisma from "../prismaClient.js";
import bcrypt from "bcrypt";

export async function createUser(email, password) {
  const hash = await bcrypt.hash(password, 10);
  const result = prisma.user.create({
    data: {
      email,
      password: hash,
    },
  });

  return result;
}

export async function verifyUser(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
}

export async function getMe(id) {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
}
