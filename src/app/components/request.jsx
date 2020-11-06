import React, { useState } from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Status from './elements/status';
import Table from './elements/table';

export default function Request({response}){

  const [itemTime,setItem] = useState({});
  
  let obj={}
  if(itemTime)
    obj={...itemTime};
  function handleClick(time,item){
    if(!obj[item.name]) 
      obj[item.name] = "";
    obj[item.name]= {time,item}
    setItem(obj);
  }

  let button1={className: "re",name:"Reschedule"}
  let button2={className:"acc", name:"Accept Request",link:"service"}
  
  return(
          <>
            {
              response && response.map(({name,location,image,place,sessions,free,age},index)=>
                <div className="customer" key={index}>
                  <div className="cus">
                    <Status />
                    <CustomerInfo name={name} place={place} image={image} deals={sessions.length}/>
                    <Table free={free} selectedTime={handleClick} item={{name,location,image,age,place,sessions,free}}/>
                    <Location location={location}/>
                    <Buttons button1={button1} button2={button2}  setItem={itemTime[name]} />
                  </div>
                </div>
              )
            }
          </>
        )
}