import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
// import Card from "./Card"; // Import Card component
import minab from "../assets/Images/Full page photo.jpg"; // Import image
import udacity from "../assets/Images/CERTIFICATE_UDACITY.jpg"
import "../animate-image.css"
import MYImage2 from '../assets/3C2A8521_1.JPG';
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const certifications = [
        {
            description: "Full Stack Web Developer",
            image: minab, // Replace with actual path
        },
        {
            description: "JavaScript Essentials",
            image:udacity,
        },
         ];
    return (
        <div
            name="about"
            id="about"
            className="w-full  dark:bg-gray-900 dark:text-gray-300  "
        >
            <div className="flex flex-col justify-center items-center w-full h-full ">
                <div className="py-16 rounded-3xl my-4 flex flex-col justify-center items-center w-full shadow-lg shadow-cyan-500/50">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                   
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        {/* Left Section: Image */}
                        <div
                            className="flex justify-center items-center"
                            data-aos="fade-right"
                        >
                            <img
                                src={MYImage2}
                                alt="Melaku"
                                className="rounded-lg shadow-lg shadow-cyan-500/50 w-3/4 sm:w-full max-h-[300px] object-contain"
                            />
                        </div>

                        {/* Right Section: About Me */}
                        <div
                            className="flex flex-col gap-6 text-gray-800 dark:text-gray-300"
                            data-aos="fade-left"
                        >
                            {/* Developer Bio */}
                            <div className="flex items-center gap-4">
                                <span className="text-cyan-500 text-2xl">
                                    <i className="fas fa-code"></i>
                                </span>
                                <p>
                                    I'm a <span className="text-cyan-500 font-bold">MERN Stack Developer</span> with a strong passion for building modern, fast, and user-friendly web applications. I specialize in creating full-featured solutions using <span className="text-cyan-500 font-semibold">MongoDB, Express.js, React, and Node.js</span>.
                                </p>
                            </div>

                            {/* Passion & Mission */}
                            <div className="flex items-center gap-4">
                                <span className="text-cyan-500 text-2xl">
                                    <i className="fas fa-bolt"></i>
                                </span>
                                <p>
                                    I enjoy turning complex problems into clean, elegant solutions. My goal is to deliver impactful digital experiences through scalable and maintainable code.
                                </p>
                            </div>

                              {/* Social Links */}
                            <div className="flex flex-wrap justify-center gap-8 pt-2 text-lg  ml-4">
                                <a
                                    href="https://github.com/MelakuAzene21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-500 transition-colors text-wh"
                                >
                                    <i className="fab fa-github text-2xl"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/help/linkedin/answer/a1631613"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-500 transition-colors"
                                >
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                                <a
                                    href="https://t.me/melaku_tech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-500 transition-colors"
                                >
                                    <i className="fab fa-telegram text-2xl"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/melakuaz_21/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 transition-colors"
                                >
                                    <i className="fab fa-instagram text-2xl"></i>
                                </a>
                            </div>
                        </div>

                    </div>


           
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4 mt-6">
                            <h4 className="text-4xl font-bold inline border-b-4 mt-3 border-cyan-500">
                                Certifications
                            </h4>
                        </div>
                    </div>
                   
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 mx-20">
                        {certifications.map((certification, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 mb-8"
                                data-aos="fade-up"
                            >
                                <img
                                    src={certification.image}
                                    alt="certification"
                                    className="card-image w-full h-auto border-cyan-500"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
