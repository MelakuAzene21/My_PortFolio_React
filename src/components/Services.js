import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { FaCode, FaPaintBrush, FaMobileAlt, FaDatabase, FaUserShield } from 'react-icons/fa'; // Import icons

const Services = () => {
    const services = [
        {
            title: 'Software Development',
            description: 'Building scalable and efficient software solutions tailored to your business needs.',
            icon: <FaCode className='text-4xl mb-4 text-cyan-500' />
        },
        {
            title: 'Web Design',
            description: 'Creating visually stunning and user-friendly websites to enhance user experience.',
            icon: <FaPaintBrush className='text-4xl mb-4 text-cyan-500' />
        },
        {
            title: 'Frontend Development',
            description: 'Developing responsive and interactive user interfaces using the latest technologies.',
            icon: <FaMobileAlt className='text-4xl mb-4 text-cyan-500' />
        },
        {
            title: 'Backend Development',
            description: 'Implementing robust server-side logic and database management for your applications.',
            icon: <FaDatabase className='text-4xl mb-4 text-cyan-500' />
        },
        {
            title: 'UI/UX Design',
            description: 'Designing intuitive user experiences and interfaces that engage users effectively.',
            icon: <FaUserShield className='text-4xl mb-4 text-cyan-500' />
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    return (
        <div name='services' id='service' className='w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#1e2a38] text-gray-300 flex items-center justify-center'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Services</p>
                    <p className='py-4 text-2xl'>Here are the services I offer:</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center py-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-[#0a192f]  rounded-lg shadow-lg transition-transform duration-300 p-6 flex flex-col items-center hover:bg-cyan-500 hover:shadow-2xl hover:scale-105' // Updated hover effects
                            data-aos="fade-up" // AOS animation
                            data-aos-delay={index * 100} // Delay for each item
                        >
                            {service.icon} {/* Icon for each service */}
                            <h3 className='text-xl font-bold mb-2 text-white'>{service.title}</h3>
                            <p className='text-gray-300'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
