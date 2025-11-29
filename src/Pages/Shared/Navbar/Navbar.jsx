import React, { useState, useCallback, useEffect } from "react";
import { Link, NavLink } from "react-router"; 
import { Menu, Sun, Moon, X } from "lucide-react";
import Logo from "../../../Components/Logo/Logo";
import { LuArrowUpRight } from "react-icons/lu";
import useAuth from "../../../Hooks/useAuth";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }, []);

  const handleLogOut = async () => {
    try {
      await logOut();
      setIsMenuOpen(false); // Close mobile menu after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const links = [
    { name: "Services", to: "/services" },
    { name: "Coverage", to: "/coverage" },
    { name: "About Us", to: "/about" },
    { name: "Pricing", to: "/pricing" },
    { name: "Send Parcel", to: "/send-parcel" }, // Fixed typo: percel → parcel
    { name: "Be a Rider", to: "/become-rider" },
  ];

  const NavItem = ({ link, onClick }) => (
    <li>
      <NavLink
        to={link.to}
        onClick={onClick}
        className={({ isActive }) =>
          `block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 lg:p-0 lg:text-lg ${
            isActive ? "text-primary font-bold" : ""
          }`
        }
        end
      >
        {link.name}
      </NavLink>
    </li>
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="sticky top-0 z-50 shadow-md dark:shadow-xl bg-white dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-6 text-lg">
                {links.map((link) => (
                  <NavItem key={link.name} link={link} />
                ))}
                {user && (
                  <NavItem
                    link={{ name: "My Parcel", to: "/dashboard/my-parcel" }}
                  />
                )}
              </ul>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Auth Buttons - Desktop */}
              <div className="hidden sm:flex items-center gap-3">
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="px-5 py-2.5 text-sm font-semibold rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    Sign Out
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="px-5 py-2.5 text-sm font-semibold rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    Sign In
                  </NavLink>
                )}

                <NavLink
                  to="/become-rider"
                  className="px-6 py-2.5 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
                >
                  Be a Rider
                </NavLink>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
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
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <ul className="space-y-2">
                {links.map((link) => (
                  <NavItem
                    key={link.name}
                    link={link}
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}
                {user && (
                  <NavItem
                    link={{ name: "My Parcel", to: "/dashboard/my-parcel" }}
                    onClick={() => setIsMenuOpen(false)}
                  />
                )}
              </ul>

              <div className="mt-4 flex flex-col gap-3">
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="w-full py-3 text-center bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
                  >
                    Sign Out
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-3 text-center border border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Sign In
                  </NavLink>
                )}
                <NavLink
                  to="/become-rider"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 text-center bg-primary text-white rounded-xl font-bold"
                >
                  Be a Rider
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
