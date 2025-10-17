import bcrypt from "bcrypt";

async function run() {
  const password = "123456";
  const saltRounds = 20;

  console.time("hash");
  const hash = await bcrypt.hash(password, saltRounds);
  console.timeEnd("hash");

  console.log(hash);

  //   const hash1 = await bcrypt.hash(password, 5);
  //   const hash2 = await bcrypt.hash(password, 5);

  //   console.log("Hash 1:", hash1);
  //   console.log("Hash 2:", hash2);

  //   const isMath = await bcrypt.compare("123456", hash1);

  //   console.log(isMath);
}

run();
