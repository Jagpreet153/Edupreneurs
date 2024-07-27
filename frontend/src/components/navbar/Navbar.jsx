import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo_svg.svg";
import toast from "react-hot-toast";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { isLoggedIn, setIsLoggedIn } = props;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-secondary text-secondary-content">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/">
          <img src={logo} alt="Edupreneurs Logo" className="w-20" loading="lazy" />
        </Link>
        <nav className="hidden sm:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="hover:text-primary transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-primary transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-primary transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {!isLoggedIn && (
              <>
                <Link to="/login">
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-60 transition duration-300">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-60 transition duration-300">
                    Signup
                  </button>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/">
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition duration-300"
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success("Logged out Successfully");
                    }}
                  >
                    Logout
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition duration-300">
                    Dashboard
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
        <button
          className="sm:hidden text-primary focus:outline-none"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary text-secondary-content">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li className="hover:text-primary transition duration-300">
              <Link to="/" onClick={handleMenuToggle}>
                Home
              </Link>
            </li>
            <li className="hover:text-primary transition duration-300">
              <Link to="/about" onClick={handleMenuToggle}>
                About
              </Link>
            </li>
            <li className="hover:text-primary transition duration-300">
              <Link to="/contact" onClick={handleMenuToggle}>
                Contact
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                <Link to="/login" onClick={handleMenuToggle}>
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition duration-300">
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={handleMenuToggle}>
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition duration-300">
                    Signup
                  </button>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/" onClick={handleMenuToggle}>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition duration-300"
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success("Logged out Successfully");
                    }}
                  >
                    Logout
                  </button>
                </Link>
                <Link to="/dashboard" onClick={handleMenuToggle}>
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-focus transition duration-300">
                    Dashboard
                  </button>
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
