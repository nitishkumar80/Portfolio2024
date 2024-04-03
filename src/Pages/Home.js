import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CSS/Home.css";
import Sagar from "../Images/image logo.png";
import Linkedin from "../Images/Social Media/linkedin.png";
import github from "../Images/Social Media/github.png";

import instagram from "../Images/Social Media/instagram.png";
import whatsapp from "../Images/Social Media/whatsapp.png";
import Footer from "../Components/Footer";
import Contact from "./Contact";

const Home = () => {
  function OpenCV() {
    window.open(
      "https://www.mediafire.com/file/pcha96gdofxek9y/Nitish+RESUME.pdf/file",
      "_blank"
    );
  }

  return (
    <div>
      {/*Hero Section */}
      <Container>
        <Row className="Hero">
          <Col sm={12} md={6}>
            <img
              className="ProfileImage"
              src={Sagar}
              alt="sagar chatur profile"
            />
          </Col>
          <Col sm={12} md={6} className="HeroContent">
            <h6>
              I'm <span style={{ color: "#084AF3" }}>Nitish Mehta</span>
            </h6>
            <h2 className="Animatedh2">
              <span className="Animated_Title"> </span>
            </h2>
            <p>
              Helping companies to create websites and maintain a better code
              base for reusability. capable of continuous learning from senior
              developers. Passionate and hardworking with a penchant for meeting
              deadlines. Interested in a role with the company promoting best
              practices and offering diverse customer projects.
            </p>
            <p>
              Front End Developer and Web Designer with proven experience at
              various Internship Helping companies to create and maintain a
              better code base for reusability.
            </p>
            <div className="btngrp">
              <Link to="/About">
                <button className="primary" style={{ marginRight: "10px" }}>
                  About Me
                </button>
              </Link>
              <button className="secondary" onClick={OpenCV}>
                Download CV
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/*Counter Section */}
      <section>
        <Container>
          <div className="counter pb-2">
            <div className="container">
              <div className="row">
                <Col lg={3} md={3} sm={3} xs={6}>
                  <div className="employees">
                    <p className="counter-count">
                      8<span>+</span>
                    </p>
                    <p className="employee-p">Projects Completed</p>
                  </div>
                </Col>

                <Col lg={3} md={3} sm={3} xs={6}>
                  <div className="customer">
                    <p className="counter-count">6+</p>
                    <p className="customer-p">Happy Clients</p>
                  </div>
                </Col>

                <Col lg={3} md={3} sm={3} xs={6}>
                  <div className="design">
                    <p className="counter-count">2+</p>
                    <p className="design-p">Years of Experience</p>
                  </div>
                </Col>

                <Col lg={3} md={3} sm={3} xs={6}>
                  <div className="order">
                    <p className="counter-count">1+</p>
                    <p className="order-p">Team Members</p>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*About Section */}
      <section className="About">
        <Container>
          <Row>
            <Col sm={10} xs={12} md={8} lg={9} xl={10} className="AboutContent">
              <h2>Nice to meet you </h2>
              <p>
                I am{" "}
                <Link
                  to="/About"
                  style={{ textDecoration: "none", color: "#084AF3" }}
                >
                  Nitish Mehta
                </Link>
                , a Web Developer and creative designer with 2+ years of{" "}
                <Link
                  to="/Experience"
                  style={{ textDecoration: "none", color: "#084AF3" }}
                >
                  experience
                </Link>
                . For over a decade, I worked with Internship Projects.
              </p>
              <p>
                Front End Developer and Web Designer with proven experience at{" "}
                <a
                  href="https://www.linkedin.com/company/oasis-infobyte/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#084AF3" }}
                >
                  Oasis Infobyte
                </a>{" "}
           
                <a
                  href="https://www.linkedin.com/company/octanetsolutions/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#084AF3" }}
                >
                  OctaNet Services Pvt Ltd.{" "}
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/company/bharat-intern/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#084AF3" }}
                >
                  Bharat Intern.{" "}
                </a>{" "}
                where I had the opportunity to work on various projects for in
                helping companies create and maintain a better code base for
                reusability.
              </p>
              <p>
                In 2022 I started my independent design practice using my
                experience to help early-stage startups and businesses 
                <br/>to create
                high-quality websites and online presence that customers love
                and let businesses thrive.
              </p>
              <p>
                I'm based in Ranchi, Jharkhand, India, and collaborate with
                clients across the world.
              </p>
              <div className="d-flex pt-1">
                <div className="SocialIcon">
                  <a
                    href="https://www.linkedin.com/in/nitish-mehta-ab9287220/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="SocialIcon">
                  <a
                    href="https://github.com/nitishkumar80"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </div>
              
                <div className="SocialIcon">
                  <a
                    href="https://www.instagram.com/__nitishmehta__"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
                <div className="SocialIcon">
                  <a
                    href="https://api.whatsapp.com/send?phone=+916204915061&text=Hello."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </div>
              </div>
            </Col>
            <Col sm={2} md={4} lg={3} xl={2}></Col>
          </Row>
        </Container>
      </section>

      {/*Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
