import React from 'react';
// import man from "../../assets/images/people/man.jpg";
export default function CustomerInfo({name,place,deals,image}){
    return(
        <div className="customerInfo row">
            <div className="col-6 p-0 d-flex align-items-center">
                <img src={image} alt="person"/>
                <div className="custInfo">
                    <h6>{name}</h6>
                    <h5>{place}</h5>
                </div>
            </div>
            <div className="col-6 p-0 d-flex align-items-center">
                <i className="far fa-handshake"></i>
                <p>You two had {deals} deals before.</p>
            </div>
        </div>
    )
}