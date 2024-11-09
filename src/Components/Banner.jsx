import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImage from "/banner.png";
import { motion } from "framer-motion";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  return (
    <>
      <section className="h-[20rem] sm:h-[29rem]">
        <div className="container mx-auto space-x-10 p-5 sm:p-0 flex justify-center items-center m-auto">
          <div className="flex flex-col" data-aos="fade-right">
            <h1 className="text-3xl font-bold">We do your best</h1>

            <p className="max-w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              minima, corrupti quidem aut id ea consequatur soluta cupiditate
              nihil alias aspernatur tenetur et fugit vitae! Architecto et
              accusantium dolorem rerum?
            </p>

            <div className="flex space-x-3 mt-5">
              <button className="bg-blue-950 text-white p-2 w-32 rounded-3xl flex justify-center items-center">
                sign in
              </button>
              <button className="bg-blue-950 text-white p-2 w-32 rounded-3xl flex justify-center items-center">
                explore
              </button>
            </div>
          </div>
          <motion.div
            className="hidden sm:flex w-[30rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={bannerImage} alt="banner" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Banner;
