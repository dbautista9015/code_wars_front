import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import AdminPage from './Components/AdminPage';

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid className='ms-5 me-5' >
          <img class="navImg img-fluid" src="https://www.codewars.com/packs/assets/logo.61192cf7.svg" />
          <Navbar.Brand className='headerText' as={Link} to="">Codewars Reservations</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='headerText' as={Link} to="/">Dashboard</Nav.Link>
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
          <Route path="" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
