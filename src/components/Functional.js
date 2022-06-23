import React, { useState, useEffect } from 'react';

function Functional() {
 // Declare a new state variable, which we'll call "count"
 const [count, setCount] = useState(0);
 const [higherCount, setHigherCount] = useState(0);
 const [timer, setTimer] = useState(10)

//  useEffect takes two parameters, one is a function that we want to happen, and then the array that specify the moment we want it to happen, it is depending on changes on the state
 useEffect(()=>{
    // timerFunction()
    setHigherCount(0)
    console.log("useEffect is being fired")
 },[count])

 const timerFunction = () => {
     setInterval(()=>{
         setTimer(timer+1)
        }, 1000)
}

  return (
    <div>
      <p>TIMER: {timer} seconds since we loaded this component</p>
      <p>You clicked count {count} times</p>
      <button onClick={() => setCount(chinchilla => chinchilla - 1)}>
        -1
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <p>You clicked Higher count {higherCount} times</p>
      <button onClick={() => setHigherCount(chinchilla => chinchilla - 1)}>
        -1
      </button>
      <button onClick={() => setHigherCount(0)}>
        Reset
      </button>
      <button onClick={() => setHigherCount(higherCount + 1)}>
        +1
      </button>
    </div>
  );
}

export default Functional