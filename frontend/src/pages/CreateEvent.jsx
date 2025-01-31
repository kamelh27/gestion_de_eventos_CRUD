import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createEvent } from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(form, user.token);
    navigate("/events");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Crear Evento</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Nombre del evento" className="border p-2 w-full" onChange={handleChange} required />
        <input type="date" name="date" className="border p-2 w-full" onChange={handleChange} required />
        <input type="time" name="time" className="border p-2 w-full" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Ubicación" className="border p-2 w-full" onChange={handleChange} required />
        <textarea name="description" placeholder="Descripción" className="border p-2 w-full" onChange={handleChange} required />
        <button className="bg-green-600 text-white px-4 py-2">Crear</button>
      </form>
    </div>
  );
};

export default CreateEvent;
