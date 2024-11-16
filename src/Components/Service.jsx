import React, { useMemo, useState } from "react";
import mobileAppImage from "/mobileapp.png";
import uiUxImage from "/uiux.png";
import digitalMarketingImage from "/digitalmarketing.png";
import webDevelopmentImage from "/webdevelopment.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Service = () => {
  const service = useMemo(
    () => [
      { image: mobileAppImage, title: "App Development" },
      { image: webDevelopmentImage, title: "Web Development" },
      { image: uiUxImage, title: "UI/UX" },
      { image: digitalMarketingImage, title: "Digital Marketing" },
    ],
    []
  );
  const [isHover, setIsHover] = useState(null);

  return (
    <>
      <section id="service">
        <h1 className="text-3xl font-bold text-center mt-4">
          Explore Our Service
        </h1>
        <div className="container mx-auto p-8  sm:grid sm:grid-cols-2  gap-10 lg:flex justify-center items-center  ">
          {service.map((data, index) => (
            <div
              className="bg-[#fef1f7] rounded-md drop-shadow-lg mt-5 flex flex-col justify-center items-center p-8 duration-500 ease-in-out transform hover:-translate-y-8 border-2 border-transparent hover:border-[#ca0c47]"
              key={index}
            >
              <img src={data.image} alt="dev" className="w-52" />
              <div className="mt-3">
                <h1 className="font-bold text-lg lg:text-sm">{data.title}</h1>
                <div className="flex justify-center items-center gap-1">
                  <p
                    className="text-center font-light text-gray-400 cursor-pointer"
                    onMouseEnter={() => setIsHover(index)}
                    onMouseLeave={() => setIsHover(null)}
                  >
                    Learn More
                  </p>
                  {isHover === index && (
                    <IoIosArrowRoundForward className="transform group-hover:translate-x-2 duration-300 ease-in-out  group-hover:opacity-100" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
