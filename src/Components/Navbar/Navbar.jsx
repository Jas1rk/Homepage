import React, { useEffect, useState } from "react";
import Nabardefault from "./Nabardefault";
import Navbarfixed from "./Navbarfixed";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize()
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScroll && !isMobile ? (
          <Navbarfixed key="navbar-fixed" />
        ) : (
          <Nabardefault key="navbar-default" />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
