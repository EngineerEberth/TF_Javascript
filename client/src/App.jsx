import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'; // Icono de apagar
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import { getProfile, logoutUser } from './API';

import './App.css';

const App = () => {
    const [user, setUser] = useState(null); // Estado para el usuario autenticado

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getProfile(); // Llamada a la API para obtener el perfil
                setUser(response.data); // Actualizar el estado con los datos del usuario
            } catch (error) {
                setUser(null); // Si no hay sesión, asegurarse de limpiar el estado
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await logoutUser(); // Llamada a la API para cerrar sesión
            setUser(null); // Limpiar el estado de usuario
        } catch (error) {
            alert('Error al cerrar sesión: ' + error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="App">
            <header>
                <h1>Inteligencia Artificial</h1>
                <div className="header-buttons">
                    {user ? (
                        <div className="user-info">
                            <span>{user?.username}</span> {/* Acceso seguro al usuario */}
                            {/* Ícono de apagado para cerrar sesión */}
                            <FontAwesomeIcon
                                icon={faPowerOff}
                                className="logout-icon"
                                onClick={handleLogout}
                                title="Cerrar sesión"
                            />
                        </div>
                    ) : (
                        <>
                            <Link to="/login">Iniciar Sesión</Link>
                            <Link to="/register">Registrarse</Link>
                        </>
                    )}
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home user={user} />} />
                    <Route path="/login" element={<Login onLogin={(userData) => setUser(userData)} />} />
                    <Route path="/register" element={<Register onRegister={(userData) => setUser(userData)} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
