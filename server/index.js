import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import "dotenv/config.js";
import router from "./routes/routes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import http from "http";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", router);
app.use(errorMiddleware);

const port = process.env.PORT || 7000;
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on(
    ("disconnect",
    () => {
      console.log("Client disconnected");
    })
  );
});

try {
  await connectDB();
  server.listen(port, () => {
    console.log(`Server connected at port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

export { io };
