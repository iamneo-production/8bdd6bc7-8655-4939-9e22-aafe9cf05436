import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Navmenu = (props) => {
  return (
    <div>
      <nav className=" AdminNavmenu navbar navbar-expand-md sticky-top shadow-sm mb-5  d-flex justify-content-between align-items-center">
        <div className="container ">
          <div className="py-2">
            <Navbar.Brand href="/Admin" className="fs-1">  Abacus Academy</Navbar.Brand>
          </div>
          <Nav className="mx-auto d-flex flex-nowrap">
            <Link className="text-decoration-none text-black mx-4" to="/Admin">
              Academy
            </Link>
            <Link className="text-decoration-none text-black mx-4" to="/Admin_course">
              Course
            </Link>
            <Link
              className="text-decoration-none text-black mx-4"
              to="/Admin_student_data"
            >
              Student
            </Link>
          </Nav>
          <div className="ms-auto d-none d-md-block">
            <div>
           
              <Link to="/Admin" className="btn btn-success"  type="submit"
                href="/logout">Previous</Link>&nbsp;&nbsp;

              <Link to="/" className="btn btn-danger"  type="logout"
                href="/logout">Logout</Link>
             
            </div>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default Navmenu;
