const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controllers');
const authMiddleware = require('../middlewares/auth-Middleware');``
const adminMiddleware = require('../middlewares/admin-middlewares');


router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route('/contacts').get(adminController.getAllContact);
router.route('/reviews').get(adminController.getAllReview);

module.exports = router;
