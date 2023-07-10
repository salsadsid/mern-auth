import { useForm } from "react-hook-form";

const EditProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div>
      <h3 className="text-center my-6 text-2xl font-medium text-gray-900 dark:text-white">
        Update Profile
      </h3>
      <div className="flex justify-center items-center h-full ">
        <form className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl md:justify-between justify-center bg-white">
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2 font-medium" htmlFor="model">
              Name
            </label>
            <input type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" {...register("model")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="image">
              Email
            </label>
            <input type="text" name="image" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" {...register("image")} />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="brand">
              Brand
            </label>
            <select name="brand" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" {...register("brand")}>
              <option value="amd">AMD</option>
              <option value="intel">Intel</option>
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="price">
              Image
            </label>
            <input type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" name="price" id="price" {...register("price")} />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <h1 className="mb-3">Availability</h1>
            <div className="flex gap-3">
              <div>
                <input
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  type="radio"
                  id="available"
                  value={true}
                  {...register("status")}
                />
                <label className="ml-2 text-lg" htmlFor="available">
                  Available
                </label>
              </div>
              <div>
                <input 
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  type="radio"
                  id="stockOut"
                  name="status"
                  value={false}
                  {...register("status")}
                />
                <label className="ml-2 text-lg" htmlFor="stockOut">
                  Stock out
                </label>
              </div>
            </div>
          </div>

          <p className="my-2 w-full max-w-xs md:max-w-md text-lg font-bold text-gray-900 dark:text-white">
            Skills
          </p>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature1">
              Skill Set #1
            </label>
            <input
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature1"
              id="keyFeature1"
              {...register("keyFeature1")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature2">
              Skill Set #4
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature2"
              id="keyFeature2"
              {...register("keyFeature2")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature3">
              Skill Set #3
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature3"
              id="keyFeature3"
              {...register("keyFeature3")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature4">
              Skill Set #4
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature4"
              id="keyFeature4"
              {...register("keyFeature4")}
            />
          </div>

          <p className="my-2 text-lg w-full max-w-xs md:max-w-md font-bold text-gray-900 dark:text-white">
            Hobbies
          </p>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature1">
              Hobbies 1
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature1"
              id="keyFeature1"
              {...register("keyFeature1")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature2">
              Hoobies 12
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature2"
              id="keyFeature2"
              {...register("keyFeature2")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature3">
              Skill Set #3
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature3"
              id="keyFeature3"
              {...register("keyFeature3")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="keyFeature4">
              Skill Set #4
            </label>
            <input
             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              type="text"
              name="keyFeature4"
              id="keyFeature4"
              {...register("keyFeature4")}
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
