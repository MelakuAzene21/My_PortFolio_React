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
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col sm:my-6 '>
                <span className='text-lg font-bold text-white tracking-wider'>{title}</span>
                <p className='text-center'>{description}</p>
                <div className='pt-8 text-center'>
                    <a href={demoLink}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg sm:text-sm'>
                            Demo
                        </button>
                    </a>
                    <a href={codeLink}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg sm:text-sm'>
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
        { title: 'Ecommerce', description: 'An Ecommerce built with React and MongoDB,Node', demoLink: 'https://e-market-hbf7.onrender.com', codeLink: '/' },
        { title: 'Currency Converter', description: 'Currency Converter built with React', demoLink: 'https://currency-converter-mern-melekus-websites.onrender.com/', codeLink: '/' },
        { title: 'Rick and Morty', description: 'Rick and Morty app built with React and MongoDB', demoLink: 'https://rick-and-morty-melaku.vercel.app', codeLink: '/' },
        { title: 'News-App', description: 'News appp used to get new information across the world', demoLink: 'https://news-website-in-node.onrender.com/', codeLink: '/' },
        { title: 'Weather App', description: 'A Weather app built with React and and used to forecasting...', demoLink: 'https://weather-forecast-web-app-chi.vercel.app/', codeLink: '/' },
        { title: 'Event Management System', description: 'Event Creation ,ticket selling...', demoLink: '/', codeLink: '/' },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div name='work' className='w-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 sm:p-2 flex flex-col justify-center w-full h-auto'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold border-b-4 text-gray-300 border-cyan-500'>
                        Projects
                    </p>
                    <p className='py-6 text-2xl sm:text-xl text-center'>
                        Check out some of my recent projects
                    </p>
                </div>
                {/* Grid Container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {workItems.map((item, index) => (
                        <WorkItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            demoLink={item.demoLink}
                            codeLink={item.codeLink}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
