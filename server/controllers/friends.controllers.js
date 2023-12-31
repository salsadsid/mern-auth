const { allFriendsService, addFriendRequestService, allFriendRequestService, acceptFriendRequestService, removeRequestService, allMyFriendsService } = require("../services/friends.services");

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
    // console.log(req.body);
    const result= await addFriendRequestService(req.body.userId,{email:req.body.email,name:req.body.name,id:req.body.id});
    // console.log(result,"sal");
    if(result.modifiedCount){
      res.status(200).json({
        status: "Success",
      });
    }
    if(result==undefined){
      res.status(200).json({
        status: "Request Not Sent!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error,
    });
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



exports.acceptFriendRequest=async(req,res,next)=>{
  try {
    // console.log(req.body);
    const result= await acceptFriendRequestService(req.body.userId,{email:req.body.email,name:req.body.name,id:req.body.id})
    
    if(result){
      const result2 = await removeRequestService(req.body.userId,{email:req.body.email,name:req.body.name,id:req.body.id})
      // console.log(result2);
    }
    if(result.modifiedCount){
      res.status(200).json({
        status: "Success",
      });
    }
    if(result==undefined){
      res.status(200).json({
        status: "Request Not Accepted!",
      });
    }
  } catch (error) {
    
  }
}



exports.allMyFriends=async(req,res,next)=>{
  try {
    const email= req.params.email;
    const result = await allMyFriendsService(email);
    res.status(200).json({
      status: "Success",
      data:result,
    });
  } catch (error) {
    
  }
}