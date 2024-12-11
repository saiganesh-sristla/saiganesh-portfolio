import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg flex flex-col items-center justify-center px-5 mx-auto h-full md:flex-row">
        <div className="flex flex-col h-full justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a full stack developer
          </h2>
          <p className="text-gray-500 my-4 max-w-md">
            Passionate and dedicated IT student seeking opportunities to further
            enhance my skills in the field of technology. Currently learning
            Backend with Nodejs and interested in building full stack
            applications.
          </p>
          <div>
            <button className="text-white w-fit flex rounded-md items-center px-6 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 group cursor-pointer">
              <a href="/resume.pdf" download={true} target="_blank" rel="noreferrer">download cv</a>
              <span className="ml-1 group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://img.freepik.com/free-vector/young-programmer-working-laptop-computer-cartoon-character_24797-2123.jpg?semt=ais_hybrid"
            alt="my profile"
            className="mx-auto w-2/3 md:w-full rounded-2xl"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
