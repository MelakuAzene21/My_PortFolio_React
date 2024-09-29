import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaDatabase, FaUserShield } from 'react-icons/fa';

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
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div name='services' id='service' className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#1e2a38] text-gray-300 flex items-center justify-center'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full'>
                <div className='w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold border-b-4 border-cyan-500'>Services</p>
                    <p className='py-4 text-2xl text-center'>Here are the services I offer:</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center py-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-[#0a192f] rounded-lg shadow-lg p-6 hover:bg-cyan-500 transition-transform duration-300 hover:scale-105'
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {service.icon}
                            <h3 className='text-xl font-bold text-white mb-2'>{service.title}</h3>
                            <p className='text-gray-300'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
