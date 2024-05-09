import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drum from "../../Assets/Projects/drum.png";
import editor from "../../Assets/Projects/codeEditor.png";
import hospital from "../../Assets/Projects/hospital.png";
import parking from "../../Assets/Projects/parking.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={parking}
              isBlog={false}
              title="Vehicle Parking"
              description="Designed and implemented a comprehensive Vehicle Management System using Java, SQL, HTML, CSS,and Bootstrap.  Integrated user registration, slot availability tracking, vehicle parking, and automated billing functionalities, enhancing operational efficiency."
              ghLink="https://github.com/nidhideshpande6/Vehicle-Parking"
              demoLink="https:"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Soci-Rank"
              description="SociRank-which identifies news topics prevalent in both social media and news media by ranking them using MF, UA, and UI. "
              ghLink="https://github.com/nidhideshpande6/SociRank"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="Involves developing patient management, appointment scheduling, billing and invoicing, inventory management, and reporting. It is a software designed to handle electronic medical records, laboratory tests and their results, radiology images, pharmacy records etc. "
              ghLink="https://github.com/nidhideshpande6/Hospital-Management-System"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drum}
              isBlog={false}
              title="Drum kit"
              description="Interactive web application that allows users to play virtual drums by clicking on corresponding buttons or using keyboard keys. This project is built using HTML, CSS, and JavaScript, providing an engaging way to create different drum sounds and beats."
              ghLink="https://github.com/nidhideshpande6/Drum-Kit"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
