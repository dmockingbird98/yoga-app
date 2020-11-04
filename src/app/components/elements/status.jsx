import React from 'react';
import Stepper from '../../common/stepper';

export default function Status(){
    return(

        <div className="statuses d-flex align-items-center ">
            <div>
                <h6>Pending Request</h6>
                <h5>10:22 am, 12/01/2019</h5>
            </div>
            <Stepper />
        </div>
    )
}