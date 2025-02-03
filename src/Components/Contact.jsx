import React, { useMemo } from "react";
import contactUs from "/contact.png";
import Button from "./Common/Button";

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
        <h1 className="font-bold text-2xl md:text-3xl text-center">Get In Touch</h1>
        <div className=" mt-4 flex justify-center items-center gap-10 bg-white drop-shadow-lg  border border-[#f83c86] rounded-md">
          <form className="px-16">
            {input.map((data, index) => (
              <>
            
                <label htmlFor="" className="font-light" key={index}>
                  {data.labe}
                </label>
                <input
                  type="text"
                  placeholder={data.placeholder}
                  className=" p-2 border  rounded-md outline-none w-full focus:ring-1 focus:ring-[#f83c86]  focus:shadow-lg"
                />
              </>
            ))}
            <div className="mt-5">
              <label htmlFor="">Message</label>
            <textarea
              name=""
              placeholder="say about what on your mind"
              className=" p-2 border  rounded-md outline-none w-full focus:ring-1 focus:ring-[#f83c86]  focus:shadow-lg "
            ></textarea>

            </div>

            <div className=" flex justify-center items-center mt-3 pb-3">
             <Button>submit</Button>
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
