import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import Login from "../pages/Main/Login";
import SignUp from "../pages/Main/SignUp";
import Profile from "../pages/Main/Profile";
import EditProfile from "../pages/Main/EditProfile";
import RequireAuth from "../utils/RequireAuth";
import DashboardLayout from "../layout/Dashboard/DashboadLayout";
import PersistLogin from "../pages/Main/PersistLogin";
import AddFriends from "../pages/Main/AddFriends";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signup",
                element:<SignUp/>
            },
            {
                path:"profile",
                element:<RequireAuth><Profile/></RequireAuth>
            },
            {
                path:"update",
                element:<EditProfile/>
            },
            {
                path:"add-friend",
                element:<PersistLogin>
                    <AddFriends></AddFriends>
                </PersistLogin>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PersistLogin><DashboardLayout></DashboardLayout></PersistLogin> ,
        children:[
            {
                path:"/dashboard",
                element:<button className="btn">dasd</button>
            }
        ]
    }
])

export default routes;