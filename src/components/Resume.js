// import React from 'react';
// import '../CV.css';  // Import the CSS for styling
// import mele from '../assets/mele.jpg';

// const Resume = () => {
//     return (
//         <div className="container1 sm:mb-6"  id="resume" >
//             <div className="header1">
//                 <div className="img-area1">
//                     <img src={mele} alt="CVimg" width="400" height="200" />
                    
//                 </div>
//                 <h1>Melaku Azene</h1>
//                 <h3>FullStackDeveloper</h3>
//             </div>
//             <div className="main1">
//                 <div className="left1">
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

//                 <div className="right">
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
                <h1 data-aos="fade-right">Melaku Azene</h1>
                <h3 data-aos="fade-left">FullStack Developer</h3>
            </div>
            <div className="main1">
                <div className="left1" data-aos="fade-up">
                    <h2>Personal Information</h2>
                    <p><strong>Name:</strong> Melaku Azene</p>
                    <p><strong>Age:</strong> 21</p>
                    <p><strong>Email:</strong> <a href="mailto:melakuaezene623@gmail.com">melakuaezene623@gmail.com</a></p>
                    <p><strong>Phone:</strong> 0918219856</p>

                    <h2>Skills</h2>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>TypesScript</li>
                        <li>Next.js</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>

                    <h2>Education</h2>
                    <h4>B.Sc in Computer Science</h4>
                    <p>Bahirdar University</p>
                </div>

                <div className="right" data-aos="fade-left">
                    <h2>Work Experience</h2>
                    <h3>Minab Company</h3>
                    <p><strong>Position:</strong> Intern Web Developer</p>
                    <p><strong>Duration:</strong> 2024-</p>
                    <ul>
                        <li>Developed and maintained web applications using React, Node.js, and MySQL</li>
                        <li>Implemented responsive design using Flexbox and media queries</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality web products</li>
                    </ul>

                    <h3>Minab Company</h3>
                    <p><strong>Position:</strong> Full Stack Developer</p>
                    <p><strong>Duration:</strong> 2019-2024</p>
                    <ul>
                        <li>Optimized website performance and user experience using best practices</li>
                        <li>Worked with clients to understand their needs and deliver custom solutions</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;
