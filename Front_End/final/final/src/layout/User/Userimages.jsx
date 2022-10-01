import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import Usernav from "./Usernav";


function Userimages() {
  return (
    <Usernav>
      
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
          <Button href="/Academyfrom" className="d-flex justify-content-end bg-success px-2 ">Enroll course</Button></div>
          </Col>
        </Row>
      </Container>
      
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
           
          <Button href="/Academyfrom"  className="d-flex justify-content-end bg-success px-2 mt-4">Enroll course</Button></div>
          </Col>
        </Row>
      </Container>
    </Usernav>
  );
}

export default Userimages;
