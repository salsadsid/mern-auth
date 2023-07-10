import ProfileCard from "../../components/ProfileCard";
import { useUserDetailsQuery } from "../../features/auth/authApi";
import useAuth from "../../hooks/useAuth";


const Profile = () => {
    const { email, role } = useAuth();
    const {data,isLoading}=useUserDetailsQuery(email);
    console.log(data)
    return (
        <section className="w-full md:flex-row flex flex-col items-center justify-center">
            <ProfileCard/>

        </section>
    );
};

export default Profile;