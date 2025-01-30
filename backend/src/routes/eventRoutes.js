import verifyToken from "../middleware/verifyToken";
import express from "express";
import Event from "../models/Event";

const router = express.Router();

router.post("/events", verifyToken, async (req, res) => {
  const { name, date, time, location, description } = req.body;
  try {
    const event = new Event({
      name,
      date,
      time,
      location,
      description,
      userId: req.user.id,
    });
    await event.save();
    res.status(201).send("Evento creado");
  } catch (error) {
    res.status(400).send("Error al crear evento");
  }
});

router.get("/events", verifyToken, async (req, res) => {
  const { date, location } = req.query;
  const filters = { userId: req.user.id };
  if (date) filters.date = date;
  if (location) filters.location = location;
  try {
    const events = await Event.find(filters);
    res.status(200).json(events);
  } catch (error) {
    res.status(400).send("Error al obtener eventos");
  }
});

router.put("/events/:id", verifyToken, async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("Evento actualizado");
  } catch (error) {
    res.status(400).send("Error al actualizar evento");
  }
});

router.delete("/events/:id", verifyToken, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).send("Evento eliminado");
  } catch (error) {
    res.status(400).send("Error al eliminar evento");
  }
});

module.exports = router;
