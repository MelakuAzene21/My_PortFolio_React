import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Skills from "./components/Skills";

export default function App(){
  return(
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}