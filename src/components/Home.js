import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import mele from '../assets/mele.jpg';
import { Link } from "react-scroll";
import Typical from "react-typical";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-[#0a192f] to-[#112240] flex items-center justify-center"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 gap-12">
                {/* Left Section */}
                <div className="flex flex-col justify-center h-full text-center md:text-left">
                    {/* Dynamic Typing Section */}
                    <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-blue-500">
                        <Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                "I'm a Full Stack Developer", 3000,
                                "I Build Scalable Web Apps", 3000,
                                "Let's Create Something Great!", 3000,
                            ]}
                        />
                    </h1>

                    {/* Short Description */}
                    <p className="text-gray-300 py-6 max-w-md">
                        I'm a Junior Full Stack Web Developer passionate about building modern, responsive, and scalable web applications using React, Tailwind, Node.js, and MongoDB. Always eager to learn and grow!
                    </p>

                    {/* Button */}
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 cursor-pointer transition-transform transform hover:scale-105"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-center items-center">
                    <img
                        src={mele}
                        alt="My Profile"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
