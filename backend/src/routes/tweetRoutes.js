const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const verifyToken = require('../middlewares/authMiddleware');

// Podemos aplicar el middleware a todo el router, ya que todas 
// las acciones con tweets requieren estar logueado.
router.use(verifyToken);

// POST /api/tweets/
router.post('/', tweetController.create);

// GET /api/tweets/feed
router.get('/feed', tweetController.getFeed);

module.exports = router;