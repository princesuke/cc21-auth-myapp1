import express from "express";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Api v0.6.0");
});

app.use("/auth", authRoutes);

app.use(errorHandler);

export default app;
