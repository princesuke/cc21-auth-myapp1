import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Api v0.6.0");
});

app.use("/auth", authRoutes);

export default app;
