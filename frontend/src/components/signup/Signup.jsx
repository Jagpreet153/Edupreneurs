// import React from 'react'
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    if(formData.password != formData.confirmPassword){
        toast.error("Passwords do not match.");
    }else{

        toast.success("Account created successfully");
        navigate("/login");
    }
  }

  return (
    <div className="overflow-hidden flex justify-center">
      <div className="max-w-[80vw] flex items-center flex-col">
        <h1 className="mt-[8vw] mb-[2vw] text-white font-bold text-4xl text-center">
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
        <form onSubmit={submitHandler}>
          <label>
            <p>
              Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.name}
              onChange={changeHandler}
              placeholder="Name"
              name="name"
            />
          </label>
          <label>
            <p>
              Email Address<sup>*</sup>
            </p>
            <input
              required
              type="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Email"
              name="email"
            />
          </label>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="********"
              name="password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <GoEyeClosed /> : <GoEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="********"
              name="confirmPassword"
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <GoEyeClosed /> : <GoEye />}
            </span>
          </label>
          <input type="submit" value="Create Account" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
