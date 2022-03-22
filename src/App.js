import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import LoginPage from './Components/LoginPage';


function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand className='headerText' as={Link} to="/">Codewars Reservations</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='headerText' as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className='headerText' as={Link} to="/admin">Admin</Nav.Link>
              <Nav.Link className='headerText' eventKey={2} as={Link} to="/login">Login</Nav.Link>
              {/* <Nav.Link eventKey={2} as={Link} to="/signout">Login</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* {/* <Route path="/DashboardPage" element={<DashboardPage />} /> */}
          {/* <Route path="/admin" element={<Admin />} /> */} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
