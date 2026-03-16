const db = require('../config/db');

const createTweet = async (userId, content) => {
    const query = `
        INSERT INTO tweets (user_id, content)
        VALUES ($1, $2)
        RETURNING id, user_id, content, created_at;
    `;
    const values = [userId, content];
    const { rows } = await db.query(query, values);
    return rows[0];
};

const getGlobalFeed = async () => {
    // Unimos los tweets con los usuarios para tener el username de quien lo publicó
    const query = `
        SELECT t.id, t.content, t.created_at, u.username, u.id as user_id
        FROM tweets t
        JOIN users u ON t.user_id = u.id
        ORDER BY t.created_at DESC
        LIMIT 50;
    `;
    const { rows } = await db.query(query);
    return rows;
};

module.exports = {
    createTweet,
    getGlobalFeed
};