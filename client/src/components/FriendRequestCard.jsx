import React from 'react';
import useAuth from '../hooks/useAuth';
import { useUserDetailsQuery } from '../features/auth/authApi';
import { useAcceptFriendRequestMutation } from '../features/friend/friendApi';

const FriendRequestCard = ({request}) => {
  const { email, role } = useAuth();
  const {data:userInfo,isLoading}=useUserDetailsQuery(email)
  const [handleRequestAccept]=useAcceptFriendRequestMutation()
    const {id}=request

    const handleAcceptFriendRequest=(data)=>{
      const friendData={
        userId:userInfo._id,
        name:request.id.name,
        email:request.id.email,
        id:request.id._id,
      }
      console.log(friendData);
      const res=  handleRequestAccept(friendData);
      console.log(res);
    }
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