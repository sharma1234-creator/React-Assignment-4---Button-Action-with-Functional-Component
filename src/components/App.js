import React, {Component, useState} from "react";

function App() {
  
  const [set,Csettime] = useState("");
  const handleClick = () =>{
    Csettime("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
      
      <p id="para">{set}</p>
      <button id="click" onClick={handleClick} >open</button>
    </div>
  );
}


export default App;
