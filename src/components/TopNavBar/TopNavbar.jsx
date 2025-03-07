import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-scroll";
import './topNavBar.scss'
import Button from 'react-bootstrap/Button';

const TopNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? '#2b1254' : 'transparent', // Change '#f00' to the desired background color
    transition: 'background-color 0.3s ease', // Optional: Add a smooth transition
  };
const toggleMenu = () =>{
  setShowMenu(!showMenu)
  var menuBar = document.getElementById("mobMenu-bar");
  menuBar.classList.toggle("change");


}
const resetToggle = () =>{
  setShowMenu(!showMenu)
  var menuBar = document.getElementById("mobMenu-bar");
  menuBar.classList.remove("change");


}
  return (
    <>
    <Container fluid>
      <Row className="desktopNav">
        <Col>
        <nav id="desktopNav" style={navbarStyle} className="overflow-hidden d-none d-sm-block d-lg-block d-xl-block">
        {/* <a className="navbar-brand">GK</a> */}
    
        <Link to="home" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
      
        <Link to ="about" className="navLink" activeClass="active" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
      
        <Link to="projects" className="navLink" activeClass="active" smooth={true} offset={-50} duration={500}>Projects</Link>
     
        <Link to="contact" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
   
        </nav>
       </Col>
      </Row>
      <Row id="mobMenu">
        <Col>
        <div onClick={()=>toggleMenu()} className="d-flex d-sm-none d-lg-none d-xl-none d-md-none position-absolute">
          <span className="navbar-brand d-xl-none d-md-none position-fixed d-lg-none text-light" >GK</span>

        <div id="mobMenu-bar">
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>
        <nav class="mobNav" id="mobNav" style={{display: showMenu ? 'grid' : 'none'}} >
          
            <Link to="home" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={1400} onClick={()=>{resetToggle()}}>Home</Link>
            
            <Link to ="about" className="navLink" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{resetToggle()}}>About</Link>
          
            <Link to="projects" className="navLink" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{resetToggle()}}>Projects</Link>
        
            <Link to="contact" className="navLink" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{resetToggle()}}>Contact</Link>
          
        </nav> 
</div>
        </Col>
      </Row>
    </Container>
   
    </>
  );
}

export default TopNavbar;