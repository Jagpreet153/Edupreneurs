// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import toast from "react-hot-toast";

function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  let isLoggedIn = props.isLoggedIn;
  // eslint-disable-next-line react/prop-types
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <div className="flex justify-evenly items-center bg-warning text-warning-content">
            <Link to="/">
              <img src={logo} alt="" width={240} loading="lazy" />
            </Link>
            <nav>
              <ul className="flex gap-3">
                <li>
                  <Link to={"/"}> Home </Link>
                </li>
                <li>
                  <Link to={"/about"}> About </Link>
                </li>
                <li>
                  <Link to={"/contact"}> Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="flex ml-5 mr-3 gap-3">
              {!isLoggedIn && (
                <Link to={"login"}>
                  <button>Login</button>
                </Link>
              )}
              {!isLoggedIn && (
                <Link to={"signup"}>
                  <button>Signup</button>
                </Link>
              )}
              {isLoggedIn && (
                <Link to={"/"}>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success("Logged out Successfully");
                    }}
                  >
                    Logout
                  </button>
                </Link>
              )}
              {isLoggedIn && (
                <Link to={"dashboard"}>
                  <button>Dashboard</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Navbar;
