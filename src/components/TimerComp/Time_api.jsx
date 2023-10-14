import React, { useState, useEffect } from "react";
import "./Time_api.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = (props) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [intervalStore, setIntervalStore] = useState(null);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);

  const [remTime, setRemTime] = useState("00:00:00");

  useEffect(() => {
    const seconds = hour * 3600 + minute * 60 + second;
    setTotalSeconds(seconds);
    setRemTime(formatTime(seconds));
  }, [hour, minute, second]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleStartClick = () => {
    if (isTimerPlaying) {
      clearInterval(intervalStore);
      setIsTimerPlaying(false);
    } else {
      const intervalId = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds - 1);
        setRemTime(formatTime(totalSeconds - 1));
      }, 1000);
      setIntervalStore(intervalId);
      setIsTimerPlaying(true);
    }
  };

  return (
    <div className={`${props.className} timer-container`}>
      <div className="left-side">
        <CountdownCircleTimer
          isPlaying={isTimerPlaying}
          duration={totalSeconds}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        >
          {({ remainingTime }) => formatTime(remainingTime)}
        </CountdownCircleTimer>
      </div>

      <div className="right-side">
        <div className="input-time">
        <div className="input-time-data">
            <h4>Hours</h4>
            <button onClick={() => setHour(hour + 1)}>
              {/* <BiSolidUpArrow/> */}
            </button>
            <p>{String(hour).padStart(2, "0")}</p>
            <button onClick={() => hour > 0 && setHour(hour - 1)}>
              {/* <BiSolidDownArrow /> */}
            </button>
          </div>
          <div className="colons">:</div>
          <div className="input-time-data">
            <h4>Minutes</h4>
            <button onClick={() => setMinute(minute + 1)}>
              {/* <BiSolidUpArrow /> */}
            </button>
            <p>{String(minute).padStart(2, "0")}</p>
            <button onClick={() => minute > 0 && setMinute(minute - 1)}>
              {/* <BiSolidDownArrow /> */}
            </button>
          </div>
          <div className="colons">:</div>
          <div className="input-time-data">
            <h4>Seconds</h4>
            <button onClick={() => setSecond(second + 1)}>
              {/* <BiSolidUpArrow /> */}
            </button>
            <p>{String(second).padStart(2, "0")}</p>
            <button onClick={() => second > 0 && setSecond(second - 1)}>
              {/* <BiSolidDownArrow /> */}
            </button>
          </div>

        </div>
        <button className="start-btn" onClick={handleStartClick}>
          {isTimerPlaying ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
