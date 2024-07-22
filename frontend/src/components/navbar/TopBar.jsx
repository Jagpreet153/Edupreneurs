import toast from "react-hot-toast";
import { useContext,useEffect} from "react";
import { UserContext } from '../../userContext';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo_svg from "../../assets/logo_svg.svg";
import { IoArrowDown, IoLogOutSharp, IoNotifications } from "react-icons/io5";

function TopBar(props) {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("User data in Dashboard:", user); // Debug log
  }, [user]);
  // eslint-disable-next-line react/prop-types
  //   let isLoggedIn = props.isLoggedIn;
  // eslint-disable-next-line react/prop-types
  let setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const logout = async () => {
    try {
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
              <li className="font-bold text-xl">{user?.name}</li>
              <li className="font-bold text-base">{user?.email}</li>
              <li
                className="font-bold text-base"
                role="button"
                onClick={() =>
                  document.getElementById("edit_profile_modal").showModal()
                }
              >
                Edit Profile
              </li>
              <dialog
                id="edit_profile_modal"
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
      {/* <Dashboard /> */}
    </div>
  );
}

export default TopBar;