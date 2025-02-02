import { Button, Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home = () => (
  <MainLayout>
    <Jumbotron className="bg-light">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1>
              <b>QR Code Menu</b>
            </h1>
            <h5 className="mt-4 mb-4">
              A smart way to share your digital menu in a QR Code with your
              customers
            </h5>
            <br />
            <Button href="/places" variant="standard" size="lg">
              Create Your Menu
            </Button>
          </Col>
          <Col md={6}>
            <Image
              src="https://cdn.dribbble.com/users/997070/screenshots/4692707/foodapp-login.gif"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </MainLayout>
);

export default Home;
