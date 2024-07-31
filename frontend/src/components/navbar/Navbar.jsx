import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo_svg.svg";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { isLoggedIn } = props;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoggedIn) {
    return null; // Return null to hide the navbar when logged in
  }

  return (
    <div className="bg-secondary text-secondary-content">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <div className="w-16">
              <img src={logo} alt="logo" loading="lazy" />
            </div>
            <div className="flex">
              <div className="text-2xl">EduPreneurs </div>
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
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
          </div>
        </nav>
        <button
          className="md:hidden text-primary focus:outline-none"
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
            <Link to="/login" onClick={handleMenuToggle}>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-60 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={handleMenuToggle}>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-60 transition duration-300">
                Signup
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
