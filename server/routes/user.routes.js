const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controllers');
const verifyToken = require('../middleware/verifyToken');
const uploader = require("../middleware/uploader");

router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);
router.route('/auth').get(userController.persistAuth)
router.route('/logout').post(userController.logOut)
router.route('/update').patch(uploader.single("image"),userController.updateProfile)
router.route("/:email").get(userController.userDetails);
module.exports = router;