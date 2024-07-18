import { useState } from "react";
import Chatbot from "./chatbot/chatbot";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineSpaceDashboard, MdOutlineSupportAgent } from "react-icons/md";
import {
  IoHomeOutline,
  IoCalendarNumberOutline,
  IoInformationCircleOutline,
  IoAddCircle,
  IoArrowDown,
  IoLogOutSharp,
  IoNotifications,
} from "react-icons/io5";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

export const cards = [
  {
    className: "ClassName1",
    dateStart: "11/22/3333",
    ownerName: "OwnerName1",
  },
  {
    className: "ClassName2",
    dateStart: "12/23/3443",
    ownerName: "OwnerName2",
  },
  {
    className: "ClassName3",
    dateStart: "13/24/5323",
    ownerName: "OwnerName3",
  },
  {
    className: "ClassName4",
    dateStart: "15/25/3355",
    ownerName: "OwnerName4",
  },
  {
    className: "ClassName5",
    dateStart: "16/26/3366",
    ownerName: "OwnerName5",
  },
];

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isAddNewClassOpen, setIsAddNewClassOpen] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Make a request to the server's logout endpoint
      toast.success("Logged out successfully");
      const response = await axios
        .post("http://localhost:3000/api/v2/logout")
        .then(() => {
          localStorage.removeItem("token");
          console.log(response.data.message);
          navigate("/");
        });
    } catch (error) {
      console.log(
        "Error during logout:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <div>
      <Chatbot />
      <div>
        <div className="navbar h-20 z-10 bg-base-200 flex fixed justify-between">
          <div className="gap-6">
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                checked={!isMenuOpen}
                onChange={() => setIsMenuOpen((prev) => !prev)}
              />
              <GiHamburgerMenu className="swap-on h-8 w-8" />
              <GiCancel className="swap-off h-8 w-8" />
            </label>
            <div className="flex gap-6">
              <div className="flex">
                <a className="btn btn-ghost text-xl">EduPreneurs </a>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-[50vw]"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
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
                <div className="flex items-center gap-1">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-full"
                    />
                  </div>
                  <span>Profile</span>
                  <IoArrowDown />
                </div>
              </summary>
              <ul
                // tabIndex={0}
                className="menu menu-sm min-h-[calc(100vh-80px)] pb-8 flex flex-col items-center justify-between dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-64 p-2 shadow"
              >
                <div className="flex flex-col gap-4 items-center">
                  <li>
                    <img
                      alt="Profile image"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-full h-60 w-60"
                    />
                  </li>
                  <li className="font-bold text-xl">FirstName LastName</li>
                  <li className="font-bold text-base">Email ID</li>
                  <li className="font-bold text-base">
                    <a>Edit Profile</a>
                  </li>
                </div>
                <li className="font-bold text-2xl">
                  <Link to={"/"}>
                    <button
                      className="flex gap-2 items-center"
                      onClick={logout}
                    >
                      LOGOUT <IoLogOutSharp className="h-8 w-8" />
                    </button>
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="flex">
          <ul
            className={`menu menu-lg ${
              isMenuOpen === true ? "w-60" : "w-20"
            } h-[calc(100vh-80px)] mt-20 fixed p-0 bg-base-200 rounded-box`}
            // onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <li>
              <button
                className={`rounded-full p-2 my-2 ${
                  isMenuOpen === true ? "mx-4" : "mx-2"
                } bg-primary flex justify-center items-center`}
                onClick={() => {
                  setIsAddNewClassOpen((prev) => !prev);
                  setIsMenuOpen(true);
                }}
              >
                <a
                  className={`flex ${
                    isMenuOpen === true ? "" : "tooltip tooltip-right"
                  }`}
                  data-tip="Add New Class"
                >
                  <IoAddCircle className="h-8 w-8 font-bold" />
                  {isMenuOpen ? <div>Add New Class</div> : <div></div>}
                </a>
              </button>
              {isAddNewClassOpen && isMenuOpen ? (
                <ul className="flex gap-1 flex-col ml-8">
                  <li role="button" className="bg-base-300 p-2 w-fit">Create a Class </li>
                  <li role="button" className="bg-base-300 p-2 w-fit">Join a Class</li>
                </ul>
              ) : (
                <div className="hidden"></div>
              )}
            </li>
            <li>
              <a
                className={`flex ${
                  isMenuOpen === true ? "" : "tooltip tooltip-right"
                } p-4`}
                data-tip="Dashboard"
              >
                <MdOutlineSpaceDashboard className="h-8 w-8 font-bold" />
                {isMenuOpen ? <div>Dashboard</div> : <div></div>}
              </a>
            </li>
            <li>
              <a
                className={`flex ${
                  isMenuOpen === true ? "" : "tooltip  tooltip-right"
                } p-4`}
                data-tip="Home"
              >
                <IoHomeOutline className="h-8 w-8 font-extrabold" />
                {isMenuOpen ? <div>Home</div> : <div></div>}
              </a>
            </li>
            <li>
              <a
                className={`flex ${
                  isMenuOpen === true ? "" : "tooltip  tooltip-right"
                } p-4`}
                data-tip="Calendar"
              >
                <IoCalendarNumberOutline className="h-8 w-8 font-extrabold" />
                {isMenuOpen ? <div>Calendar</div> : <div></div>}
              </a>
            </li>
            <li>
              <a
                className={`flex ${
                  isMenuOpen === true ? "" : "tooltip  tooltip-right"
                } p-4`}
                data-tip="Contact Us"
              >
                <MdOutlineSupportAgent className="h-8 w-8 font-bold" />
                {isMenuOpen ? <div>Contact Us</div> : <div></div>}
              </a>
            </li>
            <li>
              <a
                className={`flex ${
                  isMenuOpen === true ? "" : "tooltip  tooltip-right"
                } p-4`}
                data-tip="About Us"
              >
                <IoInformationCircleOutline className="h-8 w-8 font-bold" />
                {isMenuOpen ? <div>About Us</div> : <div></div>}
              </a>
            </li>
          </ul>
          <div
            className={`flex ${
              isMenuOpen === true
                ? "ml-[270px] max-w-[calc(100vw-270px)]"
                : "ml-[90px] max-w-[calc(100vw-90px)]"
            } mt-20 flex-wrap`}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="card flex-auto z-0 m-8 bg-neutral text-neutral-content w-96 h-72"
              >
                <div className="card-body items-center text-center">
                  <h2 className="card-title"> {card.className} </h2>
                  <p>{card.dateStart}</p>
                  <p>{card.ownerName}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Open</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
