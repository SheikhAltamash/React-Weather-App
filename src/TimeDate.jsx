import { convertTo12HourFormat } from "./helperfunctions.js"
import React from "react";

export default function TimeDate({ time ,sunrise , sunset,country , city}) {
  
 

  return (
    <div className="time">
      <div className="date">
        <h1 className="h1-time">{convertTo12HourFormat(time.hours,time.minutes)}</h1>
        <p className="h3-time">{time.dayName}  ,  {time.monthname}  {time.day}  {time.year}</p>
      </div>
      <div className="city">
        <div style={{ display: "flex" }}>
          &nbsp;&nbsp; <h1>{city}</h1>
          <p>{ country}</p>
        </div>
        <div style={{ display: "flex" }} className="sun-par">
          <div className="sun">
            <p>Sunrise</p> <b>{sunrise}  </b>
          </div>
          <div className="sun">
            <p>Sunset</p> <b> {sunset} </b>
          </div>
        </div>
      </div>
    </div>
  );
}
