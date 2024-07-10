// import React from 'react'
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import photo from "../../assets/login_image.png";

// eslint-disable-next-line react/prop-types
function Login({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in successfully");
    navigate("/dashboard");
  }

  return (
    <div className="overflow-hidden flex justify-center">
      <div className="max-w-[80vw] flex items-center flex-col mb-[4vw] ">
        <h1 className="mt-[8vw] mb-[2vw] text-white font-bold text-4xl text-center">
          Unlock Your Learning Potential with [Platform Name]
        </h1>
        <p className="mb-[2vw] text-white text-center">
          Welcome Back to [Platform Name], your gateway to seamless
          communication and collaboration. Log in to stay connected with
          faculty, track your academic progress, and access all the resources
          you need for success.
        </p>
        <p className="mb-[2vw] text-white text-center">
          New to our platform??
          <span className="text-blue-400 hover:text-blue-500">
            <Link to={"/signup"}> Create an Account</Link>
          </span>
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-x-[16vw]">
          <form
            onSubmit={submitHandler}
            className="w-full sm:w-[32vw] flex flex-col gap-y-4 mt-6"
          >
            <label>
              <p className="text-base text-white mb-[1vw] leading-5">
                Email Address<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Email"
                name="email"
                className="rounded-xl text-white w-full p-[1vw]"
              />
            </label>
            <label className="relative">
              <p className="text-base text-white mb-[1vw] leading-5">
                Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={changeHandler}
                placeholder="********"
                name="password"
                className="rounded-xl text-white w-full p-[1vw]"
              />
              <span
                className="absolute right-4 text-white top-11 scale-125 opacity-50"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <GoEye /> : <GoEyeClosed />}
              </span>
              <Link to="#">
                <p className="text-blue-400 hover:text-blue-500 text-xs mt-1 max-w-max ml-auto">
                  Forgot Password
                </p>
              </Link>
            </label>
            <input
              type="submit"
              value="Sign In"
              className="btn mt-[1vw] mb-[4vw] bg-orange-500 hover:bg-orange-400 text-black font-semibold"
            />
          </form>
          <div className="flex justify-center items-center">
            <img className="w-[60vw]  sm:w-[32vw]" src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
