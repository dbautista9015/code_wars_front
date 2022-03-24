import React, { useState, useEffect, useContext } from "react";
import {
  ListGroup,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { EditCohortName, UpdateCohortLvlDifficulty } from "../Services/DataService";

export default function EditCohortComponent() {
  //for the edit cohort modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //useStates to edit cohort
  const [oldCohortName, setOldCohortName] = useState("");
  const [updatedCohortName, setUpdatedCohortName] = useState("");
  const [cohortLvlDifficulty, setCohortLvlDifficulty] = useState("");

  //function for the buttons that displays current cohorts. this button will set old cohort name
  const handleSetAndShow = (e) => {
    let temp = e.target.textContent.toString();
    console.log(temp)
    let temp1 = temp.replace('%20', " ");
    setOldCohortName(temp1);
    console.log(oldCohortName)
    handleShow();
  }


  //function for savechanges button in modal
  const handleClick = async () => {
    console.log(oldCohortName);
    console.log(updatedCohortName)
    let result1 = await EditCohortName(oldCohortName, updatedCohortName);
    let result2;
    if (result1)
    {
      result2 = await UpdateCohortLvlDifficulty(updatedCohortName, cohortLvlDifficulty);
    }
    console.log(result2);
  }


  return (
    <>
      <Container className="grayCardBg mt-5 pt-4 pb-4 roundedCorners">
        <div>
          <Row>
            <Col sm={3}>
              <h3 className="headerText text-end" style={{ color: "white" }}>
                Edit Cohorts
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={6}>
              <ListGroup
                defaultActiveKey="#link1"
                className="align-items-center"
              >
                <ListGroup.Item
                  action
                  className="listGroupBG"
                  onClick={handleSetAndShow}
                >
                  Season 1
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  className="listGroupBG"
                  onClick={handleSetAndShow}
                >
                  Season 2
                </ListGroup.Item>
                <ListGroup.Item action className="listGroupBG">
                  Season 3
                </ListGroup.Item>
                <ListGroup.Item action className="listGroupBG">
                  Season 4
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
              <Modal.Title>Edit Cohort & Kata Level</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3 allText"
                  controlId="CodewarsUsername"
                >
                  <Form.Label>Edit Cohort Name</Form.Label>


                   <Form.Control
                    className="loginForm loginFormText"
                    type="text"
                    placeholder="Example: Season 1, Season 2, etc"
                    value={updatedCohortName}
                    onChange={({ target: { value } }) => setUpdatedCohortName(value)}
                  /> 
                </Form.Group>

                <Form.Group>
                  {/* <Form.Label> </Form.Label> */}
                  <Form.Select
                    aria-label="Default select example"
                    className="listGroupBG"
                    value={cohortLvlDifficulty}
                    onChange={({ target: { value } }) =>
                      setCohortLvlDifficulty(value)
                    }
                  >
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
                      Remove Current Members
                    </h4>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" className="listGroupBG">
                        Danny
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="listGroupBG">
                        Trent
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="listGroupBG">
                        Dylan
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="listGroupBG">
                        Walaa
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <h4 className="mt-4 headerText" style={{ color: "white" }}>
                      Add Members
                    </h4>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" className="listGroupBG">
                        Danny
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="listGroupBG">
                        Trent
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="listGroupBG">
                        Dylan
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="listGroupBG">
                        Walaa
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleClick}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </Container>
    </>
  );
}
