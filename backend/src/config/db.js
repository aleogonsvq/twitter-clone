// src/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

// Usamos el Pool de conexiones para manejar múltiples peticiones concurrentes
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Si usas una BD local, puedes comentar la línea de ssl. 
    // Para servicios en la nube (Neon, Supabase), el ssl suele ser obligatorio.
    ssl: process.env.DATABASE_URL.includes('sslmode=require') ? { rejectUnauthorized: false } : false
});

// Probamos la conexión
pool.connect()
    .then(() => console.log('✅ Conectado a PostgreSQL con éxito'))
    .catch((err) => console.error('❌ Error al conectar con PostgreSQL:', err.message));

module.exports = {
    query: (text, params) => pool.query(text, params),
};