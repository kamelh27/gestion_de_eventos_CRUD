import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import eventRoutes from "./src/routes/eventRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
