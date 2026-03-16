const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const registerUser = async (userData) => {
    const { username, email, password } = userData;

    // 1. Verificar si el usuario ya existe
    const existingUser = await userModel.findUserByEmailOrUsername(email, username);
    if (existingUser) {
        throw new Error('El nombre de usuario o email ya está en uso');
    }

    // 2. Encriptar la contraseña (hash)
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // 3. Crear el usuario en la base de datos
    const newUser = await userModel.createUser(username, email, passwordHash);

    // 4. Generar el Token JWT
    const token = jwt.sign(
        { id: newUser.id, username: newUser.username },
        process.env.JWT_SECRET,
        { expiresIn: '7d' } // El token expira en 7 días
    );

    return { user: newUser, token };
};

const loginUser = async (credentials) => {
    const { email, password } = credentials;

    // 1. Buscamos al usuario (usamos la función que ya teníamos en el modelo)
    const user = await userModel.findUserByEmailOrUsername(email, email);
    
    // Si no existe, lanzamos error
    if (!user) {
        throw new Error('Credenciales inválidas');
    }

    // 2. Comparamos la contraseña en texto plano con el hash de la base de datos
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    
    if (!isValidPassword) {
        throw new Error('Credenciales inválidas');
    }

    // 3. Generamos el Token JWT igual que en el registro
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    // 4. Quitamos el password_hash antes de devolver los datos por seguridad
    const { password_hash, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
};

module.exports = {
    registerUser,
    loginUser
};