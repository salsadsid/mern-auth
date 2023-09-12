import React from 'react';

const MyFriendCard = ({friend}) => {
    const {id}=friend
    const base64String = btoa(
        String.fromCharCode(...new Uint8Array(id?.img?.data?.data))
      );
    return (
        <div className='flex justify-center items-center my-4'>
        <div className='flex w-1/4 justify-between items-center'>
        <img
      className="w-12 mb-3 rounded-full shadow-lg m-4"
      src={`data:image/png;base64,${base64String}`}
      alt="Bonnie image"
    />
        <h4>{id.name}</h4>
        </div> 
    
   </div>
    );
};

export default MyFriendCard;