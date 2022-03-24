import React, { useState, useEffect, useContext } from "react";
import {
  ListGroup,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Container,
} from "react-bootstrap";
import { EditCohortName, UpdateCohortLvlDifficulty, GetAllUsers,GetUsersByCohort, EditCohortForUser, GetAllCohorts  } from "../Services/DataService";

export default function EditCohortComponent() {
  //for the edit cohort modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //useStates to edit cohort
  const [oldCohortName, setOldCohortName] = useState("");
  const [updatedCohortName, setUpdatedCohortName] = useState("");
  const [cohortLvlDifficulty, setCohortLvlDifficulty] = useState("");
  const [membersInCohort, setMembersInCohort] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allCohorts, setAllCohorts] = useState([]);

  //function for the buttons that displays current cohorts. this button will set old cohort name
  const handleSetAndShow = async (e) => {
    let temp = e.target.textContent.toString();
    let temp1 = temp.replace('%20', " ");
    setOldCohortName(temp1);
    let fetchedUsersByCohort = await GetUsersByCohort(temp1);
    setMembersInCohort(fetchedUsersByCohort);
    handleShow();
  }

  //function for savechanges button in modal
  const handleClick = async () => {
    let result1 = await EditCohortName(oldCohortName, updatedCohortName);
    let result2;
    if (result1)
    {
      result2 = await UpdateCohortLvlDifficulty(updatedCohortName, cohortLvlDifficulty);
    }
    let remainingMembers = allUsers.filter((member) => member.cohortName == oldCohortName);
    for (const remainingMember of remainingMembers){
      await EditCohortForUser(remainingMember.codewarsName, updatedCohortName)
    }
    setAllUsers([...allUsers]);
    setAllCohorts([...allCohorts])
    handleClose();
  }

  //function to add member to cohort when list group is pressed
  const handleAddMember = async (e) => {
    console.log(e.target.textContent);
    let editedUser = e.target.textContent;
    e.target.classList.toggle("active");
    let result = await EditCohortForUser(editedUser, oldCohortName);
    if (result)
    {
      setAllUsers([... allUsers]);
    }
  }

  const handleRemoveMember = async (e) => {
    e.target.classList.toggle("active");
    let editedUser = e.target.textContent;
    let result = await EditCohortForUser(editedUser, "Select Cohort");
    if (result)
    {
      setAllUsers([... allUsers]);
    }
  }

  //useEffect to load current members in cohort
  useEffect (async() => {
    let allUsers = await GetAllUsers();
    setAllUsers(allUsers);
    let allCohorts = await GetAllCohorts();
    setAllCohorts(allCohorts);
  }, [allUsers, allCohorts])

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
                {
                  allCohorts.map((cohort) => {
                    return (
                      <ListGroup.Item
                      action
                      className="listGroupBG"
                      onClick={handleSetAndShow}
                    >
                      {cohort.cohortName}
                    </ListGroup.Item>
                    )
                  })
                }
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
              <Modal.Title>Edit {oldCohortName} & Kata Level</Modal.Title>
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
                  {
                    allUsers.filter((user) => user.cohortName == oldCohortName).length > 0 ?  (
                      <>
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
                    {
                        allUsers.filter((member) => member.cohortName == oldCohortName).map((user, idx) => {
                          return (
                            <ListGroup.Item 
                             action onClick={(e) => handleRemoveMember(e)}
                              key={user.id} 
                              as="li" 
                              className="listGroupBG pointer"
                              >{user.codewarsName}</ListGroup.Item>
                          )
                        })
                      }
                    </ListGroup>
                  </Col>
                </Row>
                      </>
                    ) : null
                    }
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
                      {
                        allUsers.filter((member) => member.cohortName != oldCohortName).map((user, idx) => {
                          return (
                            <ListGroup.Item 
                             action onClick={(e) => handleAddMember(e)}
                              key={user.id} 
                              as="li" 
                              className="listGroupBG pointer"
                              >{user.codewarsName} - {user.cohortName}</ListGroup.Item>
                          )
                        })
                      }
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
