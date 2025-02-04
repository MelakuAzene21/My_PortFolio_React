
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../CV.css';
// import mele from '../assets/mele.jpg';

// const Resume = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 1200, // Animation duration
//         });
//     }, []);

//     return (
//         <div className="container1 sm:mb-6" id="resume">
//             <div className="header1" data-aos="fade-down">
//                 <div className="img-area1" data-aos="zoom-in">
//                     <img src={mele} alt="CVimg" width="400" height="200" />
//                 </div>
//                 <h1 data-aos="fade-right">Melaku Azene</h1>
//                 <h3 data-aos="fade-left">FullStack Developer</h3>
//             </div>
//             <div className="main1">
//                 <div className="left1" data-aos="fade-up">
//                     <h2>Personal Information</h2>
//                     <p><strong>Name:</strong> Melaku Azene</p>
//                     <p><strong>Age:</strong> 21</p>
//                     <p><strong>Email:</strong> <a href="mailto:melakuaezene623@gmail.com">melakuaezene623@gmail.com</a></p>
//                     <p><strong>Phone:</strong> 0918219856</p>

//                     <h2>Skills</h2>
//                     <ul>
//                         <li>HTML/CSS</li>
//                         <li>Javascript</li>
//                         <li>React</li>
//                         <li>Node.js</li>
//                         <li>Express.js</li>
//                         <li>TypesScript</li>
//                         <li>Next.js</li>
//                         <li>MongoDB</li>
//                         <li>MySQL</li>
//                     </ul>

//                     <h2>Education</h2>
//                     <h4>B.Sc in Computer Science</h4>
//                     <p>Bahirdar University</p>
//                 </div>

//                 <div className="right" data-aos="fade-left">
//                     <h2>Work Experience</h2>
//                     <h3>Minab Company</h3>
//                     <p><strong>Position:</strong> Intern Web Developer</p>
//                     <p><strong>Duration:</strong> 2024-</p>
//                     <ul>
//                         <li>Developed and maintained web applications using React, Node.js, and MySQL</li>
//                         <li>Implemented responsive design using Flexbox and media queries</li>
//                         <li>Collaborated with cross-functional teams to deliver high-quality web products</li>
//                     </ul>

//                     <h3>Minab Company</h3>
//                     <p><strong>Position:</strong> Full Stack Developer</p>
//                     <p><strong>Duration:</strong> 2019-2024</p>
//                     <ul>
//                         <li>Optimized website performance and user experience using best practices</li>
//                         <li>Worked with clients to understand their needs and deliver custom solutions</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Resume;





import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CV.css';
import mele from '../assets/mele.jpg';

const Resume = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <div className="container1 sm:mb-6" id="resume">
            <div className="header1" data-aos="fade-down">
                <div className="img-area1" data-aos="zoom-in">
                    <img src={mele} alt="CVimg" width="400" height="200" />
                </div>
                <h1 data-aos="fade-right" className="text-3xl font-bold text-green-400">Melaku Azene</h1>
                <h3 data-aos="fade-left" className="text-xl text-cyan-400">Full Stack Developer</h3>
            </div>
            <div className="main1">
                {/* Left Section */}
                <div className="left1" data-aos="fade-up">
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> Melaku Azene</p>
                    <p><strong>Age:</strong> 21</p>
                    <p><strong>Email:</strong> <a href="mailto:melakuaezene623@gmail.com" className="text-cyan-400 hover:underline">melakuaezene623@gmail.com</a></p>
                    <p><strong>Phone:</strong> 0918219856</p>

                    <h2>Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>TypeScript</li>
                        <li>Next.js</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>

                    <h2>Education</h2>
                    <h4 className="font-semibold text-lg">B.Sc in Computer Science</h4>
                    <p>Bahirdar University</p>

                    <h2>Languages</h2>
                    <ul className="list-disc list-inside">
                        <li>Amharic (Native)</li>
                        <li>English (Fluent)</li>
                    </ul>

                    <h2>Hobbies & Interests</h2>
                    <ul className="list-disc list-inside">
                        <li>Coding & Open Source Contributions</li>
                        <li>Reading Tech Blogs & Articles</li>
                        <li>Problem Solving </li>
                        <li> Algorithm Challenges</li>
                        <li>Exploring New Technologies</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="right" data-aos="fade-left">
                    <h2>Work Experience</h2>

                    {/* Efuyegella Software Company */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-cyan-400">Full Stack Developer Intern</h3>
                        <p className="text-sm text-gray-400">Efuyegella Software Company | 5 Months</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Developed and maintained scalable full-stack applications using modern frameworks.</li>
                            <li>Worked with React, Node.js, and databases for dynamic web applications.</li>
                            <li>Collaborated in a team setting to deliver high-quality software solutions.</li>
                            <li>Enhanced problem-solving and debugging skills through real-world projects.</li>
                        </ul>
                    </div>

                    {/* Pixel Addis Software Company */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-cyan-400">Backend Developer Intern (Paid)</h3>
                        <p className="text-sm text-gray-400">Pixel Addis Software Company, Addis Ababa | January 4, 2025 – Present</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Designed and implemented robust backend solutions using Node.js and Express.js.</li>
                            <li>Developed API services to improve software efficiency and scalability.</li>
                            <li>Collaborated with frontend developers for seamless integration.</li>
                            <li>Applied agile practices to deliver high-quality software on schedule.</li>
                            <li>Enhanced security and performance of backend systems to meet industry standards.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
