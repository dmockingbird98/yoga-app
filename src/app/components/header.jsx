import React from 'react';
import logo from "../../assets/images/logo/logo.PNG";

export default function Header(){
    return (
        <div className="header">
            <i className="fa fa-bars" />
            <i className="fas fa-search"></i>
            <img src={logo} alt="logo" />
            <i className="far fa-comment"></i>
            <i className="far fa-bell"></i>
        </div>
    )
}