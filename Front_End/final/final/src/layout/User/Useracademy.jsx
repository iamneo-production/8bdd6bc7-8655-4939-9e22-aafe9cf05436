import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Useracademy = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            alt="abcs"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR808-iRYKWkHwYfyTF2mIgaa2xGhDUwM9gDrV8fg84uO2UgcdTDXyqwmi3HI64EMwkE1I&usqp=CAU"
            className="w-100 h-75"
          />
          <Link to="/User_course">ABC Institute</Link>
          <p>Place :Chennai<br/>
          Contact  :3848478457<br/>
          E-mail   :abc@gmail.com
          </p>
        </Col>
        <Col>
          <img
            alt="abcs"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3w6BGh6jFQqGeSxrEvm04nGLgfr1bO6EKzYOQQop96sRmZHqKIN1T-BZyfJgdd5OBD0w&usqp=CAU"
            className="w-100 h-75"
          />
          <Link to="/User_course">QS Institute</Link>
          <p>place :Banglore<br/>
          Contact  :3693457985<br/>
          E-mail   :qs@gmail.com</p>
          
        </Col>
        <Col>
          <img
            alt="abcs"
            src="https://cdn.unicafuniversity.com/websites/unicafuniversity/wp-content/uploads/2018/01/30123421/Educational-Institutions-Management.png"
            className="w-100 h-75"
          />
          <Link to="/User_course">JS Institute</Link>
          <p>Place   : Hyderabad<br/>
          Contact    :3978904484<br/>
          E-mail     :js@gmail.com</p>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Useracademy;
