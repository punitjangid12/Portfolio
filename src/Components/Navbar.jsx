import React from "react";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed top-0 w-full z-50 bg-[var(--color-dark-100)] backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div>
          <a href="/" className="font-light text-2xl">
            Punit
            <span className="text-purple-600">Jangid</span>

          </a>
        </div>
        <div className="hidden md:flex space-x-10">
           <button className="relative group px-6 py-3 overflow-hidden">
            <span className="relative z-10 text-gray-200 ">Home</span>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple-500 transition-all duration-100 group-hover:w-full  hover:text-purple-500"></div>
          </button>
          <button className="relative group px-6 py-3 overflow-hidden">
            <span className="relative z-10 text-gray-200 ">About</span>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple-500 transition-all duration-100 group-hover:w-full  hover:text-purple-500"></div>
          </button>
          <button className="relative group px-6 py-3 overflow-hidden">
            <span className="relative z-10 text-gray-200 ">Projects</span>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple-500 transition-all duration-100 group-hover:w-full  hover:text-purple-500"></div>
          </button>
          <button className="relative group px-6 py-3 overflow-hidden">
            <span className="relative z-10 text-gray-200 ">Contact</span>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple-500 transition-all duration-100 group-hover:w-full  hover:text-purple-500"></div>
          </button>
        </div>

        {/* Hamburger Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-blue-400 to-purple-600">
          <a
            href="/"
            className="block px-3 py-2 bg-transparent rounded hover:bg-[#1a1a1a]  text-white"
          >
            Home
          </a>
          <a
            href="/About"
            className="block px-3 py-2 bg-transparent rounded hover:bg-[#1a1a1a] text-white"
          >
            About
          </a>
          <a
            href="/Services"
            className="block px-3 py-2 bg-transparent rounded hover:bg-[#1a1a1a] text-white"
          >
            Services
          </a>
          <a
            href="/Contact"
            className="block px-3 py-2 bg-transparent rounded hover:bg-[#1a1a1a] text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
