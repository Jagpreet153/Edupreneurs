// import React from 'react'
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import home_svg from '../../assets/home_svg.svg'
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Signup({setIsLoggedIn}) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }
  
    try {
      await axios.post("http://localhost:3000/api/v2/checkUser", { email , password });

      toast.error("Account already exists");
      return; 
    } catch (err) {

      if (err.response && err.response.status === 404) {

        try {
          const details = {
            name: name,
            email: email,
            password: password,
          };
          await axios.post("http://localhost:3000/api/v2/createUser", details);
          console.log("Successfully SignUp.");
          toast.success("Account created successfully");
          setIsLoggedIn(true);
          navigate('/login');
        } catch (createErr) {
          toast.error("Error occurred while creating account");
          console.error(createErr);
        }
      } else {

        toast.error("Account already exists");
        console.error(err);
      }
    }
  }

  return (
    <div className="overflow-hidden flex justify-center">
      <div className="flex items-center flex-col max-w-[80vw] mb-[4vw]">
        <h1 className="mt-[2vw] mb-[2vw]  font-bold text-4xl text-center">
          Join [Platform Name] Today
        </h1>
        <p className="mb-[2vw]  text-center text-black">
          Create your account and embark on a journey of seamless communication,
          collaboration, and academic success. Connect with faculty, track your
          progress, and access all the resources you need to thrive. Sign up now
          to get started!
        </p>
        <p className="mb-[2vw]  text-center text-black">
          Already have an Account??
          <span className="text-blue-400 hover:text-blue-500">
            <Link to={"/login"}> Login</Link>
          </span>
        </p>
        <div className="flex flex-col sm:flex-row w-full gap-x-[16vw] text-black">
          <form
            onSubmit={submitHandler}
            className="w-full sm:w-[32vw] flex flex-col gap-y-4 mt-6"
          >
            <label>
              <p className="text-base  mb-[1vw] leading-5">
                Name<sup className="text-red-400">*</sup>
              </p>
              <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Type here"
              className="input input-bordered input-warning w-full"
               />
            </label>
            <label>
              <p className="text-base  mb-[1vw] leading-5">
                Email Address<sup className="text-red-400">*</sup>
              </p>
              <input
                required
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                name="email"
                className="input input-bordered input-warning w-full"
              />
            </label>
            <label className="relative">
              <p className="text-base  mb-[1vw] leading-5">
                Create Password<sup className="text-red-400">*</sup>
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
                className="absolute right-4  top-12 scale-125 opacity-50"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <GoEye /> : <GoEyeClosed />}
              </span>
            </label>
            <label className="relative">
              <p className="text-base  mb-[1vw] leading-5">
                Confirm Password<sup className="text-red-400">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                placeholder="********"
                name="confirmPassword"
                className="input input-bordered input-warning w-full"
              />
              <span
                className="absolute right-4  top-12 scale-125 opacity-50"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <GoEye /> : <GoEyeClosed />}
              </span>
            </label>
            <button className="btn btn-warning text-white mt-2">Create account</button>
          </form>
          <div className="flex justify-center items-center">
            <img className="w-[60vw]  sm:w-[32vw]" src={home_svg} alt="" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Signup;
