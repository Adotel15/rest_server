
const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth');
const { inputValidations } = require('../middleware/validation');

const authRouter = Router();

const postMiddleware = [
    check('mail', 'Mail required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    inputValidations
]

authRouter.post('/login', postMiddleware, login);

module.exports = authRouter;