import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setnav] = useState(false);

  const link = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 1,
      link: "About",
    },
    {
      id: 1,
      link: "Portfolio",
    },
    {
      id: 1,
      link: "Experience",
    },
    {
      id: 1,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-4xl font-signature ml-2">Saiganesh</h1>
      </div>

      <ul className="hidden md:flex">
        {link.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setnav(!nav)}
        className="text-gray-500 pr-4 cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {link.map(({ id, link }) => (
            <li key={id} className="text-4xl px-4 py-6 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
