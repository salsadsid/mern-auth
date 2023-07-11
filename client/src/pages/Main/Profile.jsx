import ProfileCard from "../../components/ProfileCard";
import { useUserDetailsQuery } from "../../features/auth/authApi";
import useAuth from "../../hooks/useAuth";


const Profile = () => {
    const { email, role } = useAuth();
    const {data:userInfo,isLoading}=useUserDetailsQuery(email);
    console.log(userInfo)
    return (
        <section className="w-full md:flex-row flex flex-col items-center justify-center">
            <ProfileCard userInfo={userInfo}/>

        </section>
    );
};

export default Profile;