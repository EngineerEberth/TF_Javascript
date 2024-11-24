import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';

const router = Router();

// Ruta para enviar un formulario de contacto
router.post('/', submitContactForm);

export default router;