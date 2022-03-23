import React from 'react';
import { Container, Row, Col, Form, Button, Tab, Nav } from 'react-bootstrap';
import ReserveAKataComponent from '../DashboardComponents/ReserveAKataComponent';
import YourCurrentKatasComponent from '../DashboardComponents/YourCurrentKatasComponent';
import YourPastKatasComponent from '../DashboardComponents/YourPastKatasComponent';

export default function DashboardPage() {
  return (
    <>
        <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} className="tabBg">
                        <Nav variant="pills" className="flex-column allText marginTop">
                        <Nav.Item>
                            <Nav.Link className='headerText tabBtn mb-4' eventKey="first"  >Reserve a Kata</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='headerText tabBtn mb-4' eventKey="second">Your current reservations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='headerText tabBtn' eventKey="third">Your past Katas</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col >
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ReserveAKataComponent />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <YourCurrentKatasComponent />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <YourPastKatasComponent />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            {/* <ViewAllUsersComponent /> */}
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
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
