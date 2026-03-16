const tweetService = require('../services/tweetService');

const create = async (req, res) => {
    try {
        // req.user.id viene gracias a nuestro middleware verifyToken
        const userId = req.user.id; 
        const { content } = req.body;

        const tweet = await tweetService.createTweet(userId, content);

        res.status(201).json({
            message: 'Tweet publicado con éxito',
            data: tweet
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFeed = async (req, res) => {
    try {
        const tweets = await tweetService.getFeed();
        res.status(200).json({ data: tweets });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno al obtener el feed' });
    }
};

module.exports = {
    create,
    getFeed
};