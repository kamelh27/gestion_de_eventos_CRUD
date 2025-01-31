import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { fetchEvents, updateEvent } from "../services/api";

const EditEvent = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const loadEvent = async () => {
      const { data } = await fetchEvents();
      const eventToEdit = data.find((event) => event._id === id);
      if (eventToEdit) {
        setEvent(eventToEdit);
      } else {
        navigate("/events"); // Redirigir si no se encuentra el evento
      }
    };
    loadEvent();
  }, [id, navigate]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEvent(id, event, user.token);
    navigate("/events");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Editar Evento</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre del evento"
          className="border p-2 w-full"
          value={event.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          className="border p-2 w-full"
          value={event.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          className="border p-2 w-full"
          value={event.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Ubicación"
          className="border p-2 w-full"
          value={event.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          className="border p-2 w-full"
          value={event.description}
          onChange={handleChange}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2">Actualizar</button>
      </form>
    </div>
  );
};

export default EditEvent;
