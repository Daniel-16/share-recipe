import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import "dotenv/config.js";
import router from "./routes/routes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

const port = process.env.PORT || 7000;
try {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server connected at port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
