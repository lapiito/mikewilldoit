import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "../Home/Home2";
import ServiceList from "./service-list";

function Services() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-md-center">
            <h1
              style={{ paddingBottom: 15, textAlign: "center" }}
              className="heading"
            >
              Services we Offer!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👨‍🔧
              </span>
            </h1>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
              <ServiceList />
            </Col>
            <Col xs={6} md={4}>
              {" "}
              <ServiceList />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Services;
