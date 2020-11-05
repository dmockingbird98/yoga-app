import React from 'react';
import * as moment from 'moment';

export default function Table({free,selectedTime,item}){

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
    return(
            <div className="customerTime">
              <p>This customer is available at:</p>
              <div className="timeTable">
                <table>
                  <tbody>
                    {free && free.map((time,index)=> 
                      <tr key={index} onClick={()=>selectedTime({day:handleDay(time.from),time:handleTime(time.from)},item)}>
                        <td>{index ===0 ?<i className="far fa-clock"></i>:""}</td>
                        <td className="middle">{handleDay(time.from)}</td>
                        <td>{handleTime(time.from)} - {handleTime(time.to)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
    )
}