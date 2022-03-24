import React, {useEffect, useContext, useState} from 'react'
import { Container, Row, Col, Form, Button, Tab, Nav, Table } from 'react-bootstrap';
import UserContext from '../Context/UserContext';
import { useUser } from '../Hooks/use-user';
import { useNavigate } from 'react-router-dom';
import {GetReservationsByUsername, ChangeReservationCompletedStatus, GetCodeChallenge, ChangeReservationStatus } from '../Services/DataService'




export default function YourCurrentKatasComponent() {

        let { codewarsName, token, reservedKatas, setReservedKatas, numberOfReservations, setNumberOfReservations } = useContext(UserContext);
        let navigate = useNavigate();

        const [codewarsKata, setCodewarsKata] = useState([]);
        const [reservedKata, setReservedKata] = useState([]);

    useEffect(async () => {
        if (token == null) {
           navigate("/login");
        }
        else{
            let reservations = await GetReservationsByUsername(codewarsName)
            console.log(reservations);
            console.log(codewarsName);
            if(reservations.length !=0)
            {
                setReservedKatas(reservations)
              
            }
        }
        
    }, []);

    const handleKataInformation = async (kata) => 
    {
      
        console.log(kata)
        let kataInfo = await GetCodeChallenge(kata.kataId)
        console.log(kataInfo)
        if (kataInfo.length !=0)
        {
            setCodewarsKata(kataInfo)  
            setReservedKata(kata)
        }

    }

    const handleUnreserveKata = async (id) => 
    {   console.log(id)
        let result =  await ChangeReservationStatus(id)
        console.log(result)
        if (result.length !=0)
        {
            let reservations = await GetReservationsByUsername(codewarsName)
            console.log(reservations)
            if(reservations.length !=0)
            {
                setReservedKatas(reservations)
                let currentReservations = reservations.filter(reservation => !reservation.isDeleted && !reservation.isCompleted)
                setNumberOfReservations(currentReservations);
            }
        }
    }

  return (
    <>
        <Container className=''>
            <Row className='justify-content-center'>
                <Col className='grayCardBg mt-5 pt-4 pb-2 roundedCorners'>
                    <Row>
                        <Col md={12} className=' '>
                            <Form.Group className="mb-3" controlId="formBasicSearch">
                                <Form.Label className="searchKataText headerText">Your Current Reservations</Form.Label>
                            </Form.Group>
                            <Table striped bordered hover variant="dark">
                                {/* {userReservations.level == 6 ?
                                
                            } */}
                                <thead>
                                    <tr>
                                    <th>Level</th>
                                    <th>Kata name</th>
                                    <th>Status</th>
                                    <th>Unreserve</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reservedKatas.length!=0?
                                        reservedKatas.map((kata, idx)=> {
                                            
                                            return(
                                            !kata.isDeleted?
                                                 <tr key={idx}>
                                              <td>{kata.kataLevel}</td>
                                    <td onClick={()=> {handleKataInformation(kata)}}><a className='kata-link pointer' href={kata.kataLink} target="_blank">{kata.kataName}</a></td>
                                    <td><p className="redText">{kata.isCompleted?"Completed": "Not Completed"}</p></td>
                                    <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="danger" onClick={()=> {handleUnreserveKata(kata.id)}}>Unreserve</Button></td>       
                                            </tr>:null
                                            )
                                           
                                        })
                                        :
                                        <tr><td>"You do not have any reservations"</td></tr>
                                    }
                                  
                                   
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={12} className='mt-4'>
                       
                            {
                                codewarsKata.length!=0?
                                <>
                                 <div className='d-flex mt-4'>
                                <p className='dashboardSlugTitle headerText'>Challenge name:</p>
                                <p className='dashboardSlugText ms-2 allText'>{codewarsKata.name}</p>
                                <p className='dashboardSlugTitle ms-5 headerText'>Level:</p>
                                <p className='dashboardSlugText ms-2 allText' >{codewarsKata.rank.name}</p>
                                <p className='dashboardSlugTitle ms-5 headerText'>Language:</p>
                                <p className='dashboardSlugText ms-2 allText'>{reservedKata.kataLanguage} </p>
                            </div>
                            <div className='d-flex mt-1'>
                                <p className='dashboardSlugTitle me-5 headerText'>Description:</p>
                            </div>
                            <div className='d-flex '>
                            <p className='dashboardDescText p-3 scrollFeature2 allText'>{codewarsKata.description}</p>
                             </div>
                             </>
                             :
                             null
                            }
                                
                           
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}