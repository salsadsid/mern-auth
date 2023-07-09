import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const [loginUser,{isLoading}]=useLoginMutation()
  const handleLogin =async (data) => {
    try {
      const res = await loginUser(data)
      // dispatch(setCredentials({ ...res }));
      navigate('/');
      console.log(res)
    } catch (err) {
      // toast.error(err?.data?.message || err.error);
      console.log(err)
    }
  };
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Dont have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-5">
        <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.email?.message && <small className="text-orange-700">{errors.email.message}</small>}
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                {...register("password",{
                  required:"Password is required",
                  validate:{
                    minLength: (v) => v.length > 5 || "Password must have 6 characters",
                    matchPattern:(v)=>/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(v) ||
                    "Password must have at least 1 letter and number."
                  }
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.password?.message && <small className="text-orange-700">{errors.password.message}</small>}
            </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign in
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-indigo-600">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
