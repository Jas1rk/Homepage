import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { navbar } from "./Navitem";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

const Navbarfixed = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] top-4 left-1/2 rounded-full p-1  bg-[#e91f64] bg-opacity-[.08] backdrop-blur-lg border border-[#f83c86] border-opacity-[.08]"
    >
      <div className="flex items-center gap-3   font-jakarta">
        {navbar().map((data, index) => (
          <Link
            key={index}
            className="cursor-pointer p-3 hover:text-[#e91f64]  hover:underline hover:underline-offset-8 hover:decoration-1 "
            to={data.headerId}
            smooth={true}
            activeClass="active"
            activeStyle={true}
          >
            {data.header}
          </Link>
        ))}
        <Link className="cursor-pointer p-3 hover:text-[#e91f64]  hover:underline hover:underline-offset-8 hover:decoration-1 ">
          Login
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbarfixed;
