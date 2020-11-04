import React from 'react';
import {Button} from "react-bootstrap";
export default function Buttons(){
    return(
        <div className="buttons">
            <Button variant="none" className="re">Reschedule</Button>
            <Button variant="none" className="acc">Accept Request</Button>
            <div className="more">
                <i className="fas fa-ellipsis-h"></i>
                <span>More</span>
            </div>
        </div>
    )
}