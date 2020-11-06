import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Buttons({button1,button2,setItem}){
    // function handleClick(site){
    //     window.location=`/home/${site}`;
    // }
    return(
        <div className="buttons">
            <Button variant="none" className={button1?.className}>{button1?.name}</Button>

            <Link to={{ pathname: `/home/${button2.link}`, state: { time:setItem } }} > 
                <Button variant="none" className={button2?.className}> {button2?.name}</Button>
            </Link>
            
            <div className="more">
                <i className="fas fa-ellipsis-h"></i>
                <span>More</span>
            </div>
        </div>
    )
}