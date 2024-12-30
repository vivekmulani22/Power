const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controllers');
const { validate, loginValidate } = require('../middlewares/validate-middlewares');    
const { signupSchema, loginSchema } = require('../validators/auth-validators');
const authMiddleware = require('../middlewares/auth-Middleware');


router.route('/').get(authController.home);

router.route('/register').post(validate(signupSchema), authController.register);

router.route('/login').post(loginValidate(loginSchema), authController.login);

router.route('/user').get(authMiddleware, authController.user);


module.exports = router;