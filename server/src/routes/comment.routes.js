// backend/routes/comment.routes.js
import { Router } from 'express';
import { createComment, getAllComments } from '../controllers/comment.controller.js';
import { authRequired } from '../middlewares/valideToken.js';

const router = Router();

// Ruta para crear un nuevo comentario, requiere autenticación
router.post('/', authRequired, createComment);

// Ruta para obtener todos los comentarios (sin autenticación)
router.get('/', getAllComments);

export default router;
