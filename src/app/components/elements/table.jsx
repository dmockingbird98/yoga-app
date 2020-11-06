import React, { useState } from 'react';
import * as moment from 'moment';

export default function Table({free,selectedTime,item}){
  const [select,setSelect] = useState(-1)
  
  function handleDay(time){
    const free = new Date(time)
    const freeTime = moment(free);
    return freeTime.format("dddd, MMMM Do, YYYY");
  }
  function handleTime(time){
    const free = new Date(time)
    const freeTime = moment(free);
    return freeTime.format("hh:mm a");
  }
  function handleT(from,item,index){
    setSelect(index);
    selectedTime({day:handleDay(from),time:handleTime(from)},item);
  }
    return(
            <div className="customerTime">
              <p>This customer is available at:</p>
              <div className="timeTable">
                <table>
                  <tbody>
                    {free && free.map((time,index)=> 
                      <tr key={index} onClick={()=>handleT(time.from,item,index)}>
                        <td>{index ===0 ?<i className="far fa-clock"></i>:""}</td>
                        <td className="middle">{handleDay(time.from)}</td>
                        <td>{handleTime(time.from)} - {handleTime(time.to)}</td>
                        <td className="selectTick">{select === index?<i className="fas fa-check"></i>:""}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
    )
}