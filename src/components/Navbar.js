import React, { useState } from 'react';
import '../index.css'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaTelegram,
    FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-30'>
            <div>

                <Link to='home' smooth={true} duration={500}>
                    <h1 className=' font-thin text-2xl italic font-serif'>MA</h1>
                </Link>
            </div>
            {/* menu */}
            <ul className='hidden md:flex gap-x-8'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='service' smooth={true} duration={500}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='resume' smooth={true} duration={500}>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
               <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='service' smooth={true} duration={500}>
                        Services
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
                        Resume
                    </Link>
                </li>


                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='http://linkedin.com/in/melaku-azene-1ba3012b5'
                        >
                            Linkedin <FaLinkedinIn size={30} />
                        </a>
                    </li>



                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://t.me/melaku_tech'
                        >
                            Telegram <FaTelegram size={30} />
                        </a>
                    </li>


                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/MelakuAzene21'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:melakuazene623@gmail.com"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};
export default Navbar;