import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from 'react-router-dom'

export default function NavBar(){
  let key = "";

  if(window.location.href.search("service") >=0 ) key = "services"
  else if(window.location.href.search("payment") >=0) key = "payments"
  else key = "requests";

    return (
        <div className="subHeader d-flex align-items-center">
        <i className="fas fa-chevron-left"></i>
        <Nav defaultActiveKey={key} as="ul">
          <Nav.Item as="li">
            <Nav.Link eventKey="requests"  as={NavLink} to="/home/requests">Requests</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="services" as={NavLink} to="/home/service">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="payments"  as={NavLink} to="/home/payment">Payments</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
}