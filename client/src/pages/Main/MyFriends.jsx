import React from 'react';
import { useAllMyFriendsQuery } from '../../features/friend/friendApi';
import useAuth from '../../hooks/useAuth';
import MyFriendCard from '../../components/MyFriendCard';

const MyFriends = () => {
    const { email, role } = useAuth();
   
    const {data}= useAllMyFriendsQuery(email);
    console.log(data);
    return (
        <section className="w-full md:flex-row flex flex-col items-center justify-center">
           <div className="max-w-3xl md:m-2 w-full border-2 m-3 px-8 py-4">
           <h3 className="text-center my-6 text-2xl font-medium text-gray-900 dark:text-white">
       My friends
      </h3>
        {
            data?.data?.friends.map(friend=><MyFriendCard key={friend._id} friend={friend}></MyFriendCard>)
        }
            </div>  
        </section>
    );
};

export default MyFriends;