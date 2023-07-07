import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
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
              <a
                href="javascript:void(0)"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            <div>
              <label className="font-medium">Username</label>
              <input
                type="text"
                name="username"
                {...register("username", {
                  required: true,
                  validate: {
                    minLength: (v) => v.length > 5,
                  },
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.username?.type === "required" && (
                <small className="text-orange-700">Username is required</small>
              )}

              {errors.username?.type === "minLength" && (
                <small className="text-orange-700">The username should have at least 6 characters</small>
              )}
            </div>
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
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
