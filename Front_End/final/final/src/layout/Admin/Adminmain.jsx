import React from "react";
import Navmenu from "./Navmenu";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Useracademy from "./Adminacademy";

const Adminmain = () => {
  return (
    <>
      <Navmenu>
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
      </Navmenu>
    </>
  );
};

export default Adminmain;
