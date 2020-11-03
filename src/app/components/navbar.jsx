import React from 'react';
import {Nav} from "react-bootstrap";

export default function NavBar(){
    return (
        <div className="subHeader d-flex align-items-center">
        <i className="fas fa-chevron-left"></i>
        <Nav defaultActiveKey="requests" as="ul">
          <Nav.Item as="li">
            <Nav.Link eventKey="requests">Requests</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="payments">Payments</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
}