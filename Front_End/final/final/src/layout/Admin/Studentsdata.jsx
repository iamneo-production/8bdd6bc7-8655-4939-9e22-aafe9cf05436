import React from "react";
import Navmenu from "./Navmenu";
import { Container, Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Studentsdata = () => {
  return (
    <div>
      <Navmenu>
      <div className="d-flex justify-content-center  ">
          <div className="w-25">
            <Form className="d-flex Search">
              <Form.Control
                type="search"
                placeholder="Type here to Something"
                className="me-2 "
                aria-label="Search"
              />
              <Button variant="success text-light">Search</Button>
            </Form>
          </div>
        </div>
        <div className="my-5">
          <Container className="'mt-5">
            <Table striped>
              <thead className="bg-success">
                <tr>
                  <th>#</th>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Enrolled Course</th>
                  <th>Mobile Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>adg</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Link to="/EditStudentform">
                      <i className="bi bi-pencil-fill" />
                    </Link>

                    <i className="bi bi-trash ms-3" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mark</td>
                  <td>fgh</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                  <Link to="/EditStudentform">
                      <i className="bi bi-pencil-fill" />
                    </Link>
                    <i className="bi bi-trash ms-3" />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>fg</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                  <Link to="/EditStudentform">
                      <i className="bi bi-pencil-fill" />
                    </Link>

                    <i className="bi bi-trash ms-3" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </div>
        <div className="d-flex justify-content-end">
        <Button href="/Studentform" className= "bg-success px-2  mt-4">Add Student</Button></div>
      </Navmenu>
    </div>
  );
};

export default Studentsdata;
