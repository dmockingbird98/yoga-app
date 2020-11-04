import React, { useState } from 'react';

export default function Message(){
    const [showNone,setNone] = useState("");
    function handleClick(){
        setNone("showNone");
    }
    return(
        <div className={`notif ${showNone}`}>
            <div className="block">
                <div className="white-block"></div>
            </div>
            <div className="notifMessage">
                <p>These are your upcoming services. You can scan your customer's QR code before service to check-in, or scan QR code to generate invoice for payments.</p>
            </div>
            <div className="closeButton">
                <i className="fas fa-times-circle" onClick={handleClick}></i>
            </div>
        </div>
    )
}