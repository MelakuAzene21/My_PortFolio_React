import React from 'react';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
                <div className='w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with:</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center py-8'>
                    {[
                        'HTML', 'CSS', 'JavaScript', 'React',
                        'GitHub', 'Node.js', 'MongoDB', 'Vue',
                        'Express', 'Tailwind', 'GraphQL'
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className='skill-card shadow-lg shadow-[#040c16] hover:scale-110 duration-500 transform transition-transform'
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <p className='my-4 text-xl'>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
