import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  
  const [set,Csettime] = useState("");
  const handleClick = () =>{
    Csettime("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
      // Do not alter the main div
      <p id="para">{set}</p>
      <button id="click" onClick={handleClick} >open</button>
    </div>
  );
}


export default App;
