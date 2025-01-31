import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEvents } from "../services/api";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({ date: "", location: "" });

  useEffect(() => {
    const loadEvents = async () => {
      const { data } = await fetchEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event._id !== id));
  };

  const filteredEvents = events.filter(
    (event) =>
      (!filters.date || event.date === filters.date) &&
      (!filters.location || event.location.includes(filters.location))
  );

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Eventos</h1>

      {/* Filtros */}
      <div className="my-4 flex gap-4">
        <input
          type="date"
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Filtrar por ubicación"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border p-2"
        />
      </div>

      {/* Lista de eventos */}
      <div className="grid gap-4">
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} onDelete={handleDelete} />
        ))}
      </div>

      {/* Enlace para crear un evento */}
      <Link
        to="/create-event"
        className="bg-green-600 text-white px-4 py-2 mt-4 inline-block"
      >
        Crear Evento
      </Link>
    </div>
  );
};

export default Events;


