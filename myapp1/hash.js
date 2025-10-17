import crypto from "crypto";

function hashPassword(password, salt) {
  return crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex");
}

const password = "123456";
const salt1 = "a1b1";
const salt2 = "z9y8";

// console.log("Alice", hashPassword(password, salt1));
// console.log("Bob", hashPassword(password, salt2));

function generateSalt(length = 8) {
  return crypto.randomBytes(length).toString("hex");
}

const randomSalt = generateSalt(5);
// console.log(randomSalt);
console.log("Hash:", hashPassword(password, randomSalt));
