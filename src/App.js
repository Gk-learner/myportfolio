import './App.css';
import About from './components/About/About.jsx';
import TopNavbar from './components/TopNavBar/TopNavbar';
import Home from './components/HomePage/Home.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects/Projects.jsx';
import { Element } from 'react-scroll';


function App() {
  return (
    <>
    <BrowserRouter>
    {/* <div> */}
      
     <TopNavbar/>
     <Home />
     <Element name="about">
     <About />

     </Element>
    <Projects />
    <Contact />
     {/* {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> 
     </Routes>
      </div> */}
   
  </BrowserRouter>
   
    </>
  );
}

export default App;
