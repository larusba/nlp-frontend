import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppContainer from "./AppContainer";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

function App() {
  return (
      <div>
          <Container>
              <Row className='mt-5 mb-4'>
                  <Col lg={6} >
                      <h1>NLP</h1>
                  </Col>
              </Row>
              <AppContainer/>
          </Container>
      </div>
  );
}

export default App;
