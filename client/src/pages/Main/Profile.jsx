import { useUserDetailsQuery } from "../../features/auth/authApi";
import useAuth from "../../hooks/useAuth";


const Profile = () => {
    const { email, role } = useAuth();
    const {data,isLoading}=useUserDetailsQuery(email);
    console.log(data)
    return (
        <section className="w-full flex items-center justify-center">
            <div className="max-w-sm w-full bg-slate-400 m-3">
                Username: {data && data?.username}
            </div>
            <div className="max-w-sm bg-slate-400 m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia odit omnis ad similique provident architecto odio et, exercitationem doloribus neque voluptatibus maxime earum praesentium sunt esse corporis dolores nemo.</div>
        </section>
    );
};

export default Profile;