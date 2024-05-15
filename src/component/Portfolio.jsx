import React, { useState, useRef, useEffect} from "react";
import { motion } from "framer-motion";
import "./Portfolio.css"; 
import Nav from "./nav/Nav.jsx";
import { TiSocialLinkedin,TiSocialGithub  } from "react-icons/ti";
import { AiFillGoogleCircle } from "react-icons/ai";
import About  from './section/About.jsx';
import Project  from './section/Project.jsx';
import Skills  from './section/Skills.jsx';
import Addtionals  from './section/Addtionals.jsx';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";





import Darray from './Darray.js';


const Portfolio = () => {

  const [section, setSection] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [activeDown, setDown] = useState("up");



  const projectRef = useRef(null);
  const addtionalRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);



  const handleDown=(e)=>{
    if(activeDown === "up"){
      setDown("down");
      const sec = document.getElementById('section');
      const intro = document.getElementById('intro');
      sec.style.zIndex='1'
      intro.style.zIndex='-1'
    }
    else{
      setDown("up");
      const sec = document.getElementById('section');
      const intro = document.getElementById('intro');
      sec.style.zIndex='-1'
      intro.style.zIndex='1'
    }
  }

  const changeSection = (e) => {
    setSection(e.target.innerText);
  };

  useEffect(() => {
    if(section === "About"){
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });;
    }
    if (section === "Projects") {
      // Scroll to the project section
      projectRef.current.scrollIntoView({ behavior: "smooth" , block: "start"});
    }
    else if (section === "Skills") {
      // Scroll to the project section
      skillsRef.current.scrollIntoView({ behavior: "smooth" , block: "end"});
    }
    else if (section === "Additional") {
      // Scroll to the project section
      addtionalRef.current.scrollIntoView({ behavior: "smooth" , block: "start"});
    }
  }, [section]);
  
  const sec = document.getElementById(section);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3// Intersection ratio when the callback is invoked
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    observer.observe(aboutRef.current);
    observer.observe(projectRef.current);
    observer.observe(addtionalRef.current);
    observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  

  
  const handleMouseMove = (e) => {
    const light = document.getElementById('light');
    
    light.style.left = e.clientX - 790/2 + 'px' ;
    light.style.top = e.clientY-790/2+ 'px';
  };


  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/aman-negi-4179a0208/", '_blank');
  };

  const openGitHub = () => {
    window.open("https://github.com/AMANn5153", '_blank');
  };

  const openEmail = () => {
    window.open("mailto:amann5153@gmail.com", '_blank');
  };

  
  return (
    <div className="portfolio-container" onMouseMove={handleMouseMove}>
      <div id="light"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{width:"100%"}}
      > 
          <div className="content">
            <div id="intro" className="Intro">
              <div className ="Welcome">
                <div><h1 className=" display-2 fw-bold">Aman Negi</h1></div>
                <div><h6 className=" display-7 fw-bold">Fullstack Developer</h6></div>
                <div><p className=" fs-7">I create Elegant digital places for better experience. </p></div>
              </div>
            <div className="nav">
                {Darray.map((item) => (
                <Nav 
                  changeSections={changeSection}
                  active={activeSection === item.sections}
                  section={item.sections} 
                  key={item.key} />
                ))}
                <div className ="social">
                  <div className="icons" onClick={openLinkedIn} ><TiSocialLinkedin/></div>
                  <div className="icons" onClick={openGitHub}><TiSocialGithub /></div>
                  <div className="icons" onClick={openEmail}><AiFillGoogleCircle /></div>
              </div>
              <div className="down" onClick={handleDown}><FaAngleDoubleDown /></div>
          </div>
       
          </div>
            <div id = "section"  className="sections">
              <div className="section">
              <div className="head-section"><h2>{activeSection}</h2> </div>
               <div id="About" ref={aboutRef}> <About/></div>
                <div ref={projectRef} id="Projects"> <Project /></div>
                <div ref={addtionalRef} id="Additional"><Addtionals/></div>
               <div ref={skillsRef} id="Skills"><Skills/></div> 
               <div className="down" onClick={handleDown}><FaAngleDoubleUp /></div>

              </div>
            </div>
            
          </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
