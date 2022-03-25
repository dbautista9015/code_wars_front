import { faColonSign } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useEffect } from "react";
import {
  Accordion,
  ListGroup,
  Row,
  Col,
  Button,
  Modal,
  Table,
  Container,
} from "react-bootstrap";
import UserContext from '../Context/UserContext';
import { useUser } from '../Hooks/use-user';
import {GetAllCohorts, GetReservationsByUsername, ChangeReservationCompletedStatus, GetCodeChallenge} from "../Services/DataService"

export default function ViewAllUsersComponent() {
  let {reservedKatas, setReservedKatas } = useContext(UserContext);

  useEffect(async ()=>{
    let token = localStorage.getItem('Token')
    if(token!=null)
    {
      let cohorts = await GetAllCohorts()
      console.log(cohorts)
    }

  },[]);

  //for the view user modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Container className='grayCardBg mt-5 pt-4 pb-4 roundedCorners'>
      <div>
        <Row>
          <Col sm={3}>
            <h3 className="headerText text-end" style={{ color: "white" }}>
              Choose Cohort to View Users
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={6}>
            <Accordion>
              <Accordion.Item eventKey="0" className="listGroupBG">
                <Accordion.Header>Season 1 Cohort</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item
                      action
                      className="allUsersInCohort"
                      onClick={handleShow}
                    >
                      Danny
                    </ListGroup.Item>
                    <ListGroup.Item action className="allUsersInCohort">
                      Trent
                    </ListGroup.Item>
                    <ListGroup.Item action className="allUsersInCohort">
                      Dylan
                    </ListGroup.Item>
                    <ListGroup.Item action className="allUsersInCohort">
                      Walaa
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="listGroupBG">
                <Accordion.Header>Season 2 Cohort</Accordion.Header>
                <Accordion.Body>
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="listGroupBG">
                <Accordion.Header>Season 3 Cohort</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose} className="editCohortColor">
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>CodeWars Name: Danny</h3>
            <h3>Cohort: Season 4</h3>

            <Table striped bordered hover variant="dark">
                                {/* {userReservations.level == 6 ?
                                
                            } */}
                                <thead>
                                    <tr>
                                    <th>Level</th>
                                    <th>Kata name</th>
                                    <th>Status</th>
                                    <th>Mark Complete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>3 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="redText">Incomplete</p></td>
                                    <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="danger" type="submit">Incomplete</Button></td>
                                    </tr>
                                    <tr>
                                    <td>5 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="redText">Incomplete</p></td>
                                    <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="danger" type="submit">Incomplete</Button></td>
                                    </tr>
                                    <tr>
                                    <td>6 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="greenText">Completed</p></td>
                                    <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="success" type="submit">Completed</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
          
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
      </Container>
    </>
  );
}
