import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import { UserContext } from "../../userContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo_svg from "../../assets/logo_svg.svg";
import { IoArrowDown, IoLogOutSharp, IoNotifications } from "react-icons/io5";

import EditProfileModal from "../modals/EditProfileModal";

function TopBar(props) {
  const { user,setClasses } = useContext(UserContext);

  const openModal = () => {
    document.getElementById("edit_profile_modal").showModal();
  };

  const capitalizeFirstLetter = (str) => {
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase();
  };

  // useEffect(() => {
  //   if (user?.name) {
  //     capitalizeFirstLetter(user.name);
  //   }
  // }, [user]);

  useEffect(() => {
    console.log("User data in Dashboard:", user); // Debug log
  }, [user]);
  // eslint-disable-next-line react/prop-types
  //   let isLoggedIn = props.isLoggedIn;
  // eslint-disable-next-line react/prop-types
  let setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const logout = async () => {
    try {
      // Make a request to the server's logout endpoint
      toast.success("Logged out successfully");
      const response = await axios.get("https://edupreneurs.vercel.app/api/v2/logout");
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      setClasses([]);
      localStorage.removeItem("classes");
      console.log(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(
        "Error during logout:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="w-full h-20 bg-base-200 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Link to={"/dashboard"}>
          <div className="flex gap-2 items-center">
            <div className="w-16">
              <img src={logo_svg} alt="logo" />
            </div>
            <div className="flex">
              <div className="text-2xl">EduPreneurs </div>
            </div>
          </div>
        </Link>
        <div className="form-control hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[30vw]"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <div className="indicator">
          <span className="indicator-item badge badge-error rounded-full scale-50 mr-2 mt-1"></span>
          <IoNotifications className="h-8 w-8 opacity-40" />
        </div>
        <details className="dropdown dropdown-end">
          <summary
            // tabIndex={0}
            // role="button"
            className="btn m-1 btn-ghost"
            // onClick={() => setIsProfileOpen((prev) => (!prev))}
          >
            <div className=" flex justify-center  items-center w-[2.5rem] h-[2.5rem] rounded-full bg-[#88a4c4]">
              <span className="text-xl font-bold">
                {" "}
                {capitalizeFirstLetter(user.name)}{" "}
              </span>
            </div>
            <span>Profile</span>
            <IoArrowDown />
          </summary>
          <ul
            // tabIndex={0}
            className="menu menu-sm min-h-[calc(100vh-80px)] pb-8 flex flex-col items-center justify-between dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-64 p-2 shadow"
          >
            <div className="flex flex-col gap-4 items-center">
              <li>
                <div className=" flex justify-center  items-center w-[5rem] h-[5rem] rounded-full bg-[#88a4c4]">
                  <span className="text-3xl font-bold">
                    {" "}
                    {capitalizeFirstLetter(user.name)}{" "}
                  </span>
                </div>
              </li>
              <li className="font-bold text-xl">{user?.name}</li>
              <li className="font-bold text-base">{user?.email}</li>
              <li
                className="font-bold text-base"
                role="button"
                onClick={openModal}
              >
                Edit Profile
              </li>
              <EditProfileModal user={user} />
            </div>
            <li className="font-bold text-2xl">
              <Link to={"/"}>
                <button className="flex gap-2 items-center" onClick={logout}>
                  LOGOUT <IoLogOutSharp className="h-8 w-8" />
                </button>
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}

export default TopBar;
