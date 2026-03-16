const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // 1. Obtenemos la cabecera de autorización
    const authHeader = req.headers.authorization;

    // 2. Comprobamos si existe y si tiene el formato correcto "Bearer <token>"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado o formato inválido.' });
    }

    // 3. Extraemos solo el token (quitamos la palabra "Bearer ")
    const token = authHeader.split(' ')[1];

    try {
        // 4. Verificamos el token con nuestro secreto
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // 5. Inyectamos los datos del usuario (id, username) en la request
        // Así los controladores sabrán quién está haciendo la petición
        req.user = decoded;

        // 6. Pasamos al siguiente middleware o controlador
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido o expirado.' });
    }
};

module.exports = verifyToken;