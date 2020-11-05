import React from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Booking from './elements/booked';
import Status from './elements/status';

export default function Payment({location}){
    let button1={className: "re",name:"Start Chat"}
    let button2={className:"acc", name:"Resend Invoice",link:"payment"}
    
    const {item} = location?.state?.time;
    const {name,place,image,sessions,location : loc} = item;
    return(
            <>
                <div className="customer">
                    <div className="cus">
                    <Status />
                    <CustomerInfo name={name} place={place} image={image} deals={sessions.length}/>
                    <Booking />
                    <Location location={loc}/>
                    <Buttons button1={button1} button2={button2} setItem={location.state.time}/>
                </div>
                </div>
            </>
    )
}