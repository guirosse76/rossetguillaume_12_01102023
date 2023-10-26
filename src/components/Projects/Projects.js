import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kasa from "../../Assets/Projects/Kasa.png";
import sophieBluel from "../../Assets/Projects/sophie-bluel.png";
import ohmyfood from "../../Assets/Projects/ohmyfood.png";
import argentBank from "../../Assets/Projects/argentBank.png";
import printIt from "../../Assets/Projects/printIt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes travaux <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohmyfood}
              isBlog={false}
              title="Ohmyfood"
              description="Développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques, En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !"
              ghLink="https://github.com/guirosse76/rossetguillaume_4_09052023"
              demoLink="https://guirosse76.github.io/rossetguillaume_4_09052023/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printIt}
              isBlog={false}
              title="Print it"
              description="Dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it, il s'agit de mettre en place un carrousel dynamique infini en javascript"
              ghLink="https://github.com/guirosse76/rossetguillaume_5_15062023"
              demoLink="https://guirosse76.github.io/rossetguillaume_5_15062023/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sophieBluel}
              isBlog={false}
              title="Portfolio de Sophie Bluel"
              description="Développeur front-end qui travaille sur la conception du site porfolio d'une architecte d'interieur"
              ghLink="https://github.com/guirosse76/rossetguillaume_6_29062023"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa"
              description="Développer la nouvelle plateforme web de la société Kasa, il s'agit de créer une application web de location immobilière avec le framework React"
              ghLink="https://github.com/guirosse76/rossetguillaume_8_14092023"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={argentBank}
              isBlog={false}
              title="Argent Bank"
              description="Implémentation du front-end d'une application bancaire avec React, création d'un système d'authentification des utilisateurs"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
