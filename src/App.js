import './App.css';
import About from './components/About/About.jsx';
import TopNavbar from './components/TopNavBar/TopNavbar';
import Home from './components/HomePage/Home.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom'
import Projects from './components/Projects/Projects.jsx';
import { Element } from 'react-scroll';


function App() {
  return (
    <>
    <BrowserRouter>
      
     <TopNavbar/>
     <Home />
     <Element name="about">
     <About />
     </Element>
    <Projects />
    <Contact />
   
  </BrowserRouter>
   
    </>
  );
}

export default App;
