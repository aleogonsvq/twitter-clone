const db = require('../config/db');

const createUser = async (username, email, passwordHash) => {
    const query = `
        INSERT INTO users (username, email, password_hash)
        VALUES ($1, $2, $3)
        RETURNING id, username, email, bio, created_at;
    `;
    const values = [username, email, passwordHash];
    const { rows } = await db.query(query, values);
    return rows[0];
};

const findUserByEmailOrUsername = async (email, username) => {
    const query = `
        SELECT * FROM users
        WHERE email = $1 OR username = $2;
    `;
    const values = [email, username];
    const { rows } = await db.query(query, values);
    return rows[0];
};

module.exports = {
    createUser,
    findUserByEmailOrUsername
};