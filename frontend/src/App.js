import React from "react";
import "./App.css";
import "./components/NavigationBar";
import NavigationBar from "./components/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import AuthPage from "./components/AuthPage";
import Search from "./components/Search";

function App() {
  const marginTop = {
    marginTop: "20px",
  };

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={() => <Welcome />} />
              <Route path="/auth/" exact component={AuthPage} />
              <Route path="/add/" exact component={AddBook} />
              <Route path="/list" exact component={BookList} />
              <Route path="/search" exact component={Search} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
