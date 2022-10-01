import React from "react";
import Usernav from "./Usernav"
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Useracademy from "./Useracademy";

const Usermain = () => {
  return (
    <>
      <Usernav>
        <div className="d-flex justify-content-center">
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
        <div className="mt-5">
          <Useracademy />
        </div>
      </Usernav>
    </>
  );
};

export default Usermain;
