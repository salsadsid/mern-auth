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

exports.acceptFriendRequestService=async(id,request)=>{
    const result= await Friend.updateOne({'user.id':id},{$push:{'friends':{email:request.email,id:request.id,name:request.name}}})
    // if(result){
    //     const result2=await Friend.updateOne({'user.id':id},{$pull:{'requests.email':request.email}})
    //     console.log(result2,asa);
    // }
    return result;
}


exports.removeRequestService=async(id,request)=>{
    console.log(request,"");
    const result2=await Friend.updateOne({'user.id':id},{$pull:{requests:{email:request.email}}})
    return result2
}