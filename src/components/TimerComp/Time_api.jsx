import React, { useState } from "react";
import "./Time_api.scss";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import ring from '../../assets/audio/alarm-ring.mp3';


const TimerApi = (props) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [remTime, setRemTime] = useState("00:00:00");
  const [intervalStore, setIntervalStore] = useState(null);
  const [audioStore, setAudioStore] = useState(null);


  let totalSeconds = (hour*3600) + (minute*60) + second;


  const toStr = (num) => {
    return String(num).padStart(2, "0");
  }


  const calculateTime = () => {

    let remHour = Math.floor( totalSeconds / (60 * 60) );
    let remMin = Math.floor( totalSeconds / 60 );
    remMin = remMin % 60;
    let remSec = totalSeconds % 60;


    if(totalSeconds >= 0)
    setRemTime(`${toStr(remHour)}:${toStr(remMin)}:${toStr(remSec)}`);
    // totalSeconds--;
  }


  const handleStartClick = () => {
    if(totalSeconds <= 0) return;
    calculateTime();
    if(audioStore) {
      console.log("inside clear audio");
      clearInterval(audioStore);
    }


    if(intervalStore) {
      console.log("inside clearInterval");
      clearInterval(intervalStore);
    }


    const animationName = `anim-${Date.now()}`;
    const style = document.createElement('style');
    document.head.appendChild(style);


    style.sheet.insertRule(`
      @keyframes ${animationName} {
        100% {
          stroke-dashoffset: 0;
        }
      }
    `, 0);


    document.querySelector('svg circle:nth-child(2)').style.animation = `${animationName} ${totalSeconds+1}s linear forwards`;


    let intervalId = setInterval(() => {
      if(totalSeconds <= 0) {
        clearInterval(intervalId);
        let audio = new Audio(ring);
       
        audio.play();
       
        let audioTimeoutId = setTimeout(() => {
          audio.pause(); // Pause the audio after 2 seconds
        }, 3000);


        setAudioStore(audioTimeoutId);
      }
      totalSeconds--;
      calculateTime();


    }, 1000)


    // console.log("end handleClick")
    setIntervalStore(intervalId);
  }




  // console.log("remTime: ", remTime);
  // console.log("interval outside: ", intervalStore);
  // console.log("total secs: ", totalSeconds);
  // console.log("audio interval store: ", audioStore);


  return (
    <div className={`${props.className} timer-container`}>
      <div className="left-side">
        <div className="circle">
            <p>{remTime}</p>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70" style={{}}></circle>
            </svg>
        </div>
      </div>


      <div className="right-side">
        <div className="input-time">
          <div className="input-time-data">
            <h4>Hours</h4>
            <button onClick={() => setHour(hour + 1)}>
              <BiSolidUpArrow />
            </button>
            <p>{String(hour).padStart(2, "0")}</p>
            <button onClick={() => hour > 0 && setHour(hour - 1)}>
              <BiSolidDownArrow />
            </button>
          </div>
          <div className="colons">:</div>
          <div className="input-time-data">
            <h4>Minutes</h4>
            <button onClick={() => setMinute(minute + 1)}>
              <BiSolidUpArrow />
            </button>
            <p>{String(minute).padStart(2, "0")}</p>
            <button onClick={() => minute > 0 && setMinute(minute - 1)}>
              <BiSolidDownArrow />
            </button>
          </div>
          <div className="colons">:</div>
          <div className="input-time-data">
            <h4>Seconds</h4>
            <button onClick={() => setSecond(second + 1)}>
              <BiSolidUpArrow />
            </button>
            <p>{String(second).padStart(2, "0")}</p>
            <button onClick={() => second > 0 && setSecond(second - 1)}>
              <BiSolidDownArrow />
            </button>
          </div>
        </div>


        <button className="start-btn" onClick={handleStartClick}>Start</button>
      </div>
    </div>
  );
};


export default TimerApi;



