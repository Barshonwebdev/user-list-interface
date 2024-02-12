// all routes 

import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import UserDetail from "../Components/UserDetail/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/details/:id",
    element: (<UserDetail></UserDetail>),
    //loader for individual user data loading
    loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
  },
]);

export default router;
