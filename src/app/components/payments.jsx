import React from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Status from './elements/status';

export default function Payment(){
    return(
            <>
                <Status />
                <CustomerInfo />
                <div className="customerTime">
                    <p>Service is complete, Please confirm the payment amount.</p>
                    <div className="payment d-flex">
                        <i class="far fa-file-alt"></i>
                        <h5>Invoice Item:</h5>
                    </div>
                    <div className="price d-flex justify-content-between align-items-center">
                        <h5>Session Price</h5>
                        <h6>$80.00</h6>
                    </div>
                </div>
                <Location />
                <Buttons />
            </>
    )
}