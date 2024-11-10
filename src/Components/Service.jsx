import React, { useMemo } from "react";
import mobileAppImage from "/mobileapp.png";
import uiUxImage from "/uiux.png";
import digitalMarketingImage from "/digitalmarketing.png";
import webDevelopmentImage from "/webdevelopment.png";

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
  return (
    <>
      <section id="service">
        <h1 className="text-3xl font-bold text-center mt-4">
          Explore Our Service
        </h1>
        <div className="container mx-auto p-8 sm:flex sm:gap-10 justify-center items-center ">
          {service.map((data, index) => (
            <div className="bg-white rounded-md drop-shadow-lg mt-5 flex flex-col justify-center items-center p-8 hover:border hover:border-blue-950" key={index}>
              <img src={data.image} alt="dev" className="w-52" />
              <div className="mt-3">
                <h1 className="font-bold text-1xl">{data.title}</h1>
                <p className="text-center font-light text-gray-400 cursor-pointer">
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
