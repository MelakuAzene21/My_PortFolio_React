import React from 'react';
import '../CV.css';  // Import the CSS for styling
import mele from '../assets/mele.jpg';

const Resume = () => {
    return (
        <div className="container1 sm:mb-6"  id="resume" >
            <div className="header1">
                <div className="img-area1">
                    <img src={mele} alt="CVimg" width="400" height="200" />
                    <h1>Melaku Azene</h1>
                    <h3>Front End Developer</h3>
                </div>
            </div>
            <div className="main1">
                <div className="left1">
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
                        <li>SQL</li>
                    </ul>

                    <h2>Education</h2>
                    <h3>B.Sc in Computer Science</h3>
                    <p>Bahirdar University</p>
                </div>

                <div className="right">
                    <h2>Work Experience</h2>
                    <h3>Minab Company</h3>
                    <p><strong>Position:</strong> Web Developer</p>
                    <p><strong>Duration:</strong> 2024-</p>
                    <ul>
                        <li>Developed and maintained web applications using React, Node.js, and SQL</li>
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
