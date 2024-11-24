// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../API'; // Importar función de la API
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password }); // Llamada a la API
            onLogin(response.data); // Actualizar el estado en App.jsx
            navigate('/'); // Redirigir al Home
        } catch (error) {
            alert('Error al iniciar sesión: ' + error.response?.data?.message || error.message);
        }
    };

    const handleGoHome = () => {
        navigate('/'); // Redirigir a la página de inicio
    };

    return (
        <form className="login-form" onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Entrar</button>

            {/* Botón para regresar al Home */}
            <button type="button" onClick={handleGoHome} className="go-home-button">
                Regresar al Home
            </button>
        </form>
    );
};

export default Login;
