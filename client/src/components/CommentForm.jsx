// src/components/CommentForm.jsx
import React from 'react';
import './CommentForm.css';

const CommentForm = ({ commentContent, setCommentContent, handleCommentSubmit, user }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCommentSubmit(commentContent); // Enviar el comentario con el contenido
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Escribe tu comentario..."
                required
            ></textarea>
            <button type="submit">Enviar Comentario</button>
        </form>
    );
};

export default CommentForm;
