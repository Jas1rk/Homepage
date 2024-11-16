import React from "react";
import { Link } from "react-scroll";
import { navbar } from "./Navitem";

const Mobilenavbar = () => {
  return (
    <nav className="sm:hidden flex flex-col bg-[#55021a] text-white p-3 space-y-2 z-50">
      {navbar().map((data, index) => (
        <Link
          activeClass="active"
          to={data.headerId}
          smooth={true}
          className="  hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out"
          key={index}
        >
          {data.header}
        </Link>
      ))}
      <Link className="hover:text-gray-200 hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer transition duration-300 ease-in-out">
        Login
      </Link>
    </nav>
  );
};

export default Mobilenavbar;
