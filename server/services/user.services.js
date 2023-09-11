const Friend = require("../models/Friend");
const User = require("../models/user");



exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo)
    return user;
}

exports.findUserByEmail = async (email) => {
    return await User.findOne({ email })
}
exports.findUserByToken = async (token) => {
    return await User.findOne({ confirmationToken: token })
}

exports.findAndUpdateUserProfile=async(userId,data)=>{
    const result = await User.updateOne({ _id: userId }, { $set: data }, { runValidators: true })

    return result
}

exports.createFriendModel=async(name,email,id)=>{
    return await Friend.create({user:{name:name,email:email,id:id}})
}