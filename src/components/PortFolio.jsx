import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import c from "../../public/c.png";
import git from "../../public/git.png";
import ops from "../../public/oops.png";
import tailwind from "../../public/tailwind.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      content:"HTML is the foundational language for creating and structuring web pages with elements like headings, paragraphs, and links."
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      content:"CSS styles HTML elements, managing layout, colors, fonts, and overall presentation to enhance the visual design of web pages."
    },
    {
      id: 3,
      logo: tailwind,
      name: "Tailwind",
      content:"Tailwind CSS is a utility-first framework that allows for rapid, custom web design using predefined classes for styling elements."
    },
    {
      id: 4,
      logo: javascript,
      name: "javascript",
      content:"JavaScript is a scripting language used for creating interactive web pages, enabling dynamic content and client-side scripting in web development."
    },
    {
      id: 5,
      logo: reactjs,
      name: "ReactJS",
      content:"React is a JavaScript library for building dynamic, reusable user interface components, enabling efficient development of interactive web applications."
    },
    {
      id: 6,
      logo: nodejs,
      name: "NodeJS",
      content:"Node.js is a runtime environment that enables server-side JavaScript execution, ideal for building scalable and high-performance network applications."
    },
    {
      id: 7,
      logo: express,
      name: "Express",
      content:"Express.js is a minimal Node.js framework that simplifies server-side development, offering tools for routing, middleware, and HTTP request handling."
    },
    {
      id: 8,
      logo: mongoDB,
      name: "mongoDB",
      content:"MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, suitable for handling unstructured data and scaling applications."
    },
    {
      id: 9,
      logo: python,
      name: "Python",
      content:"Python is a high-level, versatile programming language known for its readability, ease of use, and extensive libraries for various applications."
    },
    {
      id: 10,
      logo: c,
      name: "C programming",
      content:"C is a high-performance programming language used for system-level programming, providing low-level memory access and efficient execution."
    },
    {
      id: 4,
      logo: ops,
      name: "C++",
      content:"C++ extends C with object-oriented features, supporting both low-level programming and high-level abstractions for diverse application development."
    },
    {
      id: 4,
      logo: git,
      name: "Git/Github",
      content:"GitHub is a web-based platform for version control and collaboration, using Git to manage code changes and facilitate team projects."
    },
  ];
  return (
    <div
      name="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-5">
          {cardItem.map(({ id, logo, name,content }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                {content}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
