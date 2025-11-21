import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";



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
          path: "/services",
          element:<Services/> ,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () =>
          fetch("/public/data/warehouses.json").then((res) => res.json()),
      },

      {
        path: "/about",
        element: <About />,
      },
      // {
      //     path: "/pricing",
      //     element:<Pricing/> ,
      // },
      // {
      //     path: "/rider",
      //     element:<Rider/> ,
      // },
      
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        Component:Login,
      },
      {
        path: "/register",
        Component:Register,
      },
      {
        path: "/forgot-password",
        Component:ForgotPassword,
      },
    ]
  }
]);
