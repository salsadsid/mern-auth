import { useForm } from "react-hook-form";
import { useUpdateUserProfileMutation, useUserDetailsQuery } from "../../features/auth/authApi";
import useAuth from "../../hooks/useAuth";
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect, useMemo } from "react";

const EditProfile = () => {
  const { email, role } = useAuth();
  const {data:userInfo,isLoading,isSuccess,}=useUserDetailsQuery(email,{refetchOnMountOrArgChange:true});
  const { register, handleSubmit, reset } = useForm({defaultValues:useMemo(()=>{
    return {
      email:userInfo?.email,
      username:userInfo?.username,
      role:userInfo?.role,
      name:userInfo?.name,
      aboutMe:userInfo?.aboutMe
    }
  },[userInfo])});
  const [updateProfile,{isLoading:isLoading2,isSuccess:isSuccess2}]=useUpdateUserProfileMutation();
  useEffect(()=>{
    reset({
      email:userInfo?.email,
    username:userInfo?.username,
    role:userInfo?.role,
    name:userInfo?.name,
    aboutMe:userInfo?.aboutMe
    })
  },[isSuccess])
  console.log(userInfo)
  if(isLoading || isLoading2){
    return <BeatLoader color="#36d7b7" />
  }
  
  const submit=(data)=>{
    console.log(data);
    const res = updateProfile({
      ...userInfo,
      name:data.name,
      aboutMe:data.aboutMe,
      skills:[
        ...userInfo.skills,
        data.skill1,
        data.skill2,
        data.skill3,
        data.skill4,
      ],
      hobbies:[
        ...userInfo.hobbies,
        data.hobbies1,
        data.hobbies2,
        data.hobbies3,
        data.hobbies4,
      ]
    })

    console.log(res)
  }
  return (
    <div>
      <h3 className="text-center my-6 text-2xl font-medium text-gray-900 dark:text-white">
        Update Personal Profile
      </h3>
      <div className="flex justify-center items-center h-full ">
        <form className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl md:justify-between justify-center bg-white" onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" {...register("name")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="username">
              Username
            </label>
            <input readOnly disabled type="text" name="username" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg disabled:bg-gray-300" {...register("username")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="email">
              Email
            </label>
            <input readOnly disabled type="text" name="email" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg disabled:bg-gray-300" {...register("email")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="role">
              Role
            </label>
            <input readOnly disabled type="text" name="role" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg disabled:bg-gray-300" {...register("role")} />
          </div>

          
          <div className="flex flex-col w-full max-w-xs md:max-w-lg">
            <label className="mb-2 font-medium" htmlFor="aboutMe">
              About Me
            </label>
            <textarea type="text" className=" w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" name="price" id="price" {...register("aboutMe")} />
          </div>

          <p className="my-2 w-full max-w-xs md:max-w-md text-lg font-bold text-gray-900 dark:text-white">
            Skills
          </p>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="skill1">
              Skill Set #1
            </label>
            <input
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="skill1"
              id="skill1"
              {...register("skill1")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="skill2">
              Skill Set #2
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="skill2"
              id="skill2"
              {...register("skill2")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="skill3">
              Skill Set #3
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="skill3"
              id="skill3"
              {...register("skill3")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="skill4">
              Skill Set #4
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="skill4"
              id="skill4"
              {...register("skill4")}
            />
          </div>

          <p className="my-2 text-lg w-full max-w-xs md:max-w-md font-bold text-gray-900 dark:text-white">
            Hobbies
          </p>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="hobbies1">
              Hobbies #1
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="hobbies1"
              id="hobbies1"
              {...register("hobbies1")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="hobbies2">
              Hoobies #2
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="hobbies2"
              id="hobbies2"
              {...register("hobbies2")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="hobbies3">
              Hobbies #3
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="hobbies3"
              id="hobbies3"
              {...register("hobbies3")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="hobbies4">
              Hobbies #4
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="hobbies4"
              id="hobbies4"
              {...register("hobbies4")}
            />
          </div>

          <div className="flex w-full max-w-xs md:max-w-md justify-between items-center w-full">
            <button className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-800 hover:bg-sky-600 active:bg-sky-700 duration-150 rounded-lg md:inline-flex">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
