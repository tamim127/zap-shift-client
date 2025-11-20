import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
      },
      // {
      //     path: "/services",
      //     element:<Services/> ,
      // },
      // {
      //     path: "/about",
      //     element:<About/> ,
      // },
      // {
      //     path: "/pricing",
      //     element:<Pricing/> ,
      // },
      // {
      //     path: "/rider",
      //     element:<Rider/> ,
      // },
      // {
      //     path: "/login",
      //     element:<Login/> ,
      // },
      // {
      //     path: "/register",
      //     element: <Register/>,
      // },
    ],
  },
]);
