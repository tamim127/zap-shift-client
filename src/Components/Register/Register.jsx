import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, signInGoogle } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (data) => {
    console.log("register", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });

  
  }

    const handleLoginWithGoogle = () => {
      signInGoogle()
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  
    return (
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-white border-b border-gray-100 px-8 py-10 text-center">
                <h1 className="text-4xl font-bold text-gray-900">
                  Create Account
                </h1>
                <p className="text-gray-600 mt-2">Register With ZapShift</p>
              </div>

              {/* Form Body */}
              <div className="p-8 space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-20 focus:border-indigo-500 transition"
                  />
                  {errors.name && (
                    <p className="text-red-500">Name is required.</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-20 focus:border-indigo-500 transition"
                  />
                  {errors.email && (
                    <p className="text-red-500">Email is required.</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                      })}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-20 focus:border-indigo-500 transition pr-12"
                    />

                    {/* Toggle Button */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible size={22} />
                      ) : (
                        <AiOutlineEye size={22} />
                      )}
                    </button>

                    {errors.password?.type === "required" && (
                      <p className="text-red-500">Password is required.</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-500">
                        Password must be 6 characters or longer
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-500">
                        Must contain uppercase, lowercase, number & special char
                      </p>
                    )}
                  </div>
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-700 transition shadow-md"
                >
                  Register
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                {/* Google Login */}
                <button
                  type="button"
                  onClick={handleLoginWithGoogle}
                  className="w-full border border-gray-300 text-gray-700 font-medium py-3.5 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
export default Register;
