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
import PrivateRoutes from "../Routes/PrivateRoutes";
import BeARider from "../Pages/Be a Rider/BeARider";
import SendParcel from "../Pages/SendPercel/SendPercel";
import MyParcel from "../Pages/DashBoard/MyParcel/MyParcels";
import DashboardLayout from "../Layouts/DashboardLayout";

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
        element: <Services />,
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
      {
        path: "/rider",
        element: (
          <PrivateRoutes>
            <BeARider />
          </PrivateRoutes>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("/public/data/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "my-parcel",
        Component: MyParcel,
      },
    ],
  },
]);
