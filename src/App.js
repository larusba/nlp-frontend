import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NLPContainer from "./NLPContainer";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Switch, BrowserRouter, Route, Link} from "react-router-dom";
import AdvancedSearchContainer from "./AdvancedSearchContainer";

function App() {
  return (
      <div>
          <Container>
              <Row className='mt-5 mb-4'>
                  <Col lg={6} >
                      <h1>NLP</h1>
                  </Col>
              </Row>
              <BrowserRouter>
                  <div>
                      <nav>
                          <ul>
                              <li>
                                  <Link to="/">NLP Document</Link>
                              </li>
                              <li>
                                  <Link to="/advanced-search">Advanced Search</Link>
                              </li>
                          </ul>
                      </nav>
                      <Switch>
                          <Route exact path="/" component={NLPContainer} />
                          <Route path="/advanced-search" component={AdvancedSearchContainer}/>
                      </Switch>
                  </div>
              </BrowserRouter>
          </Container>
      </div>
  );
}

export default App;
