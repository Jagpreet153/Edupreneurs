// import React from 'react'
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
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
    toast.success("Logged in successfully");
    navigate("/dashboard");
  }

  return (
    <div className="overflow-hidden flex justify-center">
      <div className="max-w-[80vw] flex items-center flex-col">
        <h1 className="mt-[8vw] mb-[2vw] text-white font-bold text-4xl text-center">
          {" "}
          Unlock Your Learning Potential with [Platform Name]{" "}
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
        <form onSubmit={submitHandler}>
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
              Password<sup>*</sup>
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
            <Link to="#">
              <p className="text-blue-400 hover:text-blue-500">Forgot Password</p>
            </Link>
          </label>
          <input type="submit" value="Sign In" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default Login;
