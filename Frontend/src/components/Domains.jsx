import React from "react";
import WBF2 from "../assets/WBF2.jpg";
import AF1 from "../assets/AF1.jpeg";
import GDF2 from "../assets/GDF2.jpeg";
import WBF1 from "../assets/WBF1.jpeg";
import UIF1 from "../assets/UIF1.jpeg";
import PDF1 from "../assets/PDF1.jpeg";


const projects = [
  {
    id: 1,
    title: "WEB DESIGNERS",
    img: WBF2,
    link: "https://github.com/anjubhargavi1224",
    className: "col-span-2 row-span-2 h-[450px] w-full"
  },
  {
    id: 2,
    title: "ANIMATORS",
    img: AF1,
    link: "https://github.com/anjubhargavi1224",
    className: "h-[220px] w-full"
  },
  {
    id: 3,
    title: "WEB DEVELOPMENT",
    img: WBF1,
    link: "https://github.com/anjubhargavi1224",
    className: "h-[220px] w-full"
  },
  {
    id: 4,
    title: "GRAPHIC DESIGNERS",
    img: GDF2,
    link: "https://github.com/anjubhargavi1224",
    className: "h-[220px] w-full"
  },
  {
    id: 5,
    title: "PRODUCT DESIGNERS",
    img: PDF1,
    link: "https://github.com/anjubhargavi1224",
    className: "h-[220px] w-full"
  },
  {
    id: 5,
    title: "UI/UX DESIGNERS",
    img: UIF1,
    link: "https://github.com/anjubhargavi1224",
    className: "h-[220px] w-full"
  },
];

const Domains = () => {
  return (
    <div className="bg-[#001f3f] text-white min-h-screen p-10">
       <h1 className="text-white text-3xl font-bold pb-5">FREELANCERS</h1>
      <div className="grid grid-cols-3 gap-4 grid-rows-2">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group ${project.className}`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-lg object-cover transition-transform duration-300 transform group-hover:scale-105 w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <p className="text-white font-semibold">{project.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Domains;
