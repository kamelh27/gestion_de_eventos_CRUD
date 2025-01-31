import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const event = new Event({ ...req.body, user: req.user.userId });
  await event.save();
  res.status(201).json(event);
};

export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

export const updateEvent = async (req, res) => {
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedEvent);
};

export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Evento eliminado" });
};
