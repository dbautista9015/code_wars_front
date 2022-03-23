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
        <Row >
          <Col sm={4}>
            <h3 className="headerText " style={{ color: "white" }}>
              Edit Cohorts
            </h3>
            <ListGroup
              defaultActiveKey="#link1"
              className="align-items-center"
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
        <Modal show={show} onHide={handleClose} className="editCohortColor">
          <Modal.Header closeButton>
            <Modal.Title>Edit Cohort</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3 allText" controlId="CodewarsUsername">
                <Form.Label>Edit Cohort Name</Form.Label>
                <Form.Control
                  className="loginForm loginFormText"
                  type="text"
                  placeholder="Enter Cohort Name"
                />
              </Form.Group>

              <Form.Group>
                {/* <Form.Label> </Form.Label> */}
                <Form.Select aria-label="Default select example" className="listGroupBG">
                  <option>Select Cohort's Kata Level</option>
                  <option value="8">8 Kyu Kata</option>
                  <option value="7">7 Kyu Kata</option>
                  <option value="6">6 Kyu Kata</option>
                  <option value="5">5 Kyu Kata</option>
                  <option value="4">4 Kyu Kata</option>
                  <option value="4">3 Kyu Kata</option>
                  <option value="2">2 Kyu Kata</option>
                  <option value="1">1 Kyu Kata</option>
                </Form.Select>
              </Form.Group>
              <Row>
                <Col sm={6}>
                  <h4 className="mt-4 headerText" style={{ color: "white" }}>
                    Edit Users
                  </h4>
                </Col>
              </Row>

              <Row>
                <Col>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" className="listGroupBG">Danny</ListGroup.Item>
                    <ListGroup.Item as="li" className="listGroupBG">Trent</ListGroup.Item>
                    <ListGroup.Item as="li" className="listGroupBG">Dylan</ListGroup.Item>
                    <ListGroup.Item as="li" className="listGroupBG">Walaa</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <h4 className="mt-4 headerText" style={{ color: "white" }}>
                    Add Users
                  </h4>
                </Col>
              </Row>

              <Row>
                <Col>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" className="listGroupBG">Danny</ListGroup.Item>
                    <ListGroup.Item as="li" className="listGroupBG">Trent</ListGroup.Item>
                    <ListGroup.Item as="li" className="listGroupBG">Dylan</ListGroup.Item>
                    <ListGroup.Item as="li" className="listGroupBG">Walaa</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
