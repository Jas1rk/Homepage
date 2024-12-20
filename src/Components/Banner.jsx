import React from "react";
import bannerImage from "/banner.png";
import { motion } from "framer-motion";
import Button from "./Common/Button";

const Banner = () => {
  return (
    <>
      <section className="h-[20rem] sm:h-[40rem] bg-[#fef1f7]">
        <div className="container mx-auto space-x-10 p-5 sm:p-3 flex justify-center items-center pt-20">
          <motion.div
            className="flex flex-col sm:p-5"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl font-bold">WE DO YOUR BEST</h1>
            <div className="flex gap-4">
              <h1 className="text-2xl sm:text-sm md:text-2xl font-bold">
                BEST TECH
              </h1>
              <h1 className="text-2xl sm:text-sm  md:text-2xl font-normal">
                BEST FUTURE
              </h1>
            </div>

            <p className="max-w-96 mt-3">
              We combine cutting edge technology with immaculate design to
              create intuitive, user-friendly mobile app solutions that will
              surpass all expectations.
            </p>

            <div className="flex space-x-3 mt-5">
              <Button>sign in</Button>
              <Button>explore</Button>
            </div>
          </motion.div>
          <motion.div
            className="hidden sm:flex w-[30rem] pt-10"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <img src={bannerImage} alt="banner" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Banner;
