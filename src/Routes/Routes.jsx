import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <div>Home</div>
        }
    ]
  },
]);

export default router;
