// CircularWheel.js
import React from "react";
// import "./CircularWheel.css";

const CircularWheel = ({ hoursRotation, minutesRotation, secondsRotation }) => (
  <div className="circle">
    <div className="segment hours" style={{ transform: `rotate(${hoursRotation}deg)` }}></div>
    <div className="segment minutes" style={{ transform: `rotate(${minutesRotation}deg)` }}></div>
    <div className="segment seconds" style={{ transform: `rotate(${secondsRotation}deg)` }}></div>
  </div>
);

export default CircularWheel;
