import React from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Status from './elements/status';
import pendingServices from '../../data/service.json';

export default function Service({location}){
    let button1={className: "acc",name:"Check In"}
    let button2={className:"acc", name:"Generate Invoice",link:"payment"}
    let services = [...pendingServices.data];
    
    if (location.state){
        const {item,time} = location.state.time;
        let obj= {...item,time}
        services = [obj,...services];
    }
    return(
            <>
            {services.map(({name,place,image,sessions,time,location : loc},index)=>
                                            <div className="customer" key={index}>
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
                                                <Buttons button1={button1} button2={button2} setItem={{name,place,image,sessions,time,loc}}/>
                                            </div>
                                        </div>
            )}
        </>
    )
}