import React from 'react';
import { useAddFriendRequestMutation } from '../features/friend/friendApi';
import useAuth from '../hooks/useAuth';
import { useUserDetailsQuery } from '../features/auth/authApi';

const AddFriendCard = ({friend}) => {
    // console.log(friend);
    const { email, role } = useAuth();
    const {data:userInfo,isLoading}=useUserDetailsQuery(email)
    const [handleRequest]=useAddFriendRequestMutation()
    const handleFriendRequest=(data)=>{
      const friendData={
        userId:friend._id,
        name:userInfo.name,
        email:userInfo.email,
        id:userInfo._id,
      }
      console.log(friendData);
      const res=  handleRequest(friendData);
      console.log(res);
    }
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