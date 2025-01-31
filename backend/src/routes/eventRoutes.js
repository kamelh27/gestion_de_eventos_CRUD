import express from "express";
import {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createEvent);
router.get("/", getEvents);
router.put("/:id", verifyToken, updateEvent);
router.delete("/:id", verifyToken, deleteEvent);

export default router;
