import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useUserDetailsQuery } from '../features/auth/authApi';
import { useAcceptFriendRequestMutation } from '../features/friend/friendApi';
import toast from 'react-hot-toast';

const FriendRequestCard = ({request}) => {
  const { email, role } = useAuth();
  const {data:userInfo,isLoading}=useUserDetailsQuery(email)
  const [handleRequestAccept,{status,isLoading:isLoading2,isError,isSuccess}]=useAcceptFriendRequestMutation()
    const {id}=request

    const handleAcceptFriendRequest=(data)=>{
      const friendData={
        userId:userInfo._id,
        name:request.id.name,
        email:request.id.email,
        id:request.id._id,
      }
      // console.log(friendData);
      handleRequestAccept(friendData);
      // console.log(res);
    }
    useEffect(()=>{
      if(isLoading2){
        toast.loading("Accepting friend request",{id:"accept"})
      }
      if(isSuccess){
        toast.success("Request accepted",{id:"accept"})
      }
      if(isError){
        toast.error("Fail to accept request",{id:"accept"})
      }
    },[status,isSuccess,isLoading2,isError])
    const base64String = btoa(
        String.fromCharCode(...new Uint8Array(id?.img?.data?.data))
      );
    return (
        <div className='flex justify-between items-center my-4'>
            <div className='flex justify-between items-center'>
            <img
          className="w-12 mb-3 rounded-full shadow-lg m-4"
          src={`data:image/png;base64,${base64String}`}
          alt="Bonnie image"
        />
            <h4>{id.name}</h4>
            </div>
           <button className='btn btn-accent normal-case'onClick={()=>handleAcceptFriendRequest(request)}>Accept Request</button>

       </div>
    );
};

export default FriendRequestCard;