import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import { useSendLogOutMutation } from "../../features/auth/authApi";
import BeatLoader from "react-spinners/BeatLoader";

const Nav = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()
    const [handleLogOut, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogOutMutation()
    const handleLogOutClick= async()=>{
        const res= await handleLogOut()
        console.log(res)
    } 
    
    useEffect(() => {
        if (isSuccess) navigate('/')
        if(isLoading){
          return <div className="h-80 flex items-center justify-center">
              <BeatLoader color="#2563EB" />
            </div>
        }
    }, [isSuccess, navigate,isLoading])
  const { email, role } = useAuth();
  
  const navigation = [
    
    { title: "Customers", path: "javascript:void(0)" },
    { title: "My Profile", path: "/profile" },
  ];
  
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 lg:block">
      {location.pathname?.includes("dashboard") && <label
            htmlFor="my-drawer-2"
            className="menu-btn hover:cursor-pointer text-gray-400 hover:text-gray-300 drawer-button mr-8 lg:hidden"
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>}
      <Link to="/">
        <img src={img} width={120} height={40} alt="MERN Auth logo" />
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-400 hover:text-gray-300"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <header className=" bg-gray-900 sticky top-0 z-50 transition-all duration-1000">
      <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
      
        <Brand />
      </div>
      <nav
        className={` md:text-sm ${
          state
            ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
            : ""
        }`}
      >
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        
          <Brand />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {/* {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-300 hover:text-gray-400">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })} */}
              <li className="text-gray-300 hover:text-gray-400"> <Link to="/dashboard">Dashboard</Link></li>
              {email ? (
                  <>
                
                <li>
                    <Link
                      to="/profile"
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
                    >
                      My Profile
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
                  </li>
                  <li>
                  <button
                    onClick={handleLogOutClick}
                    className="flex w-full items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg md:inline-flex"
                  >
                    Log Out
                  </button>
                </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="login"
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg md:inline-flex"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="signup"
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
                    >
                      Sign Up
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
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
