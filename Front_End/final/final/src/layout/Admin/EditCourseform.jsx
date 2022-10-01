import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navmenu from "./Navmenu";
import Form from "react-bootstrap/Form";

const EditCourseform = () => {
  return (
    <Navmenu>
      <Container className="EditCourseform">
      <h4>* Edit Course details</h4>
        <div className="d-flex justify-content-center">
          
        </div>
        <Row>
          <Col className="mt-5">
            <div>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Course Name"
                className=" mt-4"
              />
            </div>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Enter Course Duriation "
              className=" mt-4"
            />
            <div>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Enter Course timing"
                className=" mt-4"
              />
            </div>
          </Col>
          <Col className="mt-5">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Enter"
              className=" mt-4"
            />
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                className="mt-4"
                placeholder="Academy description"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button  href="/Admin_course" className="bg-success px-2  mt-4">Update Course</Button>
        </div>
      
      </Container>
    </Navmenu>
  );
};

export default EditCourseform;
