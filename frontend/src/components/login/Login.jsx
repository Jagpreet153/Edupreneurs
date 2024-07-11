// import React from 'react'
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import home_svg from "../../assets/home_svg.svg";
import axios from 'axios'
// eslint-disable-next-line react/prop-types
function Login({setIsLoggedIn}) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

   function submitHandler(event) {
     event.preventDefault();
    try {
       axios.post("http://localhost:3000/api/v2/checkUser",{email,password}) 
     .then(()=>{
      toast.success("Logged in successfully");
       navigate('/dashboard')
     })
     .catch(()=>{
     toast.error("Kindly check Email / Password");
    })
     }
 catch(err){
     console.log("error occured");
 }
  }

  return (
    <div className="overflow-hidden flex justify-center">
      <div className="max-w-[80vw] flex items-center flex-col mb-[4vw] ">
        <h1 className="mt-[8vw] mb-[2vw] text-black font-bold text-4xl text-center">
          Unlock Your Learning Potential with [Platform Name]
        </h1>
        <p className="mb-[2vw] text-black text-center">
          Welcome Back to [Platform Name], your gateway to seamless
          communication and collaboration. Log in to stay connected with
          faculty, track your academic progress, and access all the resources
          you need for success.
        </p>
        <p className="mb-[2vw] text-black text-center">
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
              <p className="text-base text-black mb-[1vw] leading-5">
                Email Address<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Email"
                name="email"
                className="input input-bordered input-warning w-full"
              />
            </label>
            <label className="relative">
              <p className="text-base text-black mb-[1vw] leading-5">
                Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="********"
                name="password"
                className="input input-bordered input-warning w-full"
              />
              <span
                className="absolute right-4 text-black top-11 scale-125 opacity-50"
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
            <button className="btn btn-warning text-white">Log In</button>
          </form>
          <div className="flex justify-center items-center">
            <img className="w-[60vw]  sm:w-[32vw]" src={home_svg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
