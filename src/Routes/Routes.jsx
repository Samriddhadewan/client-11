import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NeedVolunteer from "../Pages/NeedVolunteer";
import PrivateRoute from "./PrivateRoute";
import AllVolunteerPost from "../Pages/AllVolunteerPost";
import PostDetail from "../Pages/PostDetail";
import ApplyCampaign from "../Pages/ApplyCampaign";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allVolunteerPost",
        element: <AllVolunteerPost></AllVolunteerPost>,
      },
      {
        path: "/needVolunteer",
        element: (
          <PrivateRoute>
            <NeedVolunteer></NeedVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/job/:id",
        element: <PrivateRoute> <PostDetail></PostDetail> </PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: <PrivateRoute> <ApplyCampaign></ApplyCampaign> </PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`),
      },
    ],
  },
]);

export default router;
