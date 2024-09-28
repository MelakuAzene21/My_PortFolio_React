import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import mele from '../assets/mele.jpg';
import { Link } from "react-scroll";
import '../App.css'
const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-[#0a192f] to-[#112240]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white shadow-md animate-fade-in">
                        I'm a Full Stack Web Developer
                    </h2>
                    <p className="text-gray-300 py-4 max-w-md">
                        I am a Junior Full Stack Web Developer. Currently, I love to work on web applications using technologies like React, Tailwind, Next.js, MongoDB, Vue, Node, and Express.
                    </p>
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform transform hover:scale-105"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <img
                        src={mele}
                        alt="my profile"
                        className="w-3/4 h-96 px-1 rounded-full mx-auto md:w-full shadow-lg transition-transform transform hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
