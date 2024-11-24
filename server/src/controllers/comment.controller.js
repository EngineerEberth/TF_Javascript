// backend/controllers/comment.controller.js

import Comment from '../model/comment.model.js';

// Crear un nuevo comentario
export const createComment = async (req, res) => {
    const { content } = req.body;
    const author = req.user.id; // Obtener el ID del usuario desde el token

    try {
        const newComment = new Comment({
            content,
            author
        });

        const savedComment = await newComment.save();
        res.status(201).json(savedComment); // Devolver el comentario creado
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los comentarios
export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('author', 'username email'); // Población del autor
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
