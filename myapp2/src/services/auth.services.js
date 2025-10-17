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
