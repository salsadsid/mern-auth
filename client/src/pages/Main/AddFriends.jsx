import React from 'react';
import AddFriendCard from '../../components/AddFriendCard';
import { useAllFriendQuery } from '../../features/friend/friendApi';

const AddFriends = () => {
    const {data}=useAllFriendQuery()
    
    // console.log(data.data);
    return (
        <section className="w-full md:flex-row flex flex-col items-center justify-center">
           <div className="max-w-3xl md:m-2 w-full border-2 m-3 px-8 py-4">
           <h3 className="text-center my-6 text-2xl font-medium text-gray-900 dark:text-white">
       Find your friends
      </h3>
        {
            data?.data.map(friend=><AddFriendCard key={friend._id} friend={friend}></AddFriendCard>)
        }
            </div>  
        </section>
    );
};

export default AddFriends;