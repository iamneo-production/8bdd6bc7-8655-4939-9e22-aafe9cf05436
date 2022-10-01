import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Adminacademy = () => {
  return (
    <Container>
      <Row>
        <Col className="border me-2">
          <img
            alt="abcs"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR808-iRYKWkHwYfyTF2mIgaa2xGhDUwM9gDrV8fg84uO2UgcdTDXyqwmi3HI64EMwkE1I&usqp=CAU"
            className="w-100 h-75"
          />

          <h4>Abacus Institute</h4>
          <div>
          <p className="d-flex justify-content-start">
          place :Banglore<br/>
          Contact  :3693457985<br/>
          E-mail   :abacus@gmail.com</p>
          </div>
          <div className="d-flex justify-content-start">
               <Link to="/EditAcademyform">
                <i className="bi bi-pencil-fill" />
               </Link>
            <i className="bi bi-trash ms-3" />
          </div>
        </Col>
        <Col className="border me-2">
          <img
            alt="abcs"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3w6BGh6jFQqGeSxrEvm04nGLgfr1bO6EKzYOQQop96sRmZHqKIN1T-BZyfJgdd5OBD0w&usqp=CAU"
            className="w-100 h-75"
          />
          <h4>QS Academy</h4>
          <div>
            
            <p className="d-flex justify-content-start">
            Place :Chennai<br/>
            Contact  :3848478457<br/>
            E-mail   :qs@gmail.com
          </p>
          </div>
          <div className="d-flex justify-content-start">
                    <Link to="/EditAcademyform">
                      <i className="bi bi-pencil-fill" />
                    </Link>
            <i className="bi bi-trash ms-3" />
          </div>
        </Col>
        <Col className="border me">
          <img
            alt="abcs"
            src="https://cdn.unicafuniversity.com/websites/unicafuniversity/wp-content/uploads/2018/01/30123421/Educational-Institutions-Management.png"
            className="w-100 h-75"
          />
          <h4>JS Academy</h4>
          <div>
            
            <p className="d-flex justify-content-start">
             Place   : Hyderabad<br/>
          Contact    :3978904484<br/>
          E-mail     :js@gmail.com</p>
          
          
          </div>
          <Row>
          <div className="d-flex justify-content-start">
                    <Link to="/EditAcademyform">
                      <i className="bi bi-pencil-fill" />
                    </Link>

                    <i className="bi bi-trash ms-3" />
          </div>
          </Row>
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-2">
        <Button href="/Admin_add_academy" className="btn btn-success">Add Academy</Button>
      </div>
    </Container>
  );
};

export default Adminacademy;
