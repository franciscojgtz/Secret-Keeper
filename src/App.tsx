import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <Container className="App">
      <Row>
        <Col xs={4}>Guesses Left</Col>
        <Col xs={8}>Message Board</Col>
      </Row>
      <Row>
        <Col xs={4}>Incorrect Guesses</Col>
        <Col xs={8}>Guess Letter Input /></Col>
      </Row>
      <Row>
        <Col>Secret Word</Col>
      </Row>
    </Container>
  );
};

export default App;
