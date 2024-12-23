import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { FaCakeCandles } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full">
      <div className="flex flex-row justify-between text-[#8b4513] p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <span>
            <FaCakeCandles size={32} />
          </span>
          <h1 className="text-xl font-semibold">Chops by______</h1>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link
                to="dishes"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Dishes
              </Link>

              <BiChevronDown className="cursor-pointer" size={25} />
            </div>

            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                >
                  Spicy
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                >
                  Tasty
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                >
                  Delicious
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                >
                  Crispy
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>

          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Menu
          </Link>

          <FaShoppingCart />
        </nav>

        {/* Mobile Cart Icon */}
        <div className="md:hidden flex items-center">
          <FaShoppingCart size={25} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menu && (
        <div
          className={`absolute md:hidden bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
