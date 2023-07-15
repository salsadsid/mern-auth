import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/auth/authSlice";

const SignUp = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors },
    reset,
  } = useForm();
  const [eye,setEye]=useState({field:"",value:""})

  const [registerUser, { isLoading }] = useRegisterMutation();
 
  const handleSignUp = async (data) => {
    setEye({...eye,field:"",value:""});
    const res = await registerUser({ ...data, confirmPassword: undefined });
    console.log(res)
    if(res?.error){
      if(res.error.data.error.keyValue.username){
        setFocus("username");
        setEye({...eye,field:"username",value:res.error.data.error.keyValue.username})
      }
      if(res.error.data.error.keyValue.email){
        setFocus("email");
        setEye({...eye,field:"email",value:res.error.data.error.keyValue.email})
      }
      
    }
    // reset();
  };
  return (
    <main className="w-full flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-5">
            <div>
              <label className="font-medium">Username</label>
              <input
                type="text"
                name="username"
                onKeyUp={()=>setEye({...eye,field:"",value:""})}
                {...register("username", {
                  required: true,
                  validate: {
                    minLength: (v) => v.length > 5,
                  },
                })}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${eye.field=== "username" ||errors.username?.type === "required" || errors.username?.type === "minLength"? "focus:border-red-500": "focus:border-indigo-600"} shadow-sm rounded-lg`}
              />
              {errors.username?.type === "required" && (
                <small className="text-orange-700">Username is required</small>
              )}

              { eye.field=== "username" && (
                <small className="text-orange-700">Username already exists! Try : {eye.value + Math.floor(Math.random()*1000) + ", "+ eye.value + Math.floor(Math.random()*1000)}</small>
              )}

              {errors.username?.type === "minLength" && (
                <small className="text-orange-700">
                  The username should have at least 6 characters
                </small>
              )}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                onKeyUp={()=>setEye({...eye,field:"",value:""})}
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${eye.field=== "email" ||errors.email?.message? "focus:border-red-500": "focus:border-indigo-600"} shadow-sm rounded-lg`}
              />
              {errors.email?.message && (
                <small className="text-orange-700">
                  {errors.email.message}
                </small>
              )}
               { eye.field=== "email" && (
                <small className="text-orange-700">{eye.value} already have an account.</small>
              )}

            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    minLength: (v) =>
                      v.length > 5 || "Password must have 6 characters",
                    matchPattern: (v) =>
                      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(v) ||
                      "Password must have at least 1 letter and number.",
                  },
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.password?.message && (
                <small className="text-orange-700">
                  {errors.password.message}
                </small>
              )}
            </div>
            <div>
              <label className="font-medium">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Password is required",
                  validate: {
                    match: (v) =>
                      watch("password") === v || "Password doesn't match.",
                  },
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.confirmPassword?.message && (
                <small className="text-orange-700">
                  {errors.confirmPassword.message}
                </small>
              )}
              {/* // {password!==confirmPassword && <small className="text-orange-700">Password does not match.</small>} */}
            </div>
            <button
              className={`w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600  rounded-lg duration-150`}
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
