import React, {useEffect, useContext, useState} from 'react'
import { Container, Row, Col, Form, Button, Tab, Nav, Table } from 'react-bootstrap';
import UserContext from '../Context/UserContext';
import { useUser } from '../Hooks/use-user';
import { useNavigate } from 'react-router-dom';
import {GetReservationsByUsername, ChangeReservationCompletedStatus, GetCodeChallenge, ChangeReservationStatus } from '../Services/DataService'

export default function YourPastKatasComponent() {

    let { codewarsName, setCodewarsName, cohortName, setCohortName, userId, setUserId, isAdmin, setIsAdmin, isDeleted, setIsDeleted, token, setToken, reservedKatas, setReservedKatas } = useContext(UserContext);
    let navigate = useNavigate();

    const [codewarsKata, setCodewarsKata] = useState([]);
    const [reservedKata, setReservedKata] = useState([]);

useEffect(async () => {
    if (token == null) {
       navigate("/login");
    }
    else{
        let reservations = await GetReservationsByUsername(codewarsName)
        console.log(reservations)
        if(reservations.length !=0)
        {
            setReservedKatas(reservations)
          
        }
    }
    
}, []);


  return (
    <>
        <Container className=''>
            <Row className='justify-content-center'>
                <Col className='grayCardBg mt-5 pt-4 pb-2 roundedCorners'>
                    <Row>
                        <Col md={12} className=' '>
                            <Form.Group className="mb-3" controlId="formBasicSearch">
                                <Form.Label className="searchKataText headerText">Your Past Katas</Form.Label>
                            </Form.Group>
                            <Table striped bordered hover variant="dark">
                                {/* {userReservations.level == 6 ?
                                
                            } */}
                                <thead>
                                    <tr>
                                    <th>Level</th>
                                    <th>Kata name</th>
                                    <th>Status</th>
                                    <th>Date reserved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reservedKatas.map((kata, idx)=>{
                                        return(
                                            kata.isDeleted?
                                             <tr key={idx}>
                                    <td>{kata.kataLevel}</td>
                                    <td>{kata.kataName}</td>
                                    <td><p className="redText">{kata.isCompleted?"Completed":"Not Completed"}</p></td>
                                    <td>{kata.dateAdded}</td>
                                    </tr>
                                    :null

                                        )})
                                    }
                                   
                                
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}
