import React from 'react';
import {Button} from "react-bootstrap";
import {connect} from 'react-redux';
import yogaAction from '../store/yogaAction';

function Buttons(props){

    function handleClick(){
        props.updateStatus(2);
    }
    return(
        <div className="buttons">
            <Button variant="none" className="re">Reschedule</Button>
            <Button variant="none" className="acc" onClick={handleClick}>Accept Request</Button>
            <div className="more">
                <i className="fas fa-ellipsis-h"></i>
                <span>More</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    
});
const mapDispatchToProps ={
    updateStatus: yogaAction.updateStatus,
};


export default connect(mapStateToProps, mapDispatchToProps)(Buttons);