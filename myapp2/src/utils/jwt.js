import jwt from "jsonwebtoken";

export function generateToken(userId) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  return token;
}

export function verifyToken(token) {
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY, {
    algorithms: "HS256",
  });
  return payload;
}
