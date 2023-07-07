const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controllers');


router.route("/signup").post(userController.signup);

module.exports = router;