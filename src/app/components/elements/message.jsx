import React from 'react';

export default function Message(){
    return(
        <div className="notif d-flex">
            <div className="block">
                <div className="white-block"></div>
            </div>
            <div className="notifMessage">
                <p>These are your upcoming services. You can scan your customer's QR code before service to check-in, or scan QR code to generate invoice for payments.</p>
            </div>
            <div className="close">
                <i class="fas fa-times-circle"></i>
            </div>
        </div>
    )
}