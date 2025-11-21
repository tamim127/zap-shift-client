import React from "react";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-white border-b border-gray-100 px-8 pt-10 ">
          <h1 className="text-4xl font-bold text-gray-900">Forgot Password</h1>
          <p className="text-gray-600 mt-2">
            Enter your email address and we’ll send you a reset link.{" "}
          </p>
        </div>
        {/* Form Body */}
        <div className="p-8 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-20 focus:border-indigo-500 transition"
            />
          </div>
          {/* Login Button */}
          <button className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-700 transition shadow-md">
            Sign In
          </button>
          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-3">
            Remember Your Password?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
