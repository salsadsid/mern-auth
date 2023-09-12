const express = require('express');

const router = express.Router()
const friendsController = require('../controllers/friends.controllers');


router.route("/all-friend").get(friendsController.allFriends);
router.route("/add-friend").patch(friendsController.addFriendRequest);
router.route("/accept-request").patch(friendsController.acceptFriendRequest);
router.route("/all-requests/:email").get(friendsController.allFriendRequest);

module.exports= router;