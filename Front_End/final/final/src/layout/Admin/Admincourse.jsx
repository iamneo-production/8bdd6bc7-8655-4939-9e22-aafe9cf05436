import React from "react";
import Navmenu from "./Navmenu";
import {Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Admincourse = () => {
  return (
    <Container>
      <Navmenu>
        <div className="d-flex justify-content-center">
          <div className="w-25">
            <Form className="d-flex Search">
              <Form.Control
                type="search"
                placeholder="Type here to Something"
                className="me-2 "
                aria-label="Search"
                size="10cm"
              />
              <Button variant="success text-light">Search</Button>
            </Form>
          </div>
        </div>
        <Row className="d-flex justify-content-center">
          <Col className="col-10 border p-5 mt-5 bg-secondary">
            <Row>
              <Col>
                <div>
                  <h3 className="my-3">Course Name: Dong Abacus </h3>
                  <h3 className="my-3">Course Duriation:3Months </h3>
                  <h3 className="my-3">
                    Course Available Timing : 6am to 6pm{" "}
                  </h3>
                </div>
              </Col>
              <Col>
                <div >
                  <h3 className="my-3">Number of Students : 222 </h3>
                  <h3 className="my-3">Course Description : yyyy</h3>
                  <h3>
                    <div>
                    <Link to="/EditCourseform">
                      <i className="bi bi-pencil-fill" />
                    </Link>
                    <i className="bi bi-trash ms-3" />
                    </div>
                  </h3>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="d-flex justify-content-center">
          <Col className="col-10 border p-5 mt-5 bg-secondary">
            <Row>
              <Col>
                <div>
                  <h3 className="my-3">Course Name: Melissa & Dong add abacus </h3>
                  <h3 className="my-3">Course Duriation:5Months </h3>
                  <h3 className="my-3">
                    Course Available Timing : 6am to 6pm{" "}
                  </h3>
                </div>
              </Col>
              <Col>
                <div>
                  <h3 className="my-3">Number of Students : 122 </h3>
                  <h3 className="my-3">Course Description : yyyy</h3>
                  <h3>
                    <Link to="/EditCourseform">
                      <i className="bi bi-pencil-fill" />
                    </Link>
                    <i className="bi bi-trash ms-3" />
                  </h3>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="bg-success px-2  mt-4" href="/Admin_add_course">
            Add Course
          </Button>
        </div>
      </Navmenu>
    </Container>
  );
};

export default Admincourse;
