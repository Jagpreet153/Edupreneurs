import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../userContext";

import {
  IoAddCircle,
  IoHomeOutline,
  IoCalendarNumberOutline,
  IoInformationCircleOutline,
  IoPersonOutline,
  IoNotificationsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { MdOutlineSpaceDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import EditProfileModal from "./EditProfileModal";

const Sidebar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddNewClassOpen, setIsAddNewClassOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const { user } = useContext(UserContext);

  // eslint-disable-next-line react/prop-types
  let setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const openModal = () => {
    document.getElementById("edit_profile_modal").showModal();
  };

  const logout = async (event) => {
    try {
      event.preventDefault;
      // Make a request to the server's logout endpoint
      toast.success("Logged out successfully");
      const response = await axios.get("http://localhost:3000/api/v2/logout");
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      console.log(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(
        "Error during logout:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
      setIsMediumScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarClass =
    isSmallScreen && isMenuOpen
      ? "fixed inset-0 z-50 bg-base-200 overflow-y-auto"
      : `${isMenuOpen ? "w-60" : "w-20"} min-h-screen`;

  return (
    <div className={sidebarClass}>
      <ul
        className={`menu menu-lg ${
          isSmallScreen && isMenuOpen ? "w-full" : isMenuOpen ? "w-60" : "w-20"
        } min-h-screen p-0 bg-base-200 rounded-box`}
      >
        <li>
          <label className="btn btn-circle h-20 w-20 swap swap-rotate">
            <input
              type="checkbox"
              checked={!isMenuOpen}
              onChange={() => setIsMenuOpen((prev) => !prev)}
            />
            <GiHamburgerMenu className="swap-on p-2 font-bold h-12 w-12" />
            <GiCancel className="swap-off p-2 font-bold h-12 w-12" />
          </label>
        </li>
        <li>
          <button
            className={`rounded-full p-2 my-2 ${
              isMenuOpen ? "mx-4" : "mx-2"
            } bg-primary flex justify-center items-center`}
            onClick={() => {
              setIsAddNewClassOpen((prev) => !prev);
              setIsMenuOpen(true);
            }}
          >
            <span
              className={`flex ${isMenuOpen ? "" : "tooltip tooltip-right"}`}
              data-tip="Add New Class"
            >
              <IoAddCircle className="h-8 w-8 font-bold" />
              {isMenuOpen && <span>Add New Class</span>}
            </span>
          </button>
          {isAddNewClassOpen && isMenuOpen && (
            <ul className="flex gap-1 flex-col ml-8">
              <li
                role="button"
                className="bg-base-300 p-2 w-fit"
                onClick={() =>
                  document.getElementById("create_class_modal").showModal()
                }
              >
                Create a Class
              </li>
              <dialog
                id="create_class_modal"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
              <li
                role="button"
                className="bg-base-300 p-2 w-fit"
                onClick={() =>
                  document.getElementById("join_class_modal").showModal()
                }
              >
                Join a Class
              </li>
              <dialog
                id="join_class_modal"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </ul>
          )}
        </li>
        <li>
          <span
            className={`flex ${isMenuOpen ? "" : "tooltip tooltip-right"} p-4`}
            data-tip="Dashboard"
          >
            <MdOutlineSpaceDashboard className="h-8 w-8 font-bold" />
            {isMenuOpen && <Link to="/dashboard">DashBoard</Link>}
          </span>
        </li>
        <li>
          <span
            className={`flex ${isMenuOpen ? "" : "tooltip tooltip-right"} p-4`}
            data-tip="Home"
          >
            <IoHomeOutline className="h-8 w-8 font-extrabold" />
            {isMenuOpen && <Link to="/">Home</Link>}
          </span>
        </li>
        <li>
          <span
            className={`flex ${isMenuOpen ? "" : "tooltip tooltip-right"} p-4`}
            data-tip="Calendar"
          >
            <IoCalendarNumberOutline className="h-8 w-8 font-extrabold" />
            {isMenuOpen && <span>Calendar</span>}
          </span>
        </li>
        <li>
          <span
            className={`flex ${isMenuOpen ? "" : "tooltip tooltip-right"} p-4`}
            data-tip="Contact Us"
          >
            <MdOutlineSupportAgent className="h-8 w-8 font-bold" />
            {isMenuOpen && (
              <span>
                <Link to="/contactus">Contact Us</Link>
              </span>
            )}
          </span>
        </li>
        <li>
          <span
            className={`flex ${isMenuOpen ? "" : "tooltip tooltip-right"} p-4`}
            data-tip="About Us"
          >
            <IoInformationCircleOutline className="h-8 w-8 font-bold" />
            {isMenuOpen && <span>About Us</span>}
          </span>
        </li>
        {isMediumScreen && (
          <>
            <li role="button" onClick={openModal}>
              <span
                className={`flex ${
                  isMenuOpen ? "" : "tooltip tooltip-right"
                } p-4`}
                data-tip="Profile"
              >
                <IoPersonOutline className="h-8 w-8 font-bold" />
                {isMenuOpen && <span>Profile</span>}
              </span>
            </li>
            <EditProfileModal user={user} />
            <li>
              <span
                className={`flex ${
                  isMenuOpen ? "" : "tooltip tooltip-right"
                } p-4`}
                data-tip="Notifications"
              >
                <IoNotificationsOutline className="h-8 w-8 font-bold" />
                {isMenuOpen && <span>Notifications</span>}
              </span>
            </li>
            <Link className="p-0 m-0" to={"/"}>
              <li>
                <span
                  role="button"
                  onClick={logout}
                  className={`flex ${
                    isMenuOpen ? "" : "tooltip tooltip-right"
                  } p-4`}
                  data-tip="Logout"
                >
                  <IoLogOutOutline className="h-8 w-8 font-bold" />
                  {isMenuOpen && <span>Logout</span>}
                </span>
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
