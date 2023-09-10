const router = require('express').Router();

const authController = require('../controllers/auth');

const { validateToken } = require('../middlewares/auth');

router.post('/signin', authController.signin);

router.post('/join', validateToken, authController.joinTeam);

module.exports = router;
