import React from "react";
import { Container } from "react-bootstrap";
import "./CSS/Experience.css";
import Footer from "../Components/Footer";

export default function Experience() {
  return (
    <div>
      <section className="ExpSection">
        <Container>
          <h2 className="h2Title">Experience</h2>
          <p className="Ptext">
            As for my future, I hope to one day work as a Full-stack developer
            and work with a diverse development team.
          </p>
          <div className="timeline">
            <div className="containe left">
              <div className="content">
                <h6>Sep 2023 (1 Months)</h6>
                <h5>Web Developer</h5>
                <h6 className="company">Oasis Infobyte </h6>
                <p>
                  As a Frontend Developer, I was responsible for creating the
                  visual design of a website. Designing and developing web
                  pages, with a focus on usability, aesthetics, and creativity
                  using the popular javascript framework ReactJS.
                </p>
              </div>
            </div>
            <div className="containe right">
              <div className="content">
                <h6>Oct 2023 - Nov 2023 (2 Months)</h6>
                <h5>Java Developer </h5>
                <h6 className="company">OctaNet Services Pvt Ltd.</h6>
                <p>
                  Responsible for designing and developing ATM interfaces using
                  Java, with a focus on functionality, efficiency, and user
                  experience. This includes creating interface designs and
                  prototypes to effectively communicate design ideas and
                  concepts. The role involves collaborating with
                  cross-functional teams to ensure seamless integration of
                  Java-based ATM features, emphasizing both usability and
                  aesthetics.
                </p>
              </div>
            </div>
            <div className="containe left">
              <div className="content">
                <h6>Dec 2023 - Jan 2024 (2 Months)</h6>
                <h5>Full-Stack Web Development</h5>
                <h6 className="company">Bharat Intern </h6>
                <p>
                  Responsible for designing and developing full-stack web
                  applications, with a comprehensive focus on both front-end and
                  back-end technologies. This involves creating intuitive and
                  visually appealing user interfaces, as well as implementing
                  robust server-side logic and database functionalities. 
                </p>
              </div>
            </div>

            <div className="containe right">
              <div className="content">
                <h6> 2024 - Full Time</h6>
                <h5>Web Developer and Front-End Developer</h5>
                <h6 className="company">ARS Kreedashala Pvt Ltd </h6>
                <p>
                Responsible for creating visually appealing and user-friendly web interfaces, ensuring seamless user experiences, and collaborating with backend developers to integrate functionality. 
                </p>
              </div>
            </div>




            {/* <div className="containe right">
              <div className="content">
                <h6>Aug 2020 - Sep 2020 (2 Months)</h6>
                <h5>Web Developer Intern</h5>
                <h6 className="company">Codeproofs Private Limited</h6>
                <p>
                  Worked as a web designer in a digital agency that designed and
                  maintained websites for various businesses. Responsibilities
                  included designing, maintaining, creating, and updating
                  websites and mobile applications to ensure they are up to date
                  with current trends and industry standards.
                </p>
              </div>
            </div> */}
            {/* <div className="containe left">
              <div className="content">
                <h6>Jun 2020 - Jul 2020 (2 Months)</h6>
                <h5>Web Designer Intern</h5>
                <h6 className="company">Knooviq Technologies Pvt Ltd</h6>
                <p>
                  As a Web Designer, I was responsible for designing,
                  maintaining, and updating various types of design assets on
                  the websites. Designing templates and web pages for multiple
                  types of websites, including blogs, using HTML and CSS. –
                  Developed responsive layouts for mobile devices working with a
                  CMS of current website content.
                </p>
              </div>
            </div> */}
            {/* <div className="containe right">
              <div className="content">
                <h6>Apr 2021 - May 2022 (2 Months)</h6>
                <h5>Web Designer Intern</h5>
                <h6 className="company">Product Search Infotech Pvt Ltd </h6>
                <p>
                  Worked as a web designer in a marketing agency that designed
                  and maintained websites for various businesses.
                  Responsibilities included designing, maintaining, creating,
                  and updating websites and mobile applications to ensure they
                  are up to date with current trends and industry standards.
                </p>
              </div>
            </div> */}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
