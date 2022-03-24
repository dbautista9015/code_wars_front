import React, {useState} from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { AddUser } from "../Services/DataService";
export default function AccountComponent() {

  const [CodewarsName, setCodewarsName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  
  const handleSubmit = async () => {
    let userData ={
      Id : 0,
      CodewarsName,
      password,
      isAdmin
    }
    console.log(userData)
    // let result = await AddUser(userData)

  }

  const handleAdmin = async() => {
    setIsAdmin(!isAdmin)
    console.log(isAdmin)
  }
  return (
    <>


      <Container className='grayCardBg mt-5 pt-4 pb-4 roundedCorners'>
        <Row >
          <Col sm={3} >
            <h3 className="headerText text-end" style={{ color: "white" }}>
              Create Account:
            </h3>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={6}>
            <Form>
              <Form.Group className="mb-3 allText" controlId="CodewarsUsername">
                {/* <Form.Label  >Codewars Username</Form.Label> */}
                <Form.Control
                  className="loginForm loginFormText"
                  type="text"
                  placeholder="Enter Codewars Username"
                  onChange={({target})=> setCodewarsName(target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 allText"
                controlId="formBasicPassword"
              >
                {/* <Form.Label >Password</Form.Label> */}
                <Form.Control
                  className="loginForm loginFormText"
                  type="password"
                  placeholder="Enter in a Password"
                  onChange={({target}) => setPassword(target.value)}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check If Admin Role"
                  className="labelTxt"
                  onClick={handleAdmin}
                ></Form.Check>
              </Form.Group>
              <Button variant="success" type="submit" className="allText" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
