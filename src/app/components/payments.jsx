import React from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Booking from './elements/booked';
import Status from './elements/status';
import payments from '../../data/payments.json';

export default function Payment({location}){
    let button1={className: "re",name:"Start Chat"}
    let button2={className:"acc", name:"Resend Invoice",link:"payment"}

    let pay = [...payments.data];

    if (location.state){
        
        let obj= {...location.state.time}
        pay = [obj,...pay];
    }
    return(
            <>
                {pay.map(({name,place,image,sessions,loc},index) => 
                                    <div className="customer" key={index}>
                                    <div className="cus">
                                    <Status />
                                    <CustomerInfo name={name} place={place} image={image} deals={sessions.length}/>
                                    <Booking />
                                    <Location location={loc}/>
                                    <Buttons button1={button1} button2={button2} setItem={{name,place,image,sessions,loc}}/>
                                </div>
                                </div>
                )}

            </>
    )
}