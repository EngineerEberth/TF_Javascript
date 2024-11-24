// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Nombre: Eberth Gianfranco - Codigo: U22221452.</p>
            <p>
                <a href="/contact">Contacto</a> | 
                <a href="/about">Acerca de</a> | 
                <a href="/privacy">Política de Privacidad</a>
            </p>
        </footer>
    );
};

export default Footer;