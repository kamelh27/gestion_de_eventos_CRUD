import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if(response.ok) {
            navigate('/login')
        }
    }
    return (
        <div className="min-h-sreen min-h-screen flex items-center justify-center bg-gray-800">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80'">
                <h2 className="text-2xl font-bold mb-4">Registro</h2>
                <input 
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <input 
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                 />
                 <button className="w-full bg-blue-500 text-white p-2 rounded">Registrarse</button>
            </form>
        </div>
    )
}

export default Register;