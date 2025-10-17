import jwt from "jsonwebtoken";

const secret = process.env.SECERT_KEY;
const payload = { userId: 1, role: "admin" };

const token = jwt.sign(payload, secret, {
  algorithm: "HS256",
  expiresIn: "1h",
});

console.log("HS256 JWT:", token);

const decoded = jwt.verify(token, secret, { algorithms: ["HS256"] });
console.log("HS256 Decoded:", decoded);
