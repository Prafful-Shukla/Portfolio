import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My Journey
            </h1>
            <p className="home-about-body">
  I'm a <b className="purple">B.Tech CSE graduate</b> driven by a deep passion for
  <i><b className="purple"> technology and innovation</b></i>.
  <br />
  <br />
  I once ran a successful YouTube channel with <b className="purple">16k+ subscribers and 2M+ views</b>, but chose to leave it behind to pursue what I truly love—<i><b className="purple">software development and problem-solving</b></i>.
  <br />
  <br />
  I’ve solved over <b className="purple">400+ DSA problems on LeetCode</b>, showcasing my commitment to continuous learning. Despite facing a major personal setback due to family issues—which cost me campus placements—I never stopped moving forward.
  <br />
  <br />
  I was proud to be part of the <b className="purple">Solana Hacker House</b>, where I explored modern technologies like <b className="purple">React</b> and <b className="purple">Node.js</b>. However, my core focus has been on
  <i><b className="purple"> Java Backend Development</b></i>.
  <br />
  <br />
  Through <b className="purple">GeeksForGeeks’ industrial training</b>, I mastered
  <i><b className="purple"> Java, Spring Boot, Spring MVC, Hibernate, JPA, RESTful APIs, DBMS, and Spring Security</b></i>.
  <br />
  <br />
  I'm currently seeking an opportunity—be it an <b className="purple">internship or apprenticeship</b>—to apply and sharpen my backend skills in a real-world environment. I’m even open to a <i><b className="purple">1-month trial period</b></i> if needed to prove my capability.
  <br />
  <br />
  Professionally, I’ve worked at <b className="purple">BitsAtom Technologies</b> as a <i><b className="purple">Junior React Developer</b></i>, contributing to the development of <b className="purple">BuildTeam.AI</b>.
  <br />
  <br />
  <i>
    I’m now eager to join a collaborative and fast-paced environment where I can build impactful systems and keep pushing my limits.
  </i>
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prafful-Shukla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Fanatic_neo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prafful-shukla-a848a81a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yasharthratan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
// I am fluent in classics like
//               <i>
//                 <b className="purple"> C++, Javascript and Python. </b>
//               </i>
//               <br />
//               <br />
//               My field of Interest's are building new &nbsp;
//               <i>
//                 <b className="purple">Web Technologies and Products </b> and
//                 also in areas related to{" "}
//                 <b className="purple">Operations and Finance.</b>
//               </i>
//               <br />
//               <br />
//               Whenever possible, I also apply my passion for developing products
//               with{" "}
//               <i>
//                 <b className="purple">Node.js</b>
//               </i>{" "}
//               and Modern Javascript Library and Frameworks &nbsp;like
//               <i>
//                 <b className="purple"> React.js</b>
//               </i>
