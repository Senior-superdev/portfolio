import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectSCard from "./ProjectSCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import benz from "../../Assets/Projects/benz.png";
import cushie from "../../Assets/Projects/cushie.png";
import marcopolo from "../../Assets/Projects/marcopolo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={benz}
              isBlog={false}
              title="mercedes-benz"
              description="The WordPress sites are primarily used for blogging and sharing detailed articles, enabling Mercedes-Benz to provide in-depth information separate from their main product showcases. While utilizing WordPress, these blogs maintain the brand's visual identity, ensuring a cohesive experience across different platforms."
              ghLink="https://github.com/Senior-superdev/mercedes-benz"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectSCard
              imgPath={marcopolo}
              isBlog={false}
              title="Marc O'Polo"
              description="The site utilizes Vue.js for its frontend development, ensuring a dynamic and responsive user interface. Server-side rendering is handled by Nuxt.js, which enhances performance and SEO capabilities. This project contains confidential information about a certain company, so I can't make the project public on GitHub."
              ghLink="https://www.marc-o-polo.com/en-sg/men"
              //    demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectSCard
              imgPath={cushie}
              isBlog={false}
              title="Cushie"
              description="The company aims to enhance its Shopify setup by developing custom features to replace existing app-based functionalities, indicating a move towards a more tailored and efficient user experience. This project contains confidential information about a certain company, so I can't make the project public on GitHub."
              ghLink="https://www.cushiehome.com"
              //     demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Senior-superdev/Chatify"
              //    demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Senior-superdev/Bits-0f-C0de"
              //    demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Senior-superdev/Editor.io"
              //   demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Net Banking Project"
              description="In this project I have develop real world net-banking project. This project is a best simulator for banking learners."
              ghLink="https://github.com/Senior-superdev/netbanking"
              //   demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E-commerce"
              description="Welcome to the eCommerce Platform Project built using the MERN (MongoDB, Express.js, React, Node.js) Stack. This project provides a robust and full-featured online shopping platform with various functionalities to enhance the user experience."
              ghLink="https://github.com/Senior-superdev/mern-ecommerce"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Meals-Restaurant"
              description="A full-stack restaurant management application designed to streamline the dining experience for both customers and staff. This project leverages the power of Node.js and Express on the backend to create a fast, scalable, and RESTful API-driven architecture."
              ghLink="https://github.com/Senior-superdev/Meals-Restaurant"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
