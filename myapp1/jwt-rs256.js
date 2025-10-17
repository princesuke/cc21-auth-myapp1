import jwt from "jsonwebtoken";
import fs from "fs";

const privateKey = fs.readFileSync("./keys/private.pem");
const publicKey = fs.readFileSync("./keys/public.pem");

const payload = { userId: 1, role: "admin" };

const token = jwt.sign(payload, privateKey, {
  algorithm: "RS256",
  expiresIn: "1h",
});

console.log("RS256 JWT:", token);

const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
console.log("RS256 Decoded:", decoded);
