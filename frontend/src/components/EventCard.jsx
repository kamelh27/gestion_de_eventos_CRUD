import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteEvent } from "../services/api";

const EventCard = ({ event, onDelete }) => {
  const { user } = useContext(AuthContext);

  const handleDelete = async () => {
    if (window.confirm("¿Seguro que deseas eliminar este evento?")) {
      await deleteEvent(event._id, user.token);
      onDelete(event._id);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{event.name}</h2>
      <p><strong>Fecha:</strong> {event.date}</p>
      <p><strong>Hora:</strong> {event.time}</p>
      <p><strong>Ubicación:</strong> {event.location}</p>
      <p>{event.description}</p>

      <div className="flex gap-2 mt-2">
        {user && (
          <>
            <Link
              to={`/edit-event/${event._id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Editar
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Eliminar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;



