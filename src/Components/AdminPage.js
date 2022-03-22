import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import AccountComponent from '../AdminComponents/AccountComponent';
import CreateCohortComponent from '../AdminComponents/CreateCohortComponent';
import EditCohortComponent from '../AdminComponents/EditCohortComponent';
import ViewAllUsersComponent from '../AdminComponents/ViewAllUsersComponent';

const AdminPage = () => {
  return (
    <>

    <h1 className="d-flex justify-content-center pt-5 " style={{ color: "white"}} >Admin Page </h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column pt-5">
              <Nav.Item>
                <Nav.Link eventKey="first" >Create Account</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Create Cohort</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Edit Cohort</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">View All Users</Nav.Link>
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
              <Tab.Pane eventKey="third">
                <EditCohortComponent />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <ViewAllUsersComponent />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default AdminPage;
