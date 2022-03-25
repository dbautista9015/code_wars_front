import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import ReserveAKataComponent from "../DashboardComponents/ReserveAKataComponent";
import YourCurrentKatasComponent from "../DashboardComponents/YourCurrentKatasComponent";
import YourPastKatasComponent from "../DashboardComponents/YourPastKatasComponent";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Hooks/use-user";
import UserContext from "../Context/UserContext";
import {GetCohortByCohortName, DoesUserExist} from "../Services/DataService"

export default function DashboardPage() {
  let { cohortName, setCohortName, storedCodewarsName, setCodewarsName } = useContext(UserContext);
  let navigate = useNavigate();

  const [cohortInfo, setCohortInfo] = useState("");
  const [totalCompleted, setTotalCompleted] = useState("");

  useEffect(async () => {
    let token = localStorage.getItem("Token");
    if (token == null) {
      navigate("/");
    } else {
      storedCodewarsName = localStorage.getItem("codewarsName");
      if (storedCodewarsName != null) {
        setCodewarsName(storedCodewarsName);
        setCohortName(cohortName);
      }
      let cohortInfo = await GetCohortByCohortName(cohortName);
      setCohortInfo(cohortInfo);
      let completed = await DoesUserExist(storedCodewarsName);
      let totalCompleted = completed.codeChallenges.totalCompleted;
      setTotalCompleted(totalCompleted);
      console.log(totalCompleted)
    }
  }, []);

  return (
    <>
      <Container fluid>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row> 
            <Col sm={3} className="tabBg">
              <div className="tabBtn1 mt-5">
                <p className="headerText1">Cohort Name: {cohortName}</p>
                <p className="headerText1">Cohort Level: {cohortInfo.lvlDifficulty} kyu and lower</p>
                <p className="headerText1">Total Katas Completed: {totalCompleted}</p>
              </div>
              <Nav variant="pills" className="flex-column allText marginTop">
                <Nav.Item>
                  <Nav.Link className="headerText tabBtn mb-4" eventKey="first">
                    Reserve a Kata
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="headerText tabBtn mb-4"
                    eventKey="second"
                  >
                    Your current reservations
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="headerText tabBtn" eventKey="third">
                    Your past Katas
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
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
  );
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
