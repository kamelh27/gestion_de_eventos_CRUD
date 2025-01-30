// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const bcypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const authMiddleware = require("./middleware/auth");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.MONGODB_URL);

// const User = require("./models/User");
// const Event = require("./models/Event");

// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   const isPasswordValid =
//     user && (await bcypt.compare(password, user.password));

//   if (isPasswordValid) {
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.send({ token });
//   } else {
//     res.status(401).send({ error: "Credenciales inválidad" });
//   }
// });

// app.use("/api/events", authMiddleware);

// app.get("/api/events", async (req, res) => {
//   const { date, location } = req.query;
//   const filters = { user: req.userId };
//   if (date) filters.date = date;
//   if (location) filters.location = new RegExp(location, "i");

//   const events = await Event.find(filters);
//   res.json(events);
// });

// app.post("/api/events", async (req, res) => {
//   const event = new Event({ ...req.body, user: req.userId });
//   await event.save();
//   res.status(201).send(event);
// });

// app.delete("/api/events/:id", async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).send({ error: "Evento no encontrado" });
//     }
//     await event.delete();
//     res.status(204).send();
//   } catch (error) {
//     res
//       .status(500)
//       .send({ error: "Error al eliminar el evento", details: error.message });
//   }
// });

// app.put("/api/events/:id", async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).send({ error: "Evento no encontrado" });
//     }
//     Object.assign(event, req.body);
//     const updatedEvent = await event.save();
//     res.send(updatedEvent);
//   } catch (error) {
//     res
//       .status(500)
//       .send({ error: "Error al actualizar el evento", details: error.message });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor en puerto ${PORT}`);
// });

import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import eventRoutes from "./routes/eventRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
