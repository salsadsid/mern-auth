import React from 'react';

const AddFriendCard = ({friend}) => {
    console.log(friend);
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
           <button className='btn btn-neutral normal-case'>Add Friend</button>

       </div>
    );
};

export default AddFriendCard;