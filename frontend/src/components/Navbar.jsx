import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirige al login después de cerrar sesión
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-between">
        <Link to="/" className="text-white text-xl">Home</Link>
        <div>
          {user ? (
            <>
              <span className="text-white mr-4">Hola {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">Login</Link>
              <Link to="/register" className="text-white">Registro</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
