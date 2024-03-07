import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import "dotenv/config.js";

const app = express();
app.use(cors());

const port = process.env.PORT || 6000;
try {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server connected at port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
