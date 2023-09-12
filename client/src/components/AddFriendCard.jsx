import React, { useEffect } from 'react';
import { useAddFriendRequestMutation } from '../features/friend/friendApi';
import useAuth from '../hooks/useAuth';
import { useUserDetailsQuery } from '../features/auth/authApi';
import toast from 'react-hot-toast';

const AddFriendCard = ({friend}) => {
    // console.log(friend);
    const { email, role } = useAuth();
    const {data:userInfo,isLoading}=useUserDetailsQuery(email)
    const [handleRequest,{status,isSuccess,isLoading:isLoading2,isError}]=useAddFriendRequestMutation()
    const handleFriendRequest=(data)=>{
      const friendData={
        userId:friend._id,
        name:userInfo.name,
        email:userInfo.email,
        id:userInfo._id,
      }
      // console.log(friendData);
      handleRequest(friendData);
      // console.log(status);
      // console.log(isSuccess);
    }
    useEffect(()=>{
      if(isLoading2){
        toast.loading("Sending Friend Request",{id:"request"})
      }
      if(isSuccess){
        toast.success("Request Sended Successfully",{id:"request"})
      }
      if(isError){
        toast.error("Request Not Sended",{id:"request"})
      }
    },[status,isSuccess,isLoading2,isError])
    const base64String = btoa(
        String.fromCharCode(...new Uint8Array(friend?.img?.data?.data))
      );
    return (
       <div className='flex justify-between items-center my-4'>
            <div className='flex justify-between items-center'>
            <img
          className="w-12 mb-3 rounded-full shadow-lg m-4"
          src={`data:image/png;base64,${base64String}`}
          alt="Bonnie image"
        />
            <h4>{friend?.name}</h4>
            </div>
           <button className='btn btn-neutral normal-case'onClick={()=>handleFriendRequest(friend)}>Add Friend</button>

       </div>
    );
};

export default AddFriendCard;