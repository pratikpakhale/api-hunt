const router = require('express').Router();

const authController = require('../controllers/auth');

const middleware = require('../middlewares/auth');

router.post('/signin', authController.signin);

router.post('/join', middleware.validateToken, authController.joinTeam);

module.exports = router;
