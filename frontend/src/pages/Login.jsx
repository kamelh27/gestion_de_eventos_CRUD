import { useState, useContext } from "react";
import { login } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login: authLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login(form);
    authLogin(data.token);
    navigate("/events");
  };

  return (
    <div className="p-5 w-h-sc">
      <h2 className="text-2xl">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" className="border p-2 w-full" onChange={handleChange} />
        <button className="bg-blue-600 text-white px-4 py-2">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;

