// Timer.js
import React, { useState, useEffect } from "react";
import CircularWheel from "../Circularwheel/Circularwheel";


const TimerComp = () => {
  const [time, setTime] = useState(10); // Initial time in seconds
  const [hoursRotation, setHoursRotation] = useState(0);
  const [minutesRotation, setMinutesRotation] = useState(0);
  const [secondsRotation, setSecondsRotation] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const timerInterval = setInterval(() => {
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        
        setHoursRotation(h * (360 / 12)); // Assuming 12 segments for hours
        setMinutesRotation(m * (360 / 60));
        setSecondsRotation(s * (360 / 60));
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [time]);

  return (
    <div className="timer">
      <CircularWheel
        hoursRotation={hoursRotation}
        minutesRotation={minutesRotation}
        secondsRotation={secondsRotation}
      />
      <div className="timer-display">
        {`${Math.floor(time / 3600).toString().padStart(2, "0")}:${Math.floor((time % 3600) / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`}
      </div>
    </div>
  );
};

export default TimerComp;
