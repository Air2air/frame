import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./components/Search";

const App = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <Search />
      </Col>
    </Row>
  </Container>
);

export default App;
