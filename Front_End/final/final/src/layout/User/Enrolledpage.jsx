import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Usernav from "./Usernav";

function Enrolledpage() {
  return (
    <Usernav>
      <Container className="bg-secondary mt-5 p-3">
        <Row>
          <Col lg={6}>
            <div className="bg-light mt-1 p-3">
              Course Name : Dong Abacus
              <br />
              Joined date : dd/mm/yyyy
              <br />
              Course end date : dd/mm/yyyy
              <div className="d-flex justify-content-end mt-3">
                <Button
                  variant="danger text-light"
                  className="d-flex justify-content-end"
                >
                  MyLearning
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Usernav>
  );
}

export default Enrolledpage;
