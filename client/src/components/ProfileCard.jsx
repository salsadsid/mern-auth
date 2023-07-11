import { Link } from "react-router-dom";

const ProfileCard = ({userInfo}) => {
  const {name,role,aboutMe,skills,hobbies} =userInfo
  return (
    <div className="max-w-3xl md:m-2 w-full border-2 m-3 px-8 py-4">
      <div className="mb-6">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {role}
        </span>
      </div>
      <div className="flex flex-col mb-6 justify-between">
        <h3 className=" text-xl font-medium text-gray-900 dark:text-white">
          General Information
        </h3>
        <p className="my-2 text-lg font-normal text-gray-900 dark:text-white">
          About Me
        </p>
        <p className=" text-md font-normal text-gray-900 dark:text-white">
          {aboutMe}
        </p>
      </div>
      <div className="mb-6">
        <p className="mb-3 text-lg font-normal text-gray-900 dark:text-white">
          Skills
        </p>
        <div>
          {
            skills?.map(skill=><span key={skill} className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {skill}
          </span>)
          }
        </div>
      </div>
      <div className="mb-6">
        <p className="mb-3 text-lg font-normal text-gray-900 dark:text-white">
          Hobbies
        </p>
        <div className="">
        {
            hobbies?.map(hobbie=><span key={hobbie} className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {hobbie}
          </span>)
          }
         
        </div>
      </div>
      <div>
        <Link
          to="/update"
          className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-800 hover:bg-sky-600 active:bg-sky-700 duration-150 rounded-full md:inline-flex"
        >
          Edit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
