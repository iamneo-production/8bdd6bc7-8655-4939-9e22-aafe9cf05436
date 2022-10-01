import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import ViweAcadamy from "./ViweAcadamy";

function Abacuscenter() {
  return (
    <div>
      <ViweAcadamy/>
      <h2 className="d-flex justify-content-center ">AbacusCenter</h2>
        <Container className="d-flex justify-content-center ">
        <Row className="bg-secondary p-3 w-75 mt-5">
          <Col lg={6}>
            Course name : Dong Abacus <br />
            Course Duration : 3Months <br />
            Course Available Timing : 6amto 6pm
          </Col>
          <Col lg={6}>
            Number of Students : 222<br/>
            Course Description : yyyy
            <div className="d-flex justify-content-end mt-3">
          <Button variant="success text-light" className="d-flex justify-content-end"><Link to="/Academyform">Enroll course</Link></Button></div>
          </Col>
        </Row>
      </Container>
      <h2 className="d-flex justify-content-center mt-3">AbacusCenter</h2>
        <Container className="d-flex justify-content-center ">
        <Row className="bg-secondary p-3 w-75 mt-3">
          <Col lg={6}>
            Course name : Melissa & Dong Abacus <br />
            Course Duration : 5Months <br />
            Course Available Timing : 6amto 6pm
          </Col>
          <Col lg={6}>
            Number of Students : 122<br/>
            Course Description : yyyy
            <div className="d-flex justify-content-end mt-3">
          <Button variant="success text-light" className="d-flex justify-content-end"><Link to="/Academyform">Enroll course</Link></Button></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Abacuscenter;
