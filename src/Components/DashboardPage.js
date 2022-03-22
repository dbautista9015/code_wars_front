import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function DashboardPage() {
  return (
    <>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={5} className='grayCardBg mt-5 pt-4 pb-2'>
                    <Form>
                        <div className='ms-3 me-3'>
                            <Form.Group className="mb-3" controlId="formBasicSearch">
                                <Form.Control className='loginForm loginFormText' type="username" placeholder="🔍 Enter kata URL" />
                            </Form.Group>
                            <div className='d-flex mt-4'>
                                <p className='dashboardSlugTitle'>Kata name:</p>
                                <p className='dashboardSlugText ms-4 me-5 p-1'>Make a spiral</p>
                            </div>
                            <div className='d-flex mt-4'>
                                <p className='dashboardSlugTitle'>Rank:</p>
                                <p className='dashboardSlugText ms-2 p-1'>3 kyu</p>
                            </div>
                            <div className='d-flex mt-2'>
                                <p className='dashboardSlugTitle'>Category:</p>
                                <p className='dashboardSlugText ms-4 p-1'>Algorithms</p>
                            </div>
                            <div className='mt-2'>
                                <p className='dashboardSlugTitle'>Description:</p>
                                <p className='dashboardDescText p-3'>Your task, is to create a NxN spiral with a given `size`.  For example, spiral with size 5 should look like this:  ``` 00000 ....0 000.0 0...0 00000 ```  and with the size 10:  ``` 0000000000/n.........0 00000000.0 0......0.0 0.0000.0.0 0.0..0.0.0 0.0....0.0 0.000000.0 0........0 0000000000 ```  Return value should contain array of arrays, of `0` and `1`, with the first row being composed of `1`s. For example for given size `5` result should be:   ```javascript [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```rust [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```julia [1 1 1 1 1; 0 0 0 0 1; 1 1 1 0 1; 1 0 0 0 1; 1 1 1 1 1] ```  Because of the edge-cases for tiny spirals, the size will be at least 5.  General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. ",</p>
                            </div>
                            <Button className='allText reservationBtn' variant="success" type="submit">
                                Reserve
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
  )
}
// {
//     "id": "534e01fbbb17187c7e0000c6",
//     "name": "Make a spiral",
//     "slug": "make-a-spiral",
//     "category": "algorithms",
//     "publishedAt": "2014-04-16T09:19:39.444Z",
//     "approvedAt": "2014-06-11T19:56:13.812Z",
//     "languages": [
//         "coffeescript",
//         "javascript",
//         "python",
//         "ruby",
//         "haskell",
//         "swift",
//         "java",
//         "julia",
//         "rust",
//         "csharp",
//         "cobol",
//         "c"
//     ],
//     "url": "https://www.codewars.com/kata/534e01fbbb17187c7e0000c6",
//     "rank": {
//         "id": -3,
//         "name": "3 kyu",
//         "color": "blue"
//     },
//     "createdAt": "2014-04-16T04:07:23.255Z",
//     "createdBy": {
//         "username": "Bugari",
//         "url": "https://www.codewars.com/users/Bugari"
//     },
//     "approvedBy": {
//         "username": "jhoffner",
//         "url": "https://www.codewars.com/users/jhoffner"
//     },
//     "description": "Your task, is to create a NxN spiral with a given `size`.  For example, spiral with size 5 should look like this:  ``` 00000 ....0 000.0 0...0 00000 ```  and with the size 10:  ``` 0000000000 .........0 00000000.0 0......0.0 0.0000.0.0 0.0..0.0.0 0.0....0.0 0.000000.0 0........0 0000000000 ```  Return value should contain array of arrays, of `0` and `1`, with the first row being composed of `1`s. For example for given size `5` result should be:   ```javascript [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```rust [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ``` ```julia [1 1 1 1 1; 0 0 0 0 1; 1 1 1 0 1; 1 0 0 0 1; 1 1 1 1 1] ```  Because of the edge-cases for tiny spirals, the size will be at least 5.  General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself. ",
//     "totalAttempts": 65457,
//     "totalCompleted": 8115,
//     "totalStars": 1074,
//     "voteScore": 1008,
//     "tags": [
//         "Algorithms",
//         "Logic",
//         "Arrays",
//         "Data Types",
//         "Control Flow",
//         "Basic Language Features",
//         "Fundamentals"
//     ],
//     "contributorsWanted": true,
//     "unresolved": {
//         "issues": 1,
//         "suggestions": 2
//     }
// }
