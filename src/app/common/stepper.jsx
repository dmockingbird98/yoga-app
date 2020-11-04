import React from 'react';

export default function Stepper(){
    return (
        <div className="ml-auto">
        <div className="currentStatus d-flex align-items-center">
            <div className="round">1</div>
            <div className="rect"></div>
            <div className="round">2</div>
            <div className="rect"></div>
            <div className="round">3</div>
        </div>
    
        <div className="statusName d-flex justify-content-between">
            <h5>Request</h5>
            <h5>Service</h5>
            <h5>Payment</h5>
        </div>
    </div>
    )
}