import React from "react";
import { Form, Button } from "react-bootstrap";

export default function AccountComponent() {
  return (
    <>
      <h3 className="headerText" style={{ color: "white" }}>
        Create Account
      </h3>
      <Form>
        <Form.Group className="mb-3 allText" controlId="CodewarsUsername">
          {/* <Form.Label  >Codewars Username</Form.Label> */}
          <Form.Control
            className="loginForm loginFormText"
            type="text"
            placeholder="Enter Codewars Username"
          />
        </Form.Group>

        <Form.Group className="mb-3 allText" controlId="formBasicPassword">
          {/* <Form.Label >Password</Form.Label> */}
          <Form.Control
            className="loginForm loginFormText"
            type="password"
            placeholder="Enter in a Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check Me if Admin Role" />
        </Form.Group>
        <Button variant="success" type="submit" className="allText">
          Submit
        </Button>
      </Form>
    </>
  );
}
