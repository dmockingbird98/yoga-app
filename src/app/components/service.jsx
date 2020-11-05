import React from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Status from './elements/status';

export default function Service({location}){
    let button1={className: "acc",name:"Check In"}
    let button2={className:"acc", name:"Generate Invoice",link:"payment"}
    const {item,time} = location.state.time;
    const {name,place,image,sessions,location : loc} = item;
    return(
            <>
                            <div className="customer">
                                <div className="cus">
                                    <Status />
                                    <CustomerInfo name={name} place={place} image={image} deals={sessions.length}/>
            
                                    <div className="customerTime">
                                        <p>Check in here or scan customer's QR code to check in when the service is about to start.</p>
                                        <div className="checkINTime d-flex">
                                            <i className="far fa-clock"></i>
                                            <h5>{time.time}, {time.day}</h5>
                                        </div>
                                    </div>
                                    <Location location={loc}/>
                                    <Buttons button1={button1} button2={button2} setItem={location.state.time}/>
                                </div>
                            </div>
            
        </>
    )
}