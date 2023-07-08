import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { usePersistAuthQuery } from "./features/auth/authApi";

function App() {
  console.log(localStorage.getItem("accessToken"))
    const {data,error}= usePersistAuthQuery(localStorage.getItem("accessToken"))
  console.log(data,error)
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
