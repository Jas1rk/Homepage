import React from "react";
import aboutUs from "/aboutus.png";

const About = () => {
  return (
    <>
      <section className="about p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center">About Us</h1>
        <div className="container mt-5 justify-center items-center flex flex-col md:flex-row md:gap-3 p-6 mx-auto drop-shadow-lg bg-white rounded-md">
          <img
            src={aboutUs}
            alt="about"
            className=" md:w-[26rem] md:h-[20rem]  lg:w-[26rem] lg:h-[20rem]"
          />
          <p className=" font-normal mt-3 text-center items-center flex justify-center text-slate-950">
            At Servigo, we are dedicated to delivering comprehensive technology
            solutions that drive growth and innovation. We specialize in
            providing businesses with a unique blend of high-quality products
            and tailored services, making us the go-to partner for organizations
            seeking to optimize their digital journey. Our products are designed
            with a customer-first approach, combining cutting-edge technology
            with user-friendly features that address real-world challenges. From
            software applications to digital platforms, each product is crafted
            to help our clients achieve their goals efficiently and effectively.
            Complementing our product offerings, Servigo provides a range of
            professional services that enhance and support business operations.
            Our team of experts works closely with clients to provide
            consulting, implementation, and ongoing support, ensuring that every
            solution is fully optimized and aligned with each client’s unique
            needs. With a focus on innovation, quality, and customer
            satisfaction, Servigo is committed to making technology accessible
            and impactful. Whether you need a ready-to-use product or a
            customized service solution, Servigo is here to empower your
            business and shape the future of your industry.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
