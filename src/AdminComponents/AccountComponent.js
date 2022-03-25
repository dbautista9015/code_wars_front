import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  FloatingLabel,
  ToastContainer,
  Toast
} from "react-bootstrap";
import { AddUser, GetAllCohorts, DoesUserExist , GetUserByUsername} from "../Services/DataService";
export default function AccountComponent() {
  const [CodewarsName, setCodewarsName] = useState("");
  const [CohortName, setCohortName] = useState("");
  const [allCohort, setAllCohort] = useState([]);
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(async () => {
    let allCohort = await GetAllCohorts();
    setAllCohort(allCohort);
  });
  const handleSubmit = async () => {
    let result = await DoesUserExist(CodewarsName)
    let userExist = await GetUserByUsername(CodewarsName);
   if(result.success == false)
   {
     toggleShowA()
     console.clear()
   }else if(userExist.codewarsName == CodewarsName)
   {
    toggleShowB()
    console.clear()
   }else{
    let userData = {
      Id: 0,
      CodewarsName,
      CohortName,
      password,
      isAdmin,
    };
    console.log(userData);
    AddUser(userData);
   }
    
  };




  const handleCohortSelect = (e) =>{
    setCohortName(e.target.value);
 
    
  }
  const handleAdmin = async () => {
    setIsAdmin(!isAdmin);
  };
  
  //show toast if the username does not exist
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  //show toast if username already exist
  const [showB, setShowB] = useState(false);
  const toggleShowB = () => setShowB(!showB);



  return (
    <>
      
      <Container className="grayCardBg mt-5 pt-4 pb-4 roundedCorners">
        <Row>
          <Col sm={3}>
            <h3 className="headerText text-end" style={{ color: "white" }}>
              Create Account:
            </h3>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={6}>
            <FloatingLabel
              controlId="floatingUsername"
              label="Enter Codewars Username"
              className="mb-3 allText "
              style={{ color: "white" }}
            >
              <Form.Control
                className="loginForm loginFormText"
                type="text"
                placeholder="Codewars username"
                onChange={({ target }) => setCodewarsName(target.value)}
              />
            </FloatingLabel>     
            <Form>
            <FloatingLabel
              controlId="floatingPassword"
              label="Enter Password"
              className="mb-3 allText "
              style={{ color: "white" }}
            >
              <Form.Control
                className="loginForm loginFormText"
                type="password"
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
                autoComplete="off"
              />
            </FloatingLabel>
              <Form.Select
                className="listGroupBG"
                aria-label="Default select example"
                onClick={handleCohortSelect}
              >
                <option>Select Cohort</option>
                {
                allCohort.filter(cohort => cohort.isArchived == false
                  
                  ).map((cohort) =>{
                  return (
                    <option key={cohort.cohortName}value={cohort.cohortName}>{(cohort.cohortName)}</option>
                  )
                } )
              }
              </Form.Select>
              <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check If Admin Role"
                  className="labelTxt"
                  onClick={handleAdmin}
                ></Form.Check>
              </Form.Group>
              
              {
                showA == false
              }
              {
                showB == false
              }
              <Button
                variant="success"
                type="button"
                className="allText"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
         <ToastContainer className="p-3" position= "top-end">
          <Toast show={showA} onClose={toggleShowA}>
           <Toast.Header>
             <img
               src="holder.js/20x20?text=%20"
               className="rounded me-2"
               alt=""
             />
             <strong className="me-auto">Username Error</strong>
           </Toast.Header>
           <Toast.Body>This username does not exist in Codewars.</Toast.Body>
         </Toast>
       </ToastContainer>
         <ToastContainer className="p-3" position= "top-end">
          <Toast show={showB} onClose={toggleShowB}>
           <Toast.Header>
             <img
               src="holder.js/20x20?text=%20"
               className="rounded me-2"
               alt=""
             />
             <strong className="me-auto">Username Already Exist</strong>
           </Toast.Header>
           <Toast.Body>There is account with this username already.</Toast.Body>
         </Toast>
       </ToastContainer>
     
    </>
  );
}
