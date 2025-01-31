import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const fetchEvents = () => API.get("/events");
export const createEvent = (data, token) =>
  API.post("/events", data, { headers: { Authorization: token } });
export const deleteEvent = (id, token) =>
  API.delete(`/events/${id}`, { headers: { Authorization: token } });
export const updateEvent = (id, data, token) =>
  API.put(`/events/${id}`, data, { headers: { Authorization: token } });
