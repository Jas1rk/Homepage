import React, { useEffect, useMemo } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import AOS from "aos";
import "aos/dist/aos.css";

const api_Key = "AIzaSyDubugz9YmPMAtPpY4CEZha_Tj9MD8OhFo";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 20.5937,
    lng: 78.9629,
  };

  const socialIcons = useMemo(
    () => [
      { icon: FaFacebookF, color: "bg-[#3b5998]" },
      { icon: FaYoutube, color: "bg-[#FF0000]" },
      { icon: FaLinkedinIn, color: "bg-[#0077B5]" },
      { icon: FaInstagram, color: "bg-[#c026d3]" },
    ],
    []
  );

  const pages = {
    page1: "Home",
    page2: "Service",
    page3: "Blog",
    page4: "About",
    page5: "Contact",
  };

  const location = {
    location1: "India",
    location2: "UAE",
    location: "USA",
  };

  const contact = {
    email: "servico@info.com",
    mobile: "USA: +(281) 5467",
    mobile2: "UAE: +456890",
    mobile3: "India: +918976543223",
  };
  return (
    <>
      <footer className="bg-[#55021a] text-white ">
        <div className="container mx-auto p-8 sm:grid sm:grid-cols-3 gap-10 lg:flex  justify-center ">
          <div
            className="flex-flex-col mt-5"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h1 className="text-lg font-bold">Follow Our Socials</h1>
            <div className="flex space-x-4 mt-2">
              {socialIcons.map((social, index) => (
                <div
                  className={`${social.color} p-2 rounded-md cursor-pointer duration-500  hover:-translate-y-2`}
                  key={index}
                >
                  <social.icon />
                </div>
              ))}
            </div>
            <div className="mt-5">
              <ul className="list-none">
                {[
                  "Asset Store",
                  "Project Listing",
                  "ERP Solution",
                  "Interior",
                ].map((data, index) => (
                  <li
                    className="font-light text-gray-200 cursor-pointer duration-500 hover:translate-x-2 m-2"
                    key={index}
                  >
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5" data-aos="fade-up" data-aos-duration="1300">
            <h1 className="font-bold text-lg">Solutions</h1>
            <ul className="list-none mt-3">
              {[
                "App Development",
                "Web Development",
                "Software Development",
                "Digital Marketing",
              ].map((data, index) => (
                <li
                  key={index}
                  className="font-light text-gray-200 cursor-pointer duration-500 hover:translate-x-2 m-2"
                >
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5" data-aos="fade-up" data-aos-duration="1400">
            <h1 className="font-bold text-lg">Pages</h1>
            <ul className="list-none mt-3">
              {Object.keys(pages).map((data, index) => (
                <li
                  className="font-light text-gray-200 cursor-pointer duration-500 hover:translate-x-2 m-2"
                  key={index}
                >
                  {pages[data]}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold text-lg">Location</h1>
            <ul className="list-none mt-3">
              {Object.keys(location).map((data, index) => (
                <li
                  className="font-light text-gray-200 cursor-pointer duration-500 hover:translate-x-2 m-2"
                  key={index}
                >
                  {location[data]}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5" data-aos="fade-up" data-aos-duration="1600">
            <h1 className="font-bold text-lg">Contact</h1>
            <ul className="list-none mt-3">
              {Object.keys(contact).map((data, index) => (
                <li
                  className="font-light text-gray-200 cursor-pointer duration-500 hover:translate-x-2 m-2"
                  key={index}
                >
                  {contact[data]}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="mt-10 w-full p-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="font-bold text-lg mb-3 text-center">Our Location</h1>
          <LoadScript googleMapsApiKey={api_Key}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            />
          </LoadScript>
        </div>
        <div className="px-10">
          <hr className=" bg-gray-300 my-4 shadow-m" />
        </div>

        <div className="mt-3 flex justify-between p-5">
          <p className="font-light text-gray-300 text-sm">
            © 2024 Servigo. All rights reserved.
          </p>
          <p className="font-light text-gray-300 text-sm">Privacy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
