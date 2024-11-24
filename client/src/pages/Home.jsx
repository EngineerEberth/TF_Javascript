import React, { useState, useEffect } from 'react';
import ImageSlider from '../components/ImageSlider';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import ContactForm from '../components/ContactForm';
import ImageZoom from '../components/ImageZoom'; // Importamos el ImageZoom
import { getComments, createComment } from '../API';
import './Home.css';

// Importar imágenes para la galería
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Home = ({ user }) => { 
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const response = await getComments();
            setComments(response.data);
        };
        fetchComments();
    }, []);

    const handleCommentSubmit = async (content) => {
        if (!content) return; // Asegurarse de que el comentario no esté vacío

        try {
            const newComment = { 
                content, 
                username: user?.username || "Anónimo" // "Anónimo" si no hay usuario
            };
            await createComment(newComment);

            setCommentContent('');
            const response = await getComments(); // Refrescar la lista de comentarios
            setComments(response.data);
        } catch (error) {
            alert('Error al enviar el comentario: ' + error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="home">
            <h2>Bienvenido a nuestra página sobre Inteligencia Artificial</h2>
            <p>Explora el fascinante mundo de la IA y sus aplicaciones.</p>

            <ImageSlider />

            <h3>Galería de Imágenes</h3>
            <div className="gallery">
                {/* Usar el componente ImageZoom para cada imagen */}
                <ImageZoom src={image1} alt="IA 1" />
                <ImageZoom src={image2} alt="IA 2" />
                <ImageZoom src={image3} alt="IA 3" />
            </div>

            <h3>Comentarios</h3>
            <CommentForm
                commentContent={commentContent}
                setCommentContent={setCommentContent}
                handleCommentSubmit={handleCommentSubmit}
                user={user} // Pasar el usuario logeado al componente de formulario
            />
            <CommentList comments={comments} />

            {/* Agregar el ContactForm aquí */}
            <h3>Contacto</h3>
            <ContactForm />
        </div>
    );
};

export default Home;
