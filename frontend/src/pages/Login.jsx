import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if(response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/events')
        }
    }
    return (
        <div className='min-w-screen min-h-screen flex items-center justify-center bg-gray-800'>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-80'>
                <h2 className='text-2xl font-bold mb-4'>Login</h2>
                <input 
                    type="email"
                    placeholder='Correo'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full p-2 border rounder mb-4'
                />
                <input 
                    type="password"
                    placeholder='Contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-2 border rounder mb-4'
                />
                <button className='w-full bg-blue-500 text-white p-2 rounded'>
                    Iniciar Sesion
                </button>
            </form>
        </div>
    )
}

export default Login;