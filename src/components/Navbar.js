// import React, { useState, useContext } from "react";
// import { ThemeContext } from "./ThemProvider";
// import "../App.css";
// import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
// import { Link } from "react-scroll";
// import BDU1405424R from "../assets/myLogo.png";

// const Navbar = () => {
//     const [nav, setNav] = useState(false);
//     const { theme, toggleTheme } = useContext(ThemeContext);

//     const handleClick = () => setNav(!nav);

//     return (
//         <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-30">
//             <div>
//                 <Link to="home" smooth={true} duration={500}>
//                     <img src={BDU1405424R} alt="MA" className="cursor-pointer w-10 h-10 rounded-full" />
//                 </Link>
//             </div>

//             {/* Menu */}
//             <ul className="hidden md:flex gap-x-8">
//                 <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//                 <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//                 <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
//                 <li><Link to="work" smooth={true} duration={500}>Projects</Link></li>
//                 <li><Link to="service" smooth={true} duration={500}>Services</Link></li>
//                 <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
//                 <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>

//                 {/* Dark/Light Mode Toggle */}
//                 <li>
//                     <button onClick={toggleTheme} className="text-xl">
//                         {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
//                     </button>
//                 </li>
//             </ul>

//             {/* Mobile Menu */}
//             <div onClick={handleClick} className="md:hidden z-10">
//                 {!nav ? <FaBars /> : <FaTimes />}
//             </div>

//             <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
//                 <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
//                 <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
//                 <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
//                 <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Projects</Link></li>
//                 <li className="py-6 text-4xl"><Link onClick={handleClick} to="service" smooth={true} duration={500}>Services</Link></li>
//                 <li className="py-6 text-4xl"><Link onClick={handleClick} to="resume" smooth={true} duration={500}>Resume</Link></li>
//                 <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>

//                 {/* Dark/Light Mode Toggle for Mobile */}
//                 <li className="py-6 text-4xl">
//                     <button onClick={toggleTheme} className="text-4xl">
//                         {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
//                     </button>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Navbar;
import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemProvider";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Import Framer Motion
import BDU1405424R from "../assets/myLogo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-30">
            <div>
                <Link to="home" smooth={true} duration={500}>
                    <img src={BDU1405424R} alt="MA" className="cursor-pointer w-10 h-10 rounded-full" />
                </Link>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex gap-x-8">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="work" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="service" smooth={true} duration={500}>Services</Link></li>
                <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>

                {/* Dark/Light Mode Toggle with Animation */}
                <li>
                    <motion.button
                        onClick={toggleTheme}
                        className="text-xl p-2 rounded-full border-2 border-gray-400"
                        whileTap={{ rotate: 180, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
                    </motion.button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
