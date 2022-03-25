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
import {GetAllCohorts, GetReservationsByUsername, ChangeReservationCompletedStatus, GetCodeChallenge, GetUsersByCohort} from "../Services/DataService"

export default function ViewAllUsersComponent() {
  let {reservedKatas, setReservedKatas } = useContext(UserContext);
  const [cohorts, setCohorts] = useState([]);
  const [cohortUsers, setCohortUsers] = useState([]);
  const [cohortUserReservations, setCohortUserReservations] = useState([]);

  useEffect(async ()=>{
    let token = localStorage.getItem('Token')
    if(token!=null)
    {
      let fetchedCohorts = await GetAllCohorts()
      setCohorts(fetchedCohorts)
    }

  },[]);

  const handleShowCohortNames =async(cohort)=>{
    let fetchedCohortUsers = await GetUsersByCohort(cohort)
    setCohortUsers(fetchedCohortUsers)
  }

  //for the view user modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async (username) => {
     setShow(true);
     let reservations = await GetReservationsByUsername(username)

     if(reservations.length !=0)
     {
      setCohortUserReservations(reservations)
     }
     else{
      setCohortUserReservations([])
     }
  }

  const handleMarkCompleted = async (id, name)=> {
    let result = await ChangeReservationCompletedStatus(id);
    if(result)
    {
      let reservations = await GetReservationsByUsername(name)
     if(reservations.length !=0)
     {
      setCohortUserReservations(reservations)
     }
    }
  }
 
   
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
              {
                cohorts.map((cohort, idx)=> {
                  return(
                    <Accordion.Item key={idx} eventKey={idx} className="listGroupBG">
                    <Accordion.Header onClick={()=>handleShowCohortNames(cohort.cohortName)}>{cohort.cohortName} Cohort</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        {
                          cohortUsers.map((name, idx)=>{
                              return(

                                 <ListGroup.Item key={idx}
                          action
                          className="allUsersInCohort"
                          onClick={()=>{handleShow(name.codewarsName)}}
                        >
                          {name.codewarsName}
                        </ListGroup.Item>
                              )

                          })
                        }
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>

                  )
                })
              }
              
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
                                    <th>Language</th>
                                    <th>Link</th>
                                    <th>Date Reserved</th>
                                    <th>Mark Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                    cohortUserReservations.length!=0?
                                    (
                                    cohortUserReservations.map((reservation,idx)=>{
                                      return(
                                       
                                        !reservation.isCompleted?
                                        (
                                           <tr key={idx}>
                                          <td>{reservation.kataLevel} Kyu</td>
                                          <td>{reservation.kataName}</td>
                                          <td><p className="redText">{reservation.isCompleted?"Completed":"Not Completed"}</p></td>
                                          <td>{reservation.kataLanguage}</td>
                                          <td><a className='kata-link pointer' href={reservation.kataLink} target="_blank">Open</a></td>
                                          <td>{reservation.dateAdded}</td>
                                          <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="danger" onClick={()=>handleMarkCompleted(reservation.id, reservation.codewarsName)}>Incomplete</Button></td>
                                          </tr>
                                        ):null
                                      )
                                    })
                                    )
                                    :
                                   <tr><td colSpan={6}>This user has no reservations</td></tr>
                                  
                                  }
                                   
                                   
                                </tbody>
                            </Table>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
}
