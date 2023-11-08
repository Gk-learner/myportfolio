import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-scroll";
import './topNavBar.scss'
import Button from 'react-bootstrap/Button';

// import Nav from 'react-bootstrap/Nav';
// import Home from '../HomePage/Home';
// import About from '../About/About';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact/Contact';

const TopNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  function menuOnClick() {
    document.getElementById("mobMenu-bar").classList.toggle("change");
    document.getElementById("mobNav").classList.toggle("change");
    document.getElementById("mobMenu-bg").classList.toggle("change-bg");
  }
 
 
  return (
    <>
    <Container fluid>
      <Row className="desktopNav">
        <Col>
        <nav id="desktopNav" className="overflow-hidden d-none d-sm-block d-lg-block d-xl-block">
        {/* <a className="navbar-brand">GK</a> */}
    
        <Link to="home" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
      
        <Link to ="about" className="navLink" activeClass="active" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
      
        <Link to="projects" className="navLink" activeClass="active" smooth={true} offset={-50} duration={500}>Projects</Link>
     
        <Link to="contact" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
        {/* <Link to="/contact" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}> */}
        {/* <Button className="subscribe-button" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>Let's Collaborate</Button> */}

        {/* </Link> */}
    </nav>
    {/* <Button className="subscribe-button bg-light d-xl-none d-md-none d-lg-none" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>Let's Collaborate</Button> */}
    <div id="mobMenu" onClick={()=>setShowMenu(!showMenu)} className=" d-flex d-sm-none d-lg-none d-xl-none d-md-none position-absolute">
    <span className="navbar-brand d-xl-none d-md-none d-lg-none text-light" ><a>GK</a> </span>

  <div id="mobMenu-bar">
    <div id="bar1" class="bar"></div>
    <div id="bar2" class="bar"></div>
    <div id="bar3" class="bar"></div>
  </div>
  <nav class="mobNav" id="mobNav" style={{display: showMenu ? 'grid' : 'none'}}  onClick={()=>{setShowMenu(!showMenu)}}>
      <Link to="home" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{setShowMenu(false)}}>Home</Link>
      
      <Link to ="about" className="navLink" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}}>About</Link>
    
      <Link to="projects" className="navLink" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}}>Projects</Link>
   
      <Link to="contact" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{setShowMenu(false)}}>Contact</Link>
     
  </nav> 
</div>

<div class="mobMenu-bg" id="mobMenu-bg" d-xl-none d-lg-none></div>

        </Col>
      </Row>
    </Container>
   
    </>
  );
}

export default TopNavbar;