const express = require('express');

const router = express.Router()
const friendsController = require('../controllers/friends.controllers');


router.route("/all-friend").get(friendsController.allFriends);

module.exports= router;