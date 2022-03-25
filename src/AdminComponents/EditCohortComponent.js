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
import { EditCohortName, UpdateCohortLvlDifficulty, GetAllUsers,GetUsersByCohort, EditCohortForUser, GetAllCohorts, GetCohortByCohortName  } from "../Services/DataService";

export default function EditCohortComponent() {
  //for the edit cohort modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //useStates to edit cohort
  const [oldCohortName, setOldCohortName] = useState("");
  const [updatedCohortName, setUpdatedCohortName] = useState("");
  const [cohortLvlDifficulty, setCohortLvlDifficulty] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allCohorts, setAllCohorts] = useState([]);
  const [currentCohort, setCurrentCohort] = useState({});
  const [allMembersInCohort, setAllMembersInCohort] = useState([]);
  
  let allFetchedUsers;
  let allMembers;


  //function for the buttons that displays current cohorts. this button will also set old cohort name
  const handleSetAndShow = async (e) => {
    let temp = e.target.textContent.toString();
    let temp1 = temp.replace('%20', " ");
    setOldCohortName(temp1);
    let allUsers = await GetAllUsers();
    setAllUsers([...allUsers]);
    allMembers = await GetUsersByCohort(temp1);
    setAllMembersInCohort([...allMembers]);
    let clickedCohort = await GetCohortByCohortName(temp1);
    setCurrentCohort(clickedCohort);
    setUpdatedCohortName(clickedCohort.cohortName);
    setCohortLvlDifficulty(clickedCohort.lvlDifficulty);
    handleShow();
  }

  

  //function for savechanges button in modal
  const handleClick = async () => {
    let result1 = await EditCohortName(oldCohortName, updatedCohortName);
    if (result1)
    {
      await UpdateCohortLvlDifficulty(updatedCohortName, cohortLvlDifficulty);
    }
    let remainingMembers = allUsers.filter((member) => member.cohortName == oldCohortName);
    for (const remainingMember of remainingMembers){
      await EditCohortForUser(remainingMember.codewarsName, updatedCohortName)
    }
    allFetchedUsers = await GetAllUsers();
    let allCohorts1 = await GetAllCohorts();
    setAllUsers([...allFetchedUsers]);
    setAllCohorts([...allCohorts1]);
    handleClose();
  }

  //function to add/remove member to cohort when list group is pressed
  const handleEditMember = async (e, updateWith) => {
    console.log(e.target.textContent);
    let editedUser = e.target.textContent;
    e.target.classList.toggle("active");
    let result = await EditCohortForUser(editedUser, updateWith);
    if (result){
      allFetchedUsers = await GetAllUsers();
      allMembers = await GetUsersByCohort(oldCohortName);
    }
    setAllUsers([...allFetchedUsers]);
    setAllMembersInCohort([...allMembers]);
  }

//useEffect to load current members in cohort on initial load
  useEffect (async() => {
    let allUsers = await GetAllUsers();
    setAllUsers(allUsers);
    let allCohorts = await GetAllCohorts();
    setAllCohorts(allCohorts);
  }, [])

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
                      key={cohort.cohortName}
                      className="listGroupBG"
                      onClick={handleSetAndShow}
                    >
                      {cohort.cohortName}
                    </ListGroup.Item>
                    )
                  })
                }
              </ListGroup>
            </Col>
          </Row>
        </div>

        <>
          <Modal show={show} onHide={handleClose} className="editCohortColor">
            <Modal.Header closeButton>
              <Modal.Title className="allText">Edit {oldCohortName} & Kata Level</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3 headerText"
                  controlId="CodewarsUsername"
                >
                  <Form.Label>Edit Cohort Name</Form.Label>
                   <Form.Control
                    className="loginForm loginFormText"
                    type="text"
                    value={updatedCohortName}
                    onChange={({ target: { value } }) => setUpdatedCohortName(value)}
                  /> 
                </Form.Group>

                <Form.Group>
                  <Form.Select
                    aria-label="Default select example"
                    className="listGroupBG allText"
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
                    allMembersInCohort.length > 0 ?  (
                      < div>
                        <Row>
                          <Col sm={8}>
                            <h5 className="mt-4 headerText" style={{ color: "white" }}>
                            {allMembersInCohort.length} Current Member(s)
                            </h5>
                          </Col>
                        </Row>
                        <Row>
                  <Col>
                    <ListGroup as="ul" className="scrollFeature3">
                    {
                        allUsers.filter((member) => member.cohortName == oldCohortName).map((user, idx) => {
                          return (
                            <ListGroup.Item 
                             action onClick={(e) => handleEditMember(e, "Select Cohort")}
                              key={user.codewarsName} 
                              as="li" 
                              className="listGroupBG pointer"
                              >{user.codewarsName}</ListGroup.Item>
                          )
                        })
                      }
                    </ListGroup>
                  </Col>
                </Row>
                      </div>
                    ) : null
                    }
                </Row>

                <Row>
                  <Col sm={6}>
                    <h5 className="mt-4 headerText" style={{ color: "white" }}>
                      Add Members
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ListGroup as="ul" className="scrollFeature3">
                      {
                        allUsers.filter((member) => member.cohortName == "Select Cohort").map((user, idx) => {
                          return (
                            <ListGroup.Item 
                             action onClick={(e) => handleEditMember(e, oldCohortName)}
                              key={user.codewarsName} 
                              as="li" 
                              className="listGroupBG pointer allText "
                              >{user.codewarsName}</ListGroup.Item>
                          )
                        })
                      }
                    </ListGroup>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="allText" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" className="allText" onClick={handleClick}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </Container>
    </>
  );
}
