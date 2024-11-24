// backend/middlewares/valideToken.js
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies; // Obtener el token desde las cookies

    // Si no se proporciona token
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    // Verificar el token usando el secreto
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
            // Si el token no es válido
            return res.status(403).json({ message: "Invalid token" });
        }

        // Si el token es válido, asignar el usuario al request
        req.user = user;

        // Continuar al siguiente middleware o controlador
        next();
    });
};
