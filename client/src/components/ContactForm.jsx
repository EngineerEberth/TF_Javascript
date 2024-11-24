import React, { useState } from 'react';
import { submitContactForm } from '../API'; // Importamos la función desde API
import './ContactForm.css';  // Aquí puedes agregar estilos CSS para el formulario

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear el objeto con los datos del formulario
        const contactData = { name, email, message };

        try {
            // Usar la función de la API para enviar los datos
            const response = await submitContactForm(contactData);

            if (response.status === 201) {  // Verificar que la respuesta fue correcta
                alert('Mensaje enviado con éxito!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Hubo un problema al enviar el mensaje.');
            }
        } catch (error) {
            alert('Error al enviar el mensaje: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <label>
                Nombre:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Correo electrónico:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Mensaje:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
