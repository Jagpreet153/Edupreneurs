
import { useState } from "react";
import Chatbot from "./chatbot/chatbot";
import { MdOutlineSpaceDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { IoHomeOutline, IoCalendarNumberOutline, IoInformationCircleOutline } from "react-icons/io5";

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div>
      <Chatbot />
      <div>
        <div className="navbar bg-base-300">
          <label className="btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" checked={!isMenuOpen} onChange={() => setIsMenuOpen((prev) => !prev)} />

            {/* hamburger icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">EduPreneurs </a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className={`menu menu-lg ${isMenuOpen === true ? 'w-72' : 'w-20'} h-screen p-0 bg-base-200 rounded-box`}
        onClick={() => setIsMenuOpen((prev) => !prev)}>
          <li>
            <a className={`flex ${isMenuOpen === true ? '' : 'tooltip  tooltip-right'} p-4`} data-tip="Dashboard">
              <MdOutlineSpaceDashboard className="h-8 w-8 font-bold"/>
              {isMenuOpen? (
                <div>
                  Dashboard
                </div>
              ):(
                <div></div>
              )}
            </a>
          </li>
          <li>
            <a className={`flex ${isMenuOpen === true ? '' : 'tooltip  tooltip-right'} p-4`} data-tip="Home">
              <IoHomeOutline className="h-8 w-8 font-extrabold"/>
              {isMenuOpen? (
                <div>
                  Home
                </div>
              ):(
                <div></div>
              )}
            </a>
          </li>
          <li>
          <a className={`flex ${isMenuOpen === true ? '' : 'tooltip  tooltip-right'} p-4`} data-tip="Calendar">
              <IoCalendarNumberOutline className="h-8 w-8 font-extrabold"/>
              {isMenuOpen? (
                <div>
                  Calendar
                </div>
              ):(
                <div></div>
              )}
            </a>
          </li>
          <li>
            <a className={`flex ${isMenuOpen === true ? '' : 'tooltip  tooltip-right'} p-4`} data-tip="Contact Us">
              <MdOutlineSupportAgent className="h-8 w-8 font-bold"/>
              {isMenuOpen? (
                <div>
                  Contact Us
                </div>
              ):(
                <div></div>
              )}
            </a>
          </li>
          <li>
            <a className={`flex ${isMenuOpen === true ? '' : 'tooltip  tooltip-right'} p-4`} data-tip="About Us">
              <IoInformationCircleOutline className="h-8 w-8 font-bold"/>
              {isMenuOpen? (
                <div>
                  About Us
                </div>
              ):(
                <div></div>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
