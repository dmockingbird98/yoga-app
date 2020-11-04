import React from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Status from './elements/status';

export default function Service(){
    let button1={className: "acc",name:"Check In"}
    let button2={className:"acc", name:"Generate Invoice",link:"payment"}

    return(
            <>
                <Status />
                <CustomerInfo />

                <div className="customerTime">
                    <p>Check in here or scan customer's QR code to check in when the service is about to start.</p>
                    <div className="checkINTime d-flex">
                        <i className="far fa-clock"></i>
                        <h5>1:00 pm, Sunday, December 29th, 2019</h5>
                    </div>
                </div>


                <Location />
                <Buttons button1={button1} button2={button2}/>
            </>
    )
}