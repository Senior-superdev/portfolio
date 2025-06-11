import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiTelegram } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Daniel Goleman</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Senior-superdev"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/@Super_ninja1213"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/senior-superdev-182614367/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://app.slack.com/client/T08JR0082UT/D08TKDQH09F"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiSlack />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
