import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
// import mycv from '../assets/pdfs/Raghad-cv.pdf';


import { FaLinkedin, FaGithub } from 'react-icons/fa';

 import navIcon1 from '../assets/img/Twitter_X_White_Logo_PNG-removebg-preview.png';



// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer","Project Management", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="about me">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}


                <h3>Hi everyone</h3>
                <h1>I'm   <span style={{ color: '#9a3484' }}>RAGHAD</span>   </h1>
                


                <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Project Management", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h2>
                  <p>Senior🎓.</p>


   

<span className="navbar-text">
<div className="social-icon">
      <a href="https://www.linkedin.com/in/raghadal-zahrani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" ><FaLinkedin /></a>
      <a href="https://github.com/x5fgh?tab=projects"><FaGithub /></a>
      <a href="https://x.com/uqucis?s=21"><img src={navIcon1} alt="x" /></a>
      {/* <a href="https://x.com/uqucis?s=21&t=0DlzpU8PH3KxzG_Waz_mQw" ><FaTwitter/></a> */}
    </div>
    </span>

{/* cv */}
<a href="/assets/pdfs/Raghad-cv.pdf" download target="_blank" rel="noopener noreferrer">
  <button className="buttonCV">
    <svg
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      height="40"
      width="40"
      className="buttonicon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
      <path d="M7 11l5 5l5 -5"></path>
      <path d="M12 4l0 12"></path>
    </svg>
    <span className="buttontext">Download CV</span>
  </button>
</a>


                                                     {/*السهم ؟ */}
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}

              </div>}

            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>


        </Row>
      </Container>
      
    </section>
  )
}