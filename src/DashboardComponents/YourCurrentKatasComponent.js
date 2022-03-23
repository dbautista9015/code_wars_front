import React from 'react'
import { Container, Row, Col, Form, Button, Tab, Nav, Table } from 'react-bootstrap';

export default function YourCurrentKatasComponent() {

    const handleClick = () => {
        // Open current reservation clicked
    }


  return (
    <>
        <Container className=''>
            <Row className='justify-content-center'>
                <Col className='grayCardBg mt-5 pt-4 pb-2 roundedCorners'>
                    <Row>
                        <Col md={6} className=' '>
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
                                    <tr>
                                    <td>3 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="redText">Not completed</p></td>
                                    <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="danger" type="submit">Unreserve</Button></td>
                                    </tr>
                                    <tr>
                                    <td>5 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="greenText">Completed</p></td>
                                    <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="danger" type="submit">Unreserve</Button></td>
                                    </tr>
                                    <tr>
                                    <td>6 Kyu</td>
                                    <td>Calculate Angel's Salary</td>
                                    <td><p className="greenText">Completed</p></td>
                                    <td className="d-flex justify-content-center"><Button className='allText unreserveBtn mt-1 mb-1' variant="danger" type="submit">Unreserve</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md={6} className='mt-4'>
                        <div className='d-flex mt-4'>
                                <p className='dashboardSlugTitle headerText'>Challenge name:</p>
                                <p className='dashboardSlugText ms-2 allText'>Make a spiral</p>
                                <p className='dashboardSlugTitle ms-5 headerText'>Level:</p>
                                <p className='dashboardSlugText ms-2 allText' >3 kyu</p>
                            </div>
                            <div className='d-flex mt-4'>
                                <p className='dashboardSlugTitle me-5 headerText'>Description:</p>
                                <p className='dashboardSlugTitle ms-5 headerText'>Category:</p>
                                <p className='dashboardSlugText ms-2 allText'>Algorithms</p>
                            </div>
                            <div className='d-flex '>
                            <p className='dashboardDescText p-3 scrollFeature2 allText'>Your task, is to create a NxN spiral with a given `size`.  For example, spiral with size 5 should look like this:  ``` 00000 ....0 000.0 0...0 00000 ```  and with the size 10:  ``` 0000000000/n.........0 00000000.0 0......0.0 0.0000.0.0 0.0..0.0.0 0.0....0.0 0.000000.0 0........0 0000000000 ```  Return value should contain array of arrays, of `0` and `1`, with the first row being composed of `1`s. For example for given size `5` result should be:   ```javascript [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```rust [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```julia [1 1 1 1 1; 0 0 0 0 1; 1 1 1 0 1; 1 0 0 0 1; 1 1 1 1 1] ```  Because of the edge-cases for tiny spirals, the size will be at least 5.  General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. "
                                
                                our task, is to create a NxN spiral with a given `size`.  For example, spiral with size 5 should look like this:  ``` 00000 ....0 000.0 0...0 00000 ```  and with the size 10:  ``` 0000000000/n.........0 00000000.0 0......0.0 0.0000.0.0 0.0..0.0.0 0.0....0.0 0.000000.0 0........0 0000000000 ```  Return value should contain array of arrays, of `0` and `1`, with the first row being composed of `1`s. For example for given size `5` result should be:   ```javascript [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```rust [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```julia [1 1 1 1 1; 0 0 0 0 1; 1 1 1 0 1; 1 0 0 0 1; 1 1 1 1 1] ```  Because of the edge-cases for tiny spirals, the size will be at least 5.  General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. "
                                
                                our task, is to create a NxN spiral with a given `size`.  For example, spiral with size 5 should look like this:  ``` 00000 ....0 000.0 0...0 00000 ```  and with the size 10:  ``` 0000000000/n.........0 00000000.0 0......0.0 0.0000.0.0 0.0..0.0.0 0.0....0.0 0.000000.0 0........0 0000000000 ```  Return value should contain array of arrays, of `0` and `1`, with the first row being composed of `1`s. For example for given size `5` result should be:   ```javascript [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```rust [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```julia [1 1 1 1 1; 0 0 0 0 1; 1 1 1 0 1; 1 0 0 0 1; 1 1 1 1 1] ```  Because of the edge-cases for tiny spirals, the size will be at least 5.  General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. ",</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}
