import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Skills from "./components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use the CDN link in your index.html
import React, { useEffect } from 'react';
import Services from "./components/Services";
import Resume from "./components/Resume"
export default function App(){
  useEffect(() => { 
        AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return(
    <div>
      <Navbar />
      <Home  />
      <About />
      <Skills />
      <Works />
      <Services />
      <Resume />
      <Contact />
    </div>
  )
}