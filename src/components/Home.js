import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import mele from '../assets/mele.jpg';
import { Link } from "react-scroll";
import Typical from "react-typical";
import '../App.css'
const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-[#0a192f] to-[#112240] "
        >
            <div className="max-w-screen-lg mx-auto flex flex-col gap-20 items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full ">
                    <div className="sm:mt-16 shadow-md animate-fade-in">
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-blue-500">
                            <Typical
                                loop={Infinity} // Infinite looping
                                wrapper="p"
                                steps={[
                                    "I'm a Full Stack Developer", 3000, // Type the text with a delay of 3000ms
                                    "", 2000, // Add a pause after the text disappears
                                ]}
                            />
                        </h1>
                    </div>


                    {/* <div className="sm:mt-16 shadow-md animate-fade-in">
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-blue-500">
                            <Typical
                                loop={Infinity} // Infinite looping
                                wrapper="p"
                                steps={[
                                    "I", 500, // Delay of 500ms for each letter
                                    "I'", 500,
                                    "I'm", 500,
                                    "I'm ", 500,
                                    "I'm a", 500,
                                    "I'm a ", 500,
                                    "I'm a F", 500,
                                    "I'm a Fu", 500,
                                    "I'm a Ful", 500,
                                    "I'm a Full", 500,
                                    "I'm a Full ", 500,
                                    "I'm a Full S", 500,
                                    "I'm a Full St", 500,
                                    "I'm a Full Sta", 500,
                                    "I'm a Full Stac", 500,
                                    "I'm a Full Stack", 500,
                                    "I'm a Full Stack ", 500,
                                    "I'm a Full Stack D", 500,
                                    "I'm a Full Stack De", 500,
                                    "I'm a Full Stack Dev", 500,
                                    "I'm a Full Stack Deve", 500,
                                    "I'm a Full Stack Devel", 500,
                                    "I'm a Full Stack Develo", 500,
                                    "I'm a Full Stack Develop", 500,
                                    "I'm a Full Stack Develope", 500,
                                    "I'm a Full Stack Developer", 500, // Final word delay
                                    "", 2000, // Pause for 2 seconds
                                ]}
                            />
                        </h1>
                    </div> */}

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
                        className="w-3/4 h-96 px-4 rounded-full mx-auto md:w-full shadow-lg transition-transform transform hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
