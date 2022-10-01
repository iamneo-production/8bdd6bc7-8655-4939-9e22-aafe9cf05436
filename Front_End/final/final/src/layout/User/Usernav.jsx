import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Usernav(props) {
  return (
    <div>
      <nav className=" AdminNavmenu navbar navbar-expand-md sticky-top shadow-sm mb-5  
      d-flex justify-content-between align-items-center">
        <div className="container ">
          <div className="py-2">
            <Navbar.Brand href="/Admin" className="fs-1">Abacus Academy</Navbar.Brand>
          </div>
          <Nav className="mx-auto d-flex flex-nowrap">
            <Link className="text-decoration-none text-black mx-4" to="/User">
              Academy
            </Link>
            <Link
              className="text-decoration-none text-black mx-4"
              to="/Enrolledpage"
            >
              Enrolled Course
            </Link>
          </Nav>
          <div className="">
            <div>
               
              <Link to="/User" className="btn btn-success"  type="submit"
                href="/logout">Previous</Link>&nbsp;&nbsp;

              <Link to="/" className="btn btn-danger"  type="submit"
                href="/logout">Logout</Link>
            </div>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
}

export default Usernav;
