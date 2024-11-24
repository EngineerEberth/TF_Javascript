import express from 'express';
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.js";
import commentRoutes from "./routes/comment.routes.js";  // Importar rutas de comentarios
import contactRoutes from "./routes/contact.routes.js";  // Importar rutas de contacto
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Usar las rutas
app.use('/api/users', authRoutes);       // Rutas de autenticación
app.use('/api/comments', commentRoutes);  // Rutas de comentarios
app.use('/api/contact', contactRoutes);   // Rutas de contacto

export default app;