import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import different images for each project
import ecommerceImg from '../assets/ecommerce.png';
import currencyImg from '../assets/currency.png';
import rickMortyImg from '../assets/rickandmorty.png';
import newsAppImg from '../assets/newsApp.png';
import weatherAppImg from '../assets/weather.png';
import eventHomePage from '../assets/eventHomePage.png';
import pharmacyImg from '../assets/pharmacy.png';
import userFinder from '../assets/user-finder.png';
import movies from '../assets/movies.png'
import blog from '../assets/blogcoverpng.png'
import clinicImage from '../assets/clinicCover.png'
// Reusable Work Item Component
const WorkItem = ({ title, description, demoLink, codeLink, bgImage, animation, index }) => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            data-aos={animation} // Dynamic AOS animation
            data-aos-delay={index * 100} // Delay for each item
        >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col sm:my-6 bg-black bg-opacity-50 p-4 rounded-md'>
                <span className='text-lg font-bold text-white tracking-wider'>{title}</span>
                <p className='text-center text-sm'>{description}</p>
                <div className='pt-4 text-center'>
                    <a href={demoLink} target='_blank' rel='noopener noreferrer'>
                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>
                            Demo
                        </button>
                    </a>
                    <a href={codeLink} target='_blank' rel='noopener noreferrer'>
                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-sm'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Works = () => {
    // Define animations for four directions
    const animations = ['fade-up', 'fade-down', 'fade-left', 'fade-right'];

    // Project details with unique images
    const workItems = [
        { title: 'Event Management System', description: 'Create events, sell tickets, and more.', demoLink: 'https://event-hub-vercel.vercel.app/', codeLink: '/', bgImage: eventHomePage },
        { title: 'Ecommerce', description: 'An Ecommerce built with React, MongoDB, and Node.', demoLink: 'https://e-market-hbf7.onrender.com', codeLink: '/', bgImage: ecommerceImg },
        { title: 'Clinic Appointement', description: 'Clinic Appointement web app built with React,...', demoLink: 'https://clinic-appointment-nine.vercel.app/', codeLink: '/', bgImage: clinicImage },

        { title: 'Blog', description: 'Blog app built with React, .', demoLink: 'https://blog-app-wheat-mu.vercel.app/', codeLink: '/', bgImage: blog },
        { title: 'Cinema Stream and TV Shows ', description: 'a Cinema stream and TV Shows built with React and TMDB.', demoLink: 'https://cinema-stream-and-tv-shows.vercel.app/', codeLink: '/', bgImage: movies },
        { title: 'News-App', description: 'News app for global news updates.', demoLink: 'https://news-website-in-node.onrender.com/', codeLink: '/', bgImage: newsAppImg },
        { title: 'Weather App', description: 'Weather forecasting app built with React.', demoLink: 'https://weather-forecast-web-app-chi.vercel.app/', codeLink: '/', bgImage: weatherAppImg },
        { title: 'Plateform-User-Finder', description: 'User Finder app built with React with Typescript.', demoLink: 'https://user-finder-app-pi.vercel.app/', codeLink: '/', bgImage: userFinder },
        { title: 'Rick and Morty', description: 'Rick and Morty app built with React and MongoDB.', demoLink: 'https://rick-and-morty-melaku.vercel.app', codeLink: '/', bgImage: rickMortyImg },
        { title: 'Pharmacy Management System', description: 'Pharmacy Management System built with React.', demoLink: 'https://incredible-salamander-ba3ec5.netlify.app//', codeLink: '/', bgImage: pharmacyImg },
        { title: 'Currency Converter', description: 'Currency Converter built with React.', demoLink: 'https://currency-converter-mern-melekus-websites.onrender.com/', codeLink: '/', bgImage: currencyImg },

    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div name='work' className='w-fulldark:bg-gray-900 dark:text-gray-300 py-12'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto'>
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
                            bgImage={item.bgImage}
                            animation={animations[index % 4]} // Cycle through 'fade-up', 'fade-down', 'fade-left', 'fade-right'
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
