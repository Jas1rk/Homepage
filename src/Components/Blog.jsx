import React, { useMemo } from "react";

const Blog = () => {
  const blog = useMemo(
    () => [
      {
        title:
          "How Servigo’s Innovative Solutions Are Shaping the Future of Technology",
        content:
          "Dive into how Servigo is leveraging cutting-edge technologies in   both its products and services to drive future advancements in  various industries. Showcase specific solutions and projects that   highlight the company’s innovative approach.",
      },
      {
        title: "Why Choosing Servigo for Your Tech Needs Is a Smart Investment",
        content:
          "Discuss the value Servigo brings to businesses by offering a unique combination of high-quality products and comprehensive services. Focus on the benefits of having a one-stop solution for both tech products and services.",
      },
      {
        title:
          "The Importance of Customer-Centric Product Development at Servigo",
        content:
          "Highlight the customer-centric approach Servigo takes when developing products. Share insights into the processes behind product design, feedback loops, and how the company ensures that their solutions meet real customer needs.",
      },
      {
        title:
          "Maximizing Efficiency: How Servigo’s Services Help Streamline Your Business Operations",
        content:
          "Focus on how Servigo’s services help businesses enhance efficiency, improve workflows, and optimize operations. You can talk about consulting, project management, and any other services your company offers to help clients grow.",
      },
      {
        title:
          "The Power of Product-Service Integration: How Servigo Delivers Seamless Solutions",
        content:
          "Explore how Servigo integrates products and services to provide clients with a seamless, end-to-end experience. Highlight the advantages of such integration, from better support to more customized solutions.",
      },
    ],
    []
  );
  return (
    <>
      <section id="blog" className="">
        <div className="container p-5 flex flex-col">
          {blog.map((data, index) => (
            <div
              className="bg-white border-indigo-800  border p-4 rounded-md mt-4"
              key={index}
            >
              <h2 className="font-bold max-w-80">{data.title}</h2>
              <p className="mx-w-80 mt-3">{data.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
