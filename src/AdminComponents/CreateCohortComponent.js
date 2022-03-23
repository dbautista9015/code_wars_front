import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
export default function CreateCohortComponent() {
  return (
    <>
      <h3 className="headerText" style={{ color: "white" }}>
        Create Cohort
      </h3>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Cohort's Name"
        className="mb-3 allText"
      >
        <Form.Control type="text" placeholder="Cohort's Name" />
      </FloatingLabel>
      <Form.Select aria-label="Default select example">
        <option>Choose Kata's Level</option>
        <option value="8">8 kata</option>
        <option value="7">7 kata</option>
        <option value="6">6 kata</option>
        <option value="5">5 kata</option>
        <option value="4">4 kata</option>
        <option value="3">3 kata</option>
        <option value="2">2 kata</option>
        <option value="1">1 kata</option>
      </Form.Select>
    </>
  );
}
