import React from 'react'
import { Container, Row, Col, Form, Button, Tab, Nav, Table } from 'react-bootstrap';

export default function YourPastKatasComponent() {

    const handleClick = () => {
        // Open current reservation clicked
    }


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
                                    <tr>
                                    <td>3 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="redText">Not completed</p></td>
                                    <td>3-22-22</td>
                                    </tr>
                                    <tr>
                                    <td>5 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="greenText">Completed</p></td>
                                    <td>3-22-22</td>
                                    </tr>
                                    <tr>
                                    <td>6 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="greenText">Completed</p></td>
                                    <td>3-22-22</td>
                                    </tr>
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
