const User = require("../models/user");

exports.allFriendsService=async()=>{
    return await User.find().select('name').select('email').select('img');
}