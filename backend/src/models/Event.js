import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: String,
    date: String,
    time: String,
    location: String,
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Event", EventSchema);
