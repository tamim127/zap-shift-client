import React, { useState, useCallback } from "react";
import { Link, NavLink } from "react-router";
import { Menu, Sun, Moon, X } from "lucide-react";
import Logo from "../../../Components/Logo/Logo";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Theme
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }, []);

  const links = [
    { name: "Services", to: "/services" },
    { name: "Coverage", to: "/coverage" },
    { name: "About Us", to: "/about" },
    { name: "Pricing", to: "/pricing" },
    { name: "Be a Rider", to: "/rider" },
  ];

  const NavItem = ({ link, onClick }) => (
    <li>
      <NavLink
        to={link.to}
        onClick={onClick}
        className="block px-3 py-2 text-gray-700 dark:text-gray-300 font-medium 
          rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors 
          duration-200 lg:p-0 lg:text-lg"
      >
        {link.name}
      </NavLink>
    </li>
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="sticky top-0 z-50 shadow-md dark:shadow-xl bg-white dark:bg-gray-950/90 backdrop-blur-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-6 text-lg">
                {links.map((link) => (
                  <NavItem key={link.name} link={link} />
                ))}
              </ul>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <Link
                to="login"
                className="px-4 py-2 text-sm font-semibold rounded-full border 
                border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white 
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hidden sm:inline-block"
              >
                Sign In
              </Link>

              <Link
                to="signup"
                className="flex items-center px-4 py-2 text-sm font-bold text-base-300 
                bg-primary rounded-full shadow-lg  
                 transition-all duration-200"
              >
                Be a rider
              </Link>

              {/* Arrow Button */}
              <Link
                to="register"
                className="hidden sm:flex justify-center items-center w-10 h-10 
                bg-black dark:bg-gray-800 text-primary rounded-full hover:scale-105 
                transition-transform duration-200"
              >
                <LuArrowUpRight className="w-5 h-5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full lg:hidden text-gray-700 dark:text-gray-300 
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen
                ? "max-h-96 opacity-100 mt-2"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <ul className="flex flex-col space-y-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              {links.map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}

              <hr className="my-2 border-gray-200 dark:border-gray-700" />

              <a
                href="#login"
                className="px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white 
                rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors 
                duration-200 w-full text-center"
              >
                Sign In
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
