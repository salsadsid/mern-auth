import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useUserDetailsQuery } from '../../features/auth/authApi';
import { useAllFriendRequestQuery } from '../../features/friend/friendApi';
import FriendRequestCard from '../../components/FriendRequestCard';

const FriendRequests = () => {
    const { email, role } = useAuth();
   
    const {data}= useAllFriendRequestQuery(email);
    // console.log(data.data.requests);
    return (
        <section className="w-full md:flex-row flex flex-col items-center justify-center">
           <div className="max-w-3xl md:m-2 w-full border-2 m-3 px-8 py-4">
           <h3 className="text-center my-6 text-2xl font-medium text-gray-900 dark:text-white">
       Your friend
      </h3>
        {
            data?.data?.requests.map(request=><FriendRequestCard key={request._id} request={request}></FriendRequestCard>)
        }
            </div>  
        </section>
    );
};

export default FriendRequests;