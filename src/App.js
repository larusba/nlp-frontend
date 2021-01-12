import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NLPContainer from "./container/NLPContainer";
import { Container, Row} from "react-bootstrap";
import React from "react";
import {Switch, BrowserRouter, Route, Link} from "react-router-dom";
import AdvancedSearchContainer from "./container/AdvancedSearchContainer";

function App() {
  return (
      <div>
              <BrowserRouter>
                  <div>
                      <nav>
                          <ul className='mb-3 pl-3'>
                              <li>
                                  <Link to="/">NLP Document</Link>
                              </li>
                              <li>
                                  <Link to="/advanced-search">Advanced Search</Link>
                              </li>
                          </ul>
                      </nav>
                      <Container>
                          <Row className='mt-5 mb-4'>
                              <h1>NLP</h1>
                          </Row>
                      </Container>
                      <Switch>
                          <Route exact path="/" component={NLPContainer} />
                          <Route path="/advanced-search" component={AdvancedSearchContainer}/>
                      </Switch>
                  </div>
              </BrowserRouter>
      </div>
  );
}

export default App;
