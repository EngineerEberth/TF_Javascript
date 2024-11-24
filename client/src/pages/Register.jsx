// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../API'; // Importar función de la API
import './Register.css';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ username, email, password }); // Llamada a la API
            onRegister(response.data); // Actualizar el estado en App.jsx
            navigate('/'); // Redirigir al Home
        } catch (error) {
            alert('Error al registrarse: ' + error.response?.data?.message || error.message);
        }
    };

    const handleGoHome = () => {
        navigate('/'); // Redirigir a la página de inicio
    };

    return (
        <form className="register-form" onSubmit={handleRegister}>
            <h2>Registrarse</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
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
            <button type="submit">Registrarse</button>

            {/* Botón para regresar al Home */}
            <button type="button" onClick={handleGoHome} className="go-button">
                Regresar al Home
            </button>
        </form>
    );
};

export default Register;
