import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

const Header = (props) => {
  return (
    <>
      <Row>
        <Col className="header">
          <h1>Task Manager</h1>
        </Col>

        <Col>
          <Link to="task" className="nav-link">
            Task
          </Link>
        </Col>

        <Col>
          <Link to="login" className="nav-link">
            Login
          </Link>
        </Col>
      </Row>
      <Outlet />

      <hr />
    </>
  );
};

export default Header;
