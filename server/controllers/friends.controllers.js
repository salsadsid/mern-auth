const { allFriendsService } = require("../services/friends.services");

exports.allFriends=async(req,res,next)=>{
    try {
        
        const users = await allFriendsService();
       
        res.status(200).json({
          status: "Success",
          data:users,
        });
      } catch (error) {
        res.status(500).json({
          status: "Fail",
          error,
        });
      }
}