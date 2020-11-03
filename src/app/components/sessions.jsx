import React from 'react'
import yoga from "../../assets/images/sessions/yoga.PNG";

export default function Sessions() {
    return(
        <div className="sessions">
        <div className="cardContents">
          <div className="photo">
            <img src={yoga} alt="yoga"/>
          </div>
          <div className="contents">
            <h3>Yoga and Pilate Training</h3>
            <h5>TRAINING FITNESS</h5>
            <p>This yoga and pilate sessions is designed for all level of trainees...</p>
            <div className="cost">
              <h6>For one session</h6>
              <span>$80.00</span>
            </div>
          </div>
        </div>
      </div>
    )
}