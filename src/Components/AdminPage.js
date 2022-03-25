import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Nav, Tab } from "react-bootstrap";
import AccountComponent from '../AdminComponents/AccountComponent';
import CreateCohortComponent from '../AdminComponents/CreateCohortComponent';
import EditCohortComponent from '../AdminComponents/EditCohortComponent';
import ViewAllUsersComponent from '../AdminComponents/ViewAllUsersComponent';
import UserContext from '../Context/UserContext';
import { useUser } from '../Hooks/use-user';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  let { storedCodewarsName, codewarsName, setCodewarsName} = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(async () => {
    let token = localStorage.getItem('Token')
    if (token == null) {
       navigate("/login");
    }
    else{
       storedCodewarsName = localStorage.getItem("codewarsName")
        if(storedCodewarsName!=null)
        {
          setCodewarsName(storedCodewarsName)
        }
       
    }
    
}, []);
  return (
    <>
    <Container fluid>
    {/* <h1 className="d-flex justify-content-center pt-3 headerText" style={{ color: "white"}} >Admin Page </h1> */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row >
          <Col sm={3} className="tabBg">
            <Nav variant="pills" className="flex-column allText marginTop">
              <Nav.Item>
                <Nav.Link eventKey="first"  className="headerText tabBtn mb-4">Create Account</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="headerText tabBtn mb-4">Create Cohort</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className="headerText tabBtn mb-4">Edit Cohort</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" className="headerText tabBtn mb-4">View All Users/Mark Complete</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AccountComponent />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <CreateCohortComponent />
              </Tab.Pane>
              <Tab.Pane eventKey="third" className="align-items-center">
                <EditCohortComponent />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <ViewAllUsersComponent />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>
    </>
  );
};

export default AdminPage;
