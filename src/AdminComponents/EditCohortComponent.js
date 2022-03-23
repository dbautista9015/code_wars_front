import React, { useState, useEffect, useContext } from "react";
import { ListGroup, Row, Col, Button, Modal, Form } from "react-bootstrap";

export default function EditCohortComponent() {
  //for the edit cohort modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Row>
          <Col sm={4}>
            <h3 className="headerText" style={{ color: "white" }}>
              Edit Cohorts
            </h3>
            <ListGroup
              defaultActiveKey="#link1"
              className="justify-content-center"
            >
              <ListGroup.Item
                action
                className="listGroupBG"
                onClick={handleShow}
              >
                Season 1 Cohort
              </ListGroup.Item>
              <ListGroup.Item action className="listGroupBG">
                Season 2 Cohort
              </ListGroup.Item>
              <ListGroup.Item action className="listGroupBG">
                Season 3 Cohort
              </ListGroup.Item>
              <ListGroup.Item action className="listGroupBG">
                Season 4 Cohort
              </ListGroup.Item>
              {/* <ListGroup.Item action onClick={alertClicked}>
          This one is a button
        </ListGroup.Item> */}
            </ListGroup>
          </Col>
        </Row>
      </div>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Cohort</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3 allText" controlId="CodewarsUsername">
                <Form.Label  >Cohort Name</Form.Label>
                <Form.Control
                  className="loginForm loginFormText"
                  type="text"
                  placeholder="Enter Cohort Name"
                />
              </Form.Group>

              <Form.Group>
                  <Form.Label> </Form.Label>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
