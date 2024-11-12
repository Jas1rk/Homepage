import React, { useMemo } from "react";
import contactUs from "/contact.png";

const Contact = () => {
  const input = useMemo(
    () => [
      { labe: "Name", placeholder: "Enter Your Name" },
      { labe: "Email", placeholder: "Enter Your Email" },
      { labe: "Mobile", placeholder: "Enter your Mobile" },
    ],
    []
  );
  return (
    <section id="contact">
      <div className="container mx-auto p-10 sm:p-5">
        <h1 className="font-bold text-3xl text-center">Get In Touch</h1>
        <div className=" mt-3 flex justify-center items-center gap-10 bg-white drop-shadow-lg  border border-blue-400 rounded-md">
          <form className="px-16">
            {input.map((data, index) => (
              <>
            
                <label htmlFor="" className="font-light" key={index}>
                  {data.labe}
                </label>
                <input
                  type="text"
                  placeholder={data.placeholder}
                  className=" p-2 border  rounded-md outline-none w-full focus:ring-1 focus:ring-[#136a8a]  focus:shadow-lg"
                />
              </>
            ))}

            <textarea
              name=""
              placeholder="say about what on your mind"
              className=" p-2 border border-blue-500 rounded-md outline-none w-full mt-4"
            ></textarea>

            <div className=" flex justify-center items-center mt-4">
              <button className="bg-blue-950 text-white p-2 w-32 rounded-3xl">
                submit
              </button>
            </div>
          </form>
          <img
            src={contactUs}
            alt="contact"
            className="hidden sm:flex  sm:w-[22rem] md:w-[22rem] lg:w-[30rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
