import React from 'react';

export default function Booking(){
    return (
        <div className="customerTime">
        <p>Service is complete, Please confirm the payment amount.</p>
        <div className="payment d-flex">
            <i className="far fa-file-alt"></i>
            <h5>Invoice Item:</h5>
        </div>
        <div className="price d-flex justify-content-between align-items-center">
            <h5>Session Price</h5>
            <h6>$80.00</h6>
        </div>
    </div>
    )
}