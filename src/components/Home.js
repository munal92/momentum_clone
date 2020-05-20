import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(showTime());
    }, 1000);
  });

  function showTime() {
    let today = new Date();
    let hour = today.getHours() % 12 || 12;
    let min = today.getMinutes();
   
    let secFormat =  today.getSeconds()  ;  
    let sec = ("0" + secFormat).slice(-2);
    let amPm = today.getHours() >= 12 ? "PM" : "AM";

    let curTime = {
      hour: hour,
      min: min,
      sec: sec,
      amPm: amPm,
    };

    return curTime;
  }

  return (
    <>
      <time id="time">{currentTime.hour} : {currentTime.min} : {currentTime.sec} {currentTime.amPm}</time>
      <h1>
        <span id="greeting">Good Afternoon </span>
        <span id="name">Fatih</span>
      </h1>
      <h2>What's Your Main focus For Today?</h2>
      <h2 id="focus">Join Class</h2>
    </>
  );
};

export default Home;
