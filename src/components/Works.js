import React, { useEffect } from 'react';
import code from '../assets/code2.png';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// Reusable Work Item Component
const WorkItem = ({ title, description, demoLink, codeLink, index }) => {
    return (
        <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            data-aos="fade-up" // AOS animation
            data-aos-delay={index * 100} // Delay for each item
        >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-white tracking-wider'>{title}</span>
                <p className='text-center'>{description}</p>
                <div className='pt-8 text-center'>
                    <a href={demoLink}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                    </a>
                    <a href={codeLink}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Works = () => {
    const workItems = [
        {
            title: 'Ecommerce',
            description: 'An Ecommerce built with React and MongoDB',
            demoLink: '/',
            codeLink: '/',
        },
        {
            title: 'Currency Converter',
            description: 'Currency Converter web application built with React and MongoDB',
            demoLink: '/',
            codeLink: '/',
        },
        {
            title: 'Rick and Morty',
            description: 'Rick and Morty web application built with React and MongoDB',
            demoLink: '/',
            codeLink: '/',
        },
        {
            title: 'To-Do List',
            description: 'A To-Do list application built with React and MongoDB',
            demoLink: '/',
            codeLink: '/',
        },
        {
            title: 'Blog App',
            description: 'A Blog web application built with React and MongoDB',
            demoLink: '/',
            codeLink: '/',
        },
        {
            title: 'Age Calculator',
            description: 'Age Calculator web application built with React and MongoDB',
            demoLink: '/',
            codeLink: '/',
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Projects
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent Projects</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {workItems.map((item, index) => (
                        <WorkItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            demoLink={item.demoLink}
                            codeLink={item.codeLink}
                            index={index} // Pass index for delay
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
