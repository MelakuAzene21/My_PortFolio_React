import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiGraphql } from 'react-icons/si';

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const skills = [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
        { name: 'React', icon: <FaReact className="text-cyan-500" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-500" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
    ];

    // Define animations for four directions
    const animations = ['fade-up', 'fade-down', 'fade-left', 'fade-right'];

    return (
        <div name='skills' className='w-full h-auto dark:bg-gray-900 dark:text-gray-300 text-gray-700 py-12'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
                        Skills
                    </p>
                    <p className='py-4 text-2xl text-center'>
                        I enjoy diving into new things. Here are some technologies I've worked with:
                    </p>
                </div>

                {/* Skills Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 text-gray-300'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className='skill-card flex flex-col justify-center items-center bg-[#112240] shadow-lg shadow-cyan-500/50 hover:scale-110 transform transition-transform duration-500 p-6 rounded-2xl border border-cyan-500 hover:bg-cyan-500 hover:text-[#0a192f]'
                            data-aos={animations[index % 4]} // Cycle through 'fade-up', 'fade-down', 'fade-left', 'fade-right'
                            data-aos-delay={index * 100} // Staggered delay for smoother animation
                        >
                            <div className="text-6xl mb-4">{skill.icon}</div>
                            <p className='my-4 text-xl font-semibold'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;