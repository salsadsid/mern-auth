const Friend = require("../models/Friend");
const User = require("../models/user");

exports.allFriendsService=async()=>{
    return await User.find().select('name').select('email').select('img');
}

exports.addFriendRequestService=async(id,request)=>{
    const findFriend= await Friend.findOne({'user.id':id,'requests.email':request.email})
    // console.log(findFriend,"salman");
    if(findFriend){
        return; 
    }
    return await Friend.updateOne({'user.id':id},{$push:{'requests':{email:request.email,id:request.id,name:request.name}}})
}


exports.allFriendRequestService=async(email)=>{
    return await Friend.findOne({'user.email':email}).populate('requests.id').select('requests.id')
}

exports.acceptFriendRequestService=async(id,request)=>{
    const findFriend= await Friend.findOne({'user.id':id,'friends.email':request.email})
    if(findFriend){
        return; 
    }
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



exports.allMyFriendsService=async(email)=>{
    return await Friend.findOne({'user.email':email}).populate('friends.id').select('friends.id')
}