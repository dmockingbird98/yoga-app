import React from 'react';
import {Button} from "react-bootstrap";
import man from "../../assets/images/people/man.jpg";

export default function Customer(){
    return(
        <div className="customer">
        <div className="cus">
          <div className="statuses d-flex align-items-center ">
            <div>
              <h6>Pending Request</h6>
              <h5>10:22 am, 12/01/2019</h5>
            </div>
            <div className="ml-auto">
              <div className="currentStatus d-flex align-items-center">
                <div className="round">1</div>
                <div className="rect"></div>
                <div className="round">2</div>
                <div className="rect"></div>
                <div className="round">3</div>
              </div>
              <div className="statusName d-flex justify-content-between">
                <h5>Request</h5>
                <h5>Service</h5>
                <h5>Payment</h5>
              </div>
            </div>
          </div>
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
          <div className="customerTime">
            <p>This customer is available at:</p>
            <div className="timeTable">
              <table>
                  <tbody>
                      <tr>
                          <td><i className="far fa-clock"></i></td>
                          <td className="middle"> Sunday, December 22nd, 2019</td>
                          <td> 9:00 am - 2:00 pm</td>
                      </tr>
                      <tr>
                          <td> </td>
                          <td  className="middle"> Sunday, December 29th, 2019</td>
                          <td> 9:00 am - 2:00 pm</td>
                      </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="locations">
            <p> <i className="fas fa-map-marker-alt"></i> 50 Hagiwara tea garden DR, San Farncisco, CA 94118</p>
          </div>
          <div className="buttons">
            <Button variant="none" className="re">Reschedule</Button>
            <Button variant="none" className="acc">Accept Request</Button>
            <div className="more">
              <i className="fas fa-ellipsis-h"></i>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    )
}