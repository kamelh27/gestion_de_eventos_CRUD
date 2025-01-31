import { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/login");
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" className="border p-2 w-full" onChange={handleChange} />
        <button className="bg-blue-600 text-white px-4 py-2">Registrar</button>
      </form>
    </div>
  );
};

export default Register;



