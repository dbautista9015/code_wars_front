import React from 'react'
import { Container, Row, Col, Form, Button, Tab, Nav } from 'react-bootstrap'

export default function ReserveAKataComponent() {
  return (
    <>
        <Container className=''>
            <Row className='justify-content-center'>
                <Col className='grayCardBg mt-5 pt-4 pb-2 roundedCorners'>
                    <Row>
                        <Col md={6} className=' '>
                            <Form.Group className="mb-3" controlId="formBasicSearch">
                                <Form.Label className="searchKataText headerText">Reserve Your Next Kata</Form.Label>
                                <Form.Control className='searchBarBg loginForm loginFormText' type="username" placeholder="Enter kata URL" />
                            </Form.Group>
                            <div className='d-flex mt-4'>
                                <p className='dashboardSlugTitle headerText'>Challenge name:</p>
                                <p className='dashboardSlugText ms-2 allText'>Make a spiral</p>
                            </div>
                            <div className='d-flex'>
                                <p className='dashboardSlugTitle headerText'>Level:</p>
                                <p className='dashboardSlugText ms-2 allText' >3 kyu</p>
                            </div>
                            <div className='d-flex'>
                                <p className='dashboardSlugTitle headerText'>Category:</p>
                                <p className='dashboardSlugText ms-2 allText'>Algorithms</p>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <Button className='allText reservationBtn mt-3 mb-3' variant="success" type="submit">
                                Reserve challenge
                            </Button>

                            </div>
                        </Col>
                   
                        <Col md={6} className=''>
                            <div className=''>
                                <p className='dashboardSlugTitle headerText'>Description:</p>
                                <p className='dashboardDescText p-3 scrollFeature allText'>Your task, is to create a NxN spiral with a given `size`.  For example, spiral with size 5 should look like this:  ``` 00000 ....0 000.0 0...0 00000 ```  and with the size 10:  ``` 0000000000/n.........0 00000000.0 0......0.0 0.0000.0.0 0.0..0.0.0 0.0....0.0 0.000000.0 0........0 0000000000 ```  Return value should contain array of arrays, of `0` and `1`, with the first row being composed of `1`s. For example for given size `5` result should be:   ```javascript [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```rust [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```julia [1 1 1 1 1; 0 0 0 0 1; 1 1 1 0 1; 1 0 0 0 1; 1 1 1 1 1] ```  Because of the edge-cases for tiny spirals, the size will be at least 5.  General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. "
                                
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
