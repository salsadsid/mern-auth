import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import Login from "../pages/Main/Login";
import SignUp from "../pages/Main/SignUp";


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
            }
        ]
    }
])

export default routes;