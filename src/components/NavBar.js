import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/R-removebg-preview.png';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";  

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

          <Navbar.Brand href="/imag/r.jpg">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>


          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about me" className={activeLink === 'about me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about me')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#Connect" className={activeLink === 'Connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Connect')}>Connect</Nav.Link>
            </Nav>


            {/* <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/x5fgh"><img src={navIcon1} alt="github" /></a>
                <a href="https://www.linkedin.com/in/raghadal-zahrani/"><img src={navIcon2} alt="linkedin" /></a>
                <a href="https://x.com/uqucis?s=21"><img src={navIcon3} alt="x" /></a>
              </div>
            </span> */}


          </Navbar.Collapse>   
        </Container>
      </Navbar>
    </Router>
  )
}