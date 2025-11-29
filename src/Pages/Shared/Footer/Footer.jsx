import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { NavLink } from "react-router";
import { FaLinkedinIn, FaX, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const links = [
    <li>
      <NavLink
        className="text-base-200 font-medium hover:text-primary "
        to="services"
      >
        Services
      </NavLink>
    </li>,
    <li>
      <NavLink
        className="text-base-200 font-medium hover:text-primary "
        to="coverage"
      >
        Coverage
      </NavLink>
    </li>,
    <li>
      <NavLink
        className="text-base-200 font-medium hover:text-primary "
        to="about"
      >
        About Us
      </NavLink>
    </li>,
    <li>
      <NavLink
        className="text-base-200 font-medium hover:text-primary "
        to="pricing"
      >
        Pricing
      </NavLink>
    </li>,
    <li>
      <NavLink
        className="text-base-200 font-medium hover:text-primary "
        to="blog"
      >
        Blog
      </NavLink>
    </li>,
    <li>
      <NavLink
        className="text-base-200 font-medium hover:text-primary "
        to="contact"
      >
        Contact
      </NavLink>
    </li>,
  ];
  return (
    <footer className="footer bg-[#0B0B0B] footer-horizontal footer-center   p-10">
      <aside>
        <div className="text-base-200 mb-4">
          <Logo />
        </div>
        <p className=" text-base-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
        <ul className="flex flex-col md:flex-row  gap-5 mt-10">{links}</ul>
      </aside>
      <nav>
        <div className="grid grid-flow-col text-base-200 text-xl gap-4">
          <NavLink to="https://linkedin.com">
            <FaLinkedinIn />
          </NavLink>
          <NavLink to="https://x.com">
            <FaX />
          </NavLink>
          <NavLink to="https://facebook.com">
            <FaFacebookSquare />
          </NavLink>
          <NavLink to="https://youtube.com">
            <FaYoutube />
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
