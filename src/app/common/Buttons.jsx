import React from 'react';
import {Button} from "react-bootstrap";

export default function Buttons({button1,button2}){
    function handleClick(site){
        window.location=`/home/${site}`;
    }
    return(
        <div className="buttons">
            <Button variant="none" className={button1?.className}>{button1?.name}</Button>
            <Button variant="none" className={button2?.className} onClick={()=>handleClick(button2?.link)}>{button2?.name}</Button>
            <div className="more">
                <i className="fas fa-ellipsis-h"></i>
                <span>More</span>
            </div>
        </div>
    )
}