const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controllers');
const verifyToken = require('../middleware/verifyToken');


router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);
router.route('/auth').get(verifyToken, userController.persistAuth)
module.exports = router;