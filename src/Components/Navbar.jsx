import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-blue-950 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-md sm:text-2xl font-bold">HomePage</div>
        <div className="flex-grow max-w-full sm:max-w-sm md:max-w-md lg:mx-w-lg mx-4">
          <input
            type="search"
            placeholder="search items..."
            className="w-full p-2 rounded-md bg-white-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-blue-600"
          />
        </div>
        <div className="hidden sm:flex sm:space-x-4 md:space-x-6 lg:space-x-8">
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Home
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Products
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Blog
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Contact
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            About
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Career
          </Link>
        </div>
        <div className="hidden sm:flex sm:ml-3 cursor-pointer text-2xl items-center justify-center">
          <FaRegUserCircle />
          {/* <button className="text-sm p-1  bg-white text-black  rounded-md">sign in</button> */}
        </div>
        <div className="sm:hidden justify-center items-center">
          {menuOpen ? (
            <button onClick={() => setMenuOpen(false)}>
              <MdClose />
            </button>
          ) : (
            <button className="text-2xl" onClick={() => setMenuOpen(true)}>
              <RiMenu3Line />
            </button>
          )}
        </div>
      </nav>
      {/* mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden flex flex-col bg-blue-900 text-white p-3 space-y-2 z-50">
          <Link className="  hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Home
          </Link>
          <Link className=" hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Products
          </Link>
          <Link className="block hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Blog
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Contact
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            About
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Career
          </Link>
          <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
