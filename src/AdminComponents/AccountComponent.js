import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default function AccountComponent() {
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
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check If Admin Role"
                  className="labelTxt"
                ></Form.Check>
              </Form.Group>
              <Button variant="success" type="submit" className="allText">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
