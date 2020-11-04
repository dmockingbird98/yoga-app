import React from 'react';

export default function Stepper(){

    let value1 = null;
    let value2=null;
    let value3 = null;
    let first = "round";
    let second="round";
    let third="round";
    let bar="rect";

    if(window.location.href.search("service") >=0 ) 
    {
        first = "blue";
        value1 = "1";
    }
    else if(window.location.href.search("payment") >=0) 
    {
        first = "blue";
        second="blue";
        bar="blueBar";
        value1 = "1";
        value2="2";
    }
    else{
        value1 = null;
        value2=null;
        value3 = null;
        first = "round";
        second="round";
        third="round";
        bar="rect";
    };
    return (
        <div className="ml-auto">
            <div className="currentStatus d-flex align-items-center">
                <div className={first}>{value1?<i className="fas fa-check"></i>:1}</div>
                <div className={bar}></div>
                <div className={second}>{value2?<i className="fas fa-check"></i>:2}</div>
                <div className={bar}></div>
                <div className={third}>{value3?<i className="fas fa-check"></i>:3}</div>
        </div>
    
        <div className="statusName d-flex justify-content-between">
            <h5>Request</h5>
            <h5>Service</h5>
            <h5>Payment</h5>
        </div>
    </div>
    )
}