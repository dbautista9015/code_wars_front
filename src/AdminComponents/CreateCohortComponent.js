import React from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
export default function CreateCohortComponent() {
    return (
        <>
     <>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control className="loginForm loginFormText" type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control className="loginForm loginFormText" type="password" placeholder="Password" />
  </FloatingLabel>
</>

        </>
    )
}
