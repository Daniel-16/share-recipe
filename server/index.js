import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import "dotenv/config.js";
import router from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

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
