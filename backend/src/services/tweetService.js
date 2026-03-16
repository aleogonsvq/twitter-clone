const tweetModel = require('../models/tweetModel');

const createTweet = async (userId, content) => {
    // Validaciones de negocio
    if (!content || content.trim().length === 0) {
        throw new Error('El tweet no puede estar vacío');
    }

    if (content.length > 280) {
        throw new Error('El tweet no puede superar los 280 caracteres');
    }

    // Si todo está bien, pasamos los datos al modelo
    return await tweetModel.createTweet(userId, content);
};

const getFeed = async () => {
    // Más adelante aquí filtraremos por los usuarios a los que sigues.
    // Por ahora, devolvemos el feed global.
    return await tweetModel.getGlobalFeed();
};

module.exports = {
    createTweet,
    getFeed
};