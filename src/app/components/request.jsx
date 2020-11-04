import React from 'react';
import Buttons from '../common/Buttons';
import CustomerInfo from '../common/customerInfo';
import Location from '../common/location';
import Status from './elements/status';

export default function Request(){
  return(
          <>
            <Status />
            <CustomerInfo />
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
            <Location />
            <Buttons />
          </>
        )
}