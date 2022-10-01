import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Navmenu from "./Navmenu";

function Studentform() {
  return (
    <Navmenu>
     
      <Container className="bg-secondary  mt-4 p-4">
      
        <Row>
        <h4>* Enter student details *</h4>
          <Col lg={4} >
            <Form.Control
              type="text"
              placeholder="Enter Your first Name"
              className=" mt-4"
            />
            <Form.Control
              type="text"
              placeholder="Enter Father Name"
              className=" mt-4"
            />
            <Form.Control
              type="text"
              placeholder="Enter Mother Name"
              className=" mt-4"
            />
            <Form.Control
              type="text"
              placeholder="Enter Email Id"
              className=" mt-4"
            />
            <Form.Control
              type="text"
              placeholder="Enter your Age"
              className=" mt-4"
            />
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  className=" mt-4"
                />
              </Col>
              <Col lg={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter Male or Female"
                  className=" mt-4"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter PhoneNumber"
                  className=" mt-4"
                />
              </Col>
              <Col lg={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter Alternate Number"
                  className=" mt-4"
                />
              </Col>
            </Row>
            <Col lg={8}>
              <Row className="mt-1 border w-100 StudentDetails" >
                <Col lg={12}>
                  Address Information  <br />
                  <Row>
                    <Form.Label column lg={2} >
                     House No:
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="" />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label column lg={2}>
                  Street Name :
                    </Form.Label>
                    <Col className="mt-3">
                      <Form.Control type="text" placeholder="" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Form.Label column lg={2}>
                      Area Name :
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="" />
                    </Col>
                    <Form.Label column lg={2}>
                      Pincode:
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="" />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label column lg={2}>
                      State :
                    </Form.Label>
                    <Col>
                      <Form.Control type="text" placeholder="" />
                    </Col>
                    <Form.Label column lg={2}>
                    Nation:
                    </Form.Label>
                    <Col >
                      <Form.Control type="text" placeholder="" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-3">
          <Button href="/Admin_student_data" className="bg-success px-2  mt-4">Add Student</Button></div>
      </Container>
    </Navmenu>
  );
}

export default Studentform;
