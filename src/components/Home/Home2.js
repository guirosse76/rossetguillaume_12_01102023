import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez-moi me <span className="purple"> présenter</span>,
            </h1>
            <p className="home-about-body">
              Je suis <b className="purple">passionné</b> d'informatique depuis
              l'age de 10 ans, autodidacte dans un premier temps dans le domaine
              de la <b className="purple">programmation</b>, j'ai ensuite fais
              des études dans{" "}
              <b className="purple">les systèmes et réseaux informatiques</b>.
              <br />
              <br />
              Je viens de terminer la formation openClassrooms
              <i>
                <b className="purple"> Développeur web Front-End</b>
              </i>
              <br />
              <br />
              Mes compétences dans le développement :
              <br />
              <i>
                <b className="purple">HTML5</b> &&{" "}
                <b className="purple">CSS5</b> pour l'intégration des maquettes
                <b className="purple"> front-end</b>.
                <br />
                <b className="purple">Javascript</b> pour la gestion des
                fonctionnalités du site web dynamique.
                <br />
                <b className="purple">
                  Node.js pour la plateforme d'execution{" "}
                </b>
                et le framework <b className="purple">React.js</b>
              </i>
              <br />
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
            <h1>TROUVEZ MOI SUR</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/guirosse76"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
