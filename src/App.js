import React, { useState, useContext } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import AdminPage from './Components/AdminPage';
import UserContext from './Context/UserContext';
import { useNavigate } from 'react-router-dom';
import UseUser from './Hooks/use-user';
import NavbarComponent from './Components/NavbarComponent';

function App() {

  <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
</head>

  return (
    <>
      <UserContext.Provider value={UseUser()}>
        <BrowserRouter >
        <NavbarComponent />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
