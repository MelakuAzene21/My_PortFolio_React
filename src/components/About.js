import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import Card from "./Card"; // Import Card component

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const achievements = [
        {
            title: "Completed Full-Stack Bootcamp",
            description: "Completed a rigorous bootcamp on full-stack web development.",
            image: "path_to_your_certificate_image1.jpg", // Replace with actual path
        },
        {
            title: "Project Management App",
            description: "Developed a project management app used by over 100 users.",
            image: "path_to_your_certificate_image2.jpg", // Replace with actual path
        },
        {
            title: "Published Articles",
            description: "Published several articles on web development topics.",
            image: "path_to_your_certificate_image3.jpg", // Replace with actual path
        },
    ];

    const certifications = [
        {
            title: "Certified Full Stack Web Developer",
            description: "[Certification Authority]",
            image: "path_to_your_certificate_image4.jpg", // Replace with actual path
        },
        {
            title: "JavaScript Essentials",
            description: "[Certification Authority]",
            image: "path_to_your_certificate_image5.jpg", // Replace with actual path
        },
        {
            title: "React Development",
            description: "[Certification Authority]",
            image: "path_to_your_certificate_image6.jpg", // Replace with actual path
        },
    ];

    return (
        <div
            name="about"
            id="about"
            className="w-full  bg-gradient-to-b from-[#0a192f] to-[#112240]  text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full ">
                <div className="py-16 rounded-3xl my-4 bg-gray-900 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>
                                Hi. I'm Melaku, nice to meet you. Please take a look around.
                            </p>
                        </div>
                        <div>
                            <p>
                                A Full Stack Web Developer with experience in building Responsive and
                                Scalable Web apps. In addition to software development, I am also a
                                technical writer—simplifying topics/concepts on the web.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="py-16 rounded-md bg-gray-800 flex flex-col justify-center items-center w-4/6 mt-8">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                Achievements
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
                        {achievements.map((achievement, index) => (
                            <div key={index} data-aos="fade-up">
                                <Card
                                    title={achievement.title}
                                    description={achievement.description}
                                    image={achievement.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="py-16 rounded-md bg-gray-800 flex flex-col justify-center items-center w-4/6 mt-8">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                Certifications
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
                        {certifications.map((certification, index) => (
                            <div key={index} data-aos="fade-up">
                                <Card
                                    title={certification.title}
                                    description={certification.description}
                                    image={certification.image}
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
