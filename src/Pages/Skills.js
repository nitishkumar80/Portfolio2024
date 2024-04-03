import React from 'react'
import AboutIntro from "../Images/119356-development.gif"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Skills.css"
import WebDesign from "../Images/Skills/web-design.png"
import FrontEnd from "../Images/Skills/improvement.png"
import UiUx from "../Images/Skills/ui.png"
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';




export default function Skills() {

  function OpenCV(){
    window.open(
      "https://www.mediafire.com/file/pcha96gdofxek9y/Nitish+RESUME.pdf/file", "_blank");
    }

  return (
    <div>

    {/*Skills  */}
    <section className="SkillsSection">
    <Container>
      <Row className="text-center">
        <h2>My Skills</h2>
        <p>Interested in a role with a company promoting best practices and offering diverse <Link to="/Projects" style={{textDecoration:"none", color:"#084AF3"}}>customer projects.</Link></p>

        <Col sm="4" className="SkillBox">
          <img src={WebDesign} alt="Web Design"/>
          <h4>Web Design And Development</h4>
          <p>Your imagination just got a fresh look. Build modern, Fast Loading, easy-to-use websites. I offer the best web design service at a low cost.</p>
        </Col>

        <Col sm="4" className="SkillBox">
          <img src={FrontEnd} alt="Front End"/>
          <h4>Front End Development</h4>
          <p>Passionate about providing excellent services in the field of front end development, including HTML, CSS, Javascript, Bootstrap and React JS. </p>
        </Col>

        <Col sm="4" className="SkillBox">
          <img src={UiUx} alt="Ui UX"/>
          <h4>UI / UX Design</h4>
          <p>Provides creative UI UX design services to help companies creatively communicate their vision with interface and user experience. </p>
        </Col>

      </Row>
    </Container>
    </section>


      {/* Skills bars Section */}
      <section className="Skillssection">
      <Container>
                <Row>
                  <Col sm={6} className="Skillbars">
                    <h4>My Skill Set</h4>
                    <ProgressBar now={100} label="HTML" />
                    <ProgressBar now={100} label="CSS" />
                    <ProgressBar now={80} label="JAVASCRIPT" />
                    
                    <ProgressBar now={90} label="TAILWIND CSS" />
                    <ProgressBar now={90} label="Material Ui" />

                    <ProgressBar now={90} label="Bootstrap" />
                    <ProgressBar now={90} label="React JS" />
                    <ProgressBar now={90} label="React Native" />

                    <ProgressBar now={70} label="Backend ( Learning...)" animated />
                    <ProgressBar now={70} label="Node Js ( Learning...)" animated />
                    <ProgressBar now={70} label="Express Js ( Learning...)" animated />
                    <ProgressBar now={70} label="MongoDb ( Learning...)" animated />

                    <button className="primary"
                    onClick={OpenCV}>
                    Download CV
                  </button>
                  </Col>
                  <Col sm={6} className="SkillIntro">
                    <img src={AboutIntro} alt="About Skills" className="EDLogo"/>
                  </Col>
                </Row>
              </Container>
      
              
      </section>


      <Footer />
    </div>
  )
}
