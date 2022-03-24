import React, { useContext, useEffect, useState} from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseUser from '../Hooks/use-user'
import UserContext from '../Context/UserContext';

const NavbarComponent = () => {

    let { isAdmin } = useContext(UserContext);
    const [token, setToken] = useState("");

    useEffect(() => {
        
        setToken(localStorage.getItem('Token'));
        console.log(localStorage.getItem('Token'));
        
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid className='ms-5 me-5' >
                <img className="navImg img-fluid" src="https://www.codewars.com/packs/assets/logo.61192cf7.svg" />
                <Navbar.Brand className='headerText' as={Link} to="/">Codewars Reservations</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {token != null ? <Nav.Link className='headerText' as={Link} to="/">Dashboard</Nav.Link> : null}
                </Nav>
                <Nav>
                    {isAdmin? <Nav.Link className='headerText' as={Link} to="/admin">Admin</Nav.Link> : null}
                    <Nav.Link className='headerText' eventKey={2} as={Link} to="/login">Login</Nav.Link>
                    {/* <Nav.Link eventKey={2} as={Link} to="/signout">Login</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
