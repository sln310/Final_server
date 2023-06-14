import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.mongdbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (error) {
    console.log("error");
  }
};

connectDB();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started! port is ${port}`));
