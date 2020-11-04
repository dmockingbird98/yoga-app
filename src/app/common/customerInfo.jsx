import React from 'react';
import man from "../../assets/images/people/man.jpg";
export default function CustomerInfo(){
    return(
        <div className="customerInfo row">
            <div className="col-6 p-0 d-flex align-items-center">
                <img src={man} alt="person"/>
                <div className="custInfo">
                    <h6>Roy Fernandez</h6>
                    <h5>San Francisco</h5>
                </div>
            </div>
            <div className="col-6 p-0 d-flex align-items-center">
                <i className="far fa-handshake"></i>
                <p>You two had 12 deals before.</p>
            </div>
        </div>
    )
}