import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto px-5">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            About
          </p>
        </div>

        <p className="text-xl mt-18">
          Hello there! My name is Saiganesh Sristla, and I'm a 20-year-old
          second-year BSc IT student with a passion for coding and
          problem-solving. I am deeply fascinated by the world of technology,
          and my goal is to become a proficient full-stack developer.
        </p>

        <br />

        <p className="text-xl">
          Outside the world of codes and algorithms, Cricket and chess are my
          two great passions. The strategic moves in chess and the thrill of the
          game in cricket both resonate deeply with my love for problem-solving
          and teamwork.
        </p>
        <p className="text-xl">
          Feel free to connect with me if you share similar interests or just
          want to chat about the exciting world of technology and sports. Let's
          collaborate, learn, and grow together!
        </p>
      </div>
    </div>
  );
};

export default About;
