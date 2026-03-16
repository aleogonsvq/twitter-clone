const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validación muy básica (luego podemos añadir middlewares de validación)
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        // Llamamos al servicio
        const result = await authService.registerUser({ username, email, password });

        // Devolvemos el usuario y el token
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            data: result
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email y contraseña son obligatorios' });
        }

        const result = await authService.loginUser({ email, password });

        res.status(200).json({
            message: 'Login exitoso',
            data: result
        });
    } catch (error) {
        // Usamos 401 (Unauthorized) para errores de login
        res.status(401).json({ error: error.message });
    }
};

module.exports = {
    register,
    login
};