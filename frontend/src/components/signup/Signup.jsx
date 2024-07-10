// import React from 'react'
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import photo from "../../assets/login_image.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match.");
    } else {
      toast.success("Account created successfully");
      navigate("/login");
    }
  }

  return (
    <div className="overflow-hidden flex justify-center">
      <div className="flex items-center flex-col max-w-[80vw] mb-[4vw]">
        <h1 className="mt-[4vw] mb-[2vw] text-white font-bold text-4xl text-center">
          Join [Platform Name] Today
        </h1>
        <p className="mb-[2vw] text-white text-center">
          Create your account and embark on a journey of seamless communication,
          collaboration, and academic success. Connect with faculty, track your
          progress, and access all the resources you need to thrive. Sign up now
          to get started!
        </p>
        <p className="mb-[2vw] text-white text-center">
          Already have an Account??
          <span className="text-blue-400 hover:text-blue-500">
            <Link to={"/login"}> Login</Link>
          </span>
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-x-[16vw]">
          <form
            onSubmit={submitHandler}
            className="w-full sm:w-[32vw] flex flex-col gap-y-4 mt-6"
          >
            <label>
              <p className="text-base text-white mb-[1vw] leading-5">
                Name<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                value={formData.name}
                onChange={changeHandler}
                placeholder="Name"
                name="name"
                className="rounded-xl text-white w-full p-[1vw]"
              />
            </label>
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
                Create Password<sup className="text-pink-200">*</sup>
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
            </label>
            <label className="relative">
              <p className="text-base text-white mb-[1vw] leading-5">
                Confirm Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder="********"
                name="confirmPassword"
                className="rounded-xl text-white w-full p-[1vw]"
              />
              <span
                className="absolute right-4 text-white top-11 scale-125 opacity-50"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <GoEye /> : <GoEyeClosed />}
              </span>
            </label>
            <input
              type="submit"
              value="Create Account"
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

export default Signup;
