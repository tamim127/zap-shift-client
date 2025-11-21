import React from "react";
import Logo from "../Components/Logo/Logo";
import authImg from "../assets/authImage.png";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-10">
        <Logo />
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authImg} alt="authImage" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
