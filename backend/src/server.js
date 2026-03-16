require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Permite leer JSON en el body de las peticiones (req.body)

// Endpoint de prueba (Health check)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Servidor clon de Twitter funcionando 🚀' });
});

// Aquí irán las rutas principales más adelante
// Importar rutas
const authRoutes = require('./routes/authRoutes'); //
const tweetRoutes = require('./routes/tweetRoutes');

app.use('/api/auth', authRoutes); // <-- Añade esto
app.use('/api/tweets', tweetRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/tweets', tweetRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});