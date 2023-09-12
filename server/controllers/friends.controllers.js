const { allFriendsService, addFriendRequestService, allFriendRequestService } = require("../services/friends.services");

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



exports.addFriendRequest=async(req,res,next)=>{
  try {
    console.log(req.body);
    const result= await addFriendRequestService(req.body.userId,{email:req.body.email,name:req.body.name,id:req.body.id});
    console.log(result,"sas");
  } catch (error) {
    
  }
}



exports.allFriendRequest=async(req,res,next)=>{
  try {
    const email= req.params.email;
    const result = await allFriendRequestService(email);
    res.status(200).json({
      status: "Success",
      data:result,
    });
  } catch (error) {
    
  }
}