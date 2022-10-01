import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navmenu from "./Navmenu";
import Form from "react-bootstrap/Form";

const EditAddacademyform = () => {
  return (
    <div>
      <Navmenu>
        <Container className="EditCourseform">
        <h4 >* Edit Academy details *</h4>
          <div className="d-flex justify-content-center"></div>
          <Row>
            <Col className="mt-5">
              <div>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter Academy Name"
                  className=" mt-4"
                />
              </div>
              <div>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter Academy image Url"
                  className=" mt-4"
                />
              </div>
              <div>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="Enter Academy Location"
                  className=" mt-4"
                />
              </div>
            </Col>
            <Col className="mt-5">
              <Form.Control
                type="text"
                size="lg"
                placeholder="Enter Contact Number"
                className=" mt-4"
              />
              <Form.Control
                type="text"
                size="lg"
                placeholder="Enter Academy Email"
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
            <Button href="/Admin" className="bg-success px-2  mt-4">Update Academy</Button>
          </div>
        </Container>
        </Navmenu>
        </div>
        )
        };
        export default EditAddacademyform;