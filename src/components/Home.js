import React, { useState, useEffect } from "react";

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import imgMor from "../img/morning.jpg"
import imgAft from "../img/afternoon.jpg"
import imgNight from "../img/night.jpg"



const Home = () => {
  const [currentTime, setCurrentTime] = useState({});
  const [inputName , setInputName] = useState({
    name: "'Your Name Here'",
    isToggleName: false,
    focus: "'Enter Your Focus Today'",
    isToggleFocus: false
   
  });
  useEffect(() => {
   const initialName =  window.localStorage.getItem('name');
   const initialFocus = window.localStorage.getItem('focus');
   setInputName({ name: initialName , focus: initialFocus})
   
  },[]);
  
  useEffect(() => {
   
    setTimeout(() => {
      setCurrentTime(showTime());
    }, 1000);
  });

  function showTime() {
    const time = document.getElementById('time'),
    greeting = document.getElementById('greeting')
     
    let today = new Date();
    let hour = today.getHours() % 12 || 12;
    let min =  ("0" + today.getMinutes()).slice(-2);
   
   
    let secFormat =  today.getSeconds()  ;  
    let sec = ("0" + secFormat).slice(-2);
    let amPm = today.getHours() >= 12 ? "PM" : "AM";

    if(today.getHours() <12){
      document.body.style.backgroundImage = `url(${imgMor})`
      greeting.textContent= 'Good Morning '
      
    }else if(today.getHours()<18){
      document.body.style.backgroundImage = `url(${imgAft})`
      greeting.textContent= 'Good Afternoon '
    }else{
      document.body.style.backgroundImage = `url(${imgNight})`
      greeting.textContent= 'Good Evening '
    }

    let curTime = {
      hour: hour,
      min: min,
      sec: sec,
      amPm: amPm,
     
    };

    return curTime;
  }

const handleToogle = () => {
  
  if(!inputName.isToggleName){
    if(inputName.name === "'Your Name Here'"){
      setInputName({...inputName, isToggleName:true , name: "" })
    }else {
      setInputName({...inputName, isToggleName:true  })
    }
   
  }else{
    if(inputName.name === ""){
      setInputName({...inputName, isToggleName:false ,name:"'Your Name Here'"  })
    }else{
      setInputName({...inputName, isToggleName:false })
    }
    
  }
   
}

const handleToogleFocus = () => {
  if(!inputName.isToggleFocus){
    if(inputName.focus === "'Enter Your Focus Today'"){
      setInputName({...inputName, isToggleFocus:true , focus: "" })
    }else {
      setInputName({...inputName, isToggleFocus:true  })
    }
   
  }else{
    if(inputName.focus === ""){
      setInputName({...inputName, isToggleFocus:false ,focus:"'Enter Your Focus Today'"  })
    }else{
      setInputName({...inputName, isToggleFocus:false })
    }
    
  }
   
}


const handleChange = (e) => {
  setInputName({...inputName , [e.target.name] :e.target.value})
  if(e.target.name === 'name'){
    window.localStorage.setItem('name', e.target.value)
  }else if(e.target.name === 'focus'){
    window.localStorage.setItem('focus', e.target.value)
  }
  
  console.log(inputName)
}


  return (
    <>
      <time id="time">
        {currentTime.hour} : {currentTime.min} : {currentTime.sec}{" "}
        {currentTime.amPm}
      </time>
      <h1>
        <span id="greeting">Good Afternoon </span>

        {inputName.isToggleName ? (
          // <span id="name">
            <ClickAwayListener
              
              onClickAway={() =>
                handleToogle()
              }
            >
              <input
                id = "inputName"
                onSubmit={handleToogle}
                name="name"
                value={inputName.name}
                onChange={handleChange}
                onKeyPress={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.which === 13 ||
                    event.keyCode === 13
                  ) {
                    // setInputName({ ...inputName, isToggleName: false });
                    return handleToogle();
                  }

                }}
              />
            </ClickAwayListener>
          // </span>
        ) : (
          <span onClick={() => handleToogle() } id="name">
            {inputName.name}
          </span>
        )}

        {/* <span contentEditable='true'  id="name">Enter Name</span> */}
      </h1>
      <h2>What's Your Main Focus For Today?</h2>

      {inputName.isToggleFocus ? (
          <h2 id="focus">
            <ClickAwayListener
              
              onClickAway={() =>
                handleToogleFocus()
              }
            >
              <input
                onSubmit={handleToogleFocus}
                name="focus"
                value={inputName.focus}
                onChange={handleChange}
                onKeyPress={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.which === 13 ||
                    event.keyCode === 13
                  ) {
                    // setInputName({ ...inputName, isToggleName: false });
                    return handleToogleFocus();
                  }

                }}
              />
            </ClickAwayListener>
          </h2>
        ) : (
          <h2 onClick={() => handleToogleFocus()} id="focus">
            {inputName.focus}
          </h2>
        )}




      
    </>
  );
};

export default Home;
