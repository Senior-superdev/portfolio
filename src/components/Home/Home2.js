import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  HTML, Javascript, php, Mysql and python.{" "}
                </b>
              </i>
              <br />
              <br />
              My professional and special skills are
              <i>
                <b className="purple">
                  Wordpress, Shopify, Django, Node.js and FastAPI.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">React, Vue.js</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Amazon Web Service</b> and
              <i>
                <b className="purple">
                  {" "}
                  AI App Development 
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            
              <img src={myImg} className="img-fluid" alt="avatar" />
            
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">make a contract </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Senior-superdev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
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
