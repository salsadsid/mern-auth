const Friend = require("../models/Friend");
const User = require("../models/user");

exports.allFriendsService=async()=>{
    return await User.find().select('name').select('email').select('img');
}

exports.addFriendRequestService=async(id,request)=>{
    return await Friend.updateOne({'user.id':id},{$push:{'requests':{email:request.email,id:request.id,name:request.name}}})
}


exports.allFriendRequestService=async(email)=>{
    return await Friend.findOne({'user.email':email}).populate('requests.id').select('requests.id')
}