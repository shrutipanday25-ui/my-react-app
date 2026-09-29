import {useState} from "react";
function  App(){
  const [count,setCount]=useState(0);
  const[isDarkMode,setIsDarkMode]=useState(false);

  function Increase(){
    setCount(prev=>prev+1);
  }
  function Decrease(){
    setCount(prev=>prev-1);
  }
  function Reset(){
    setCount (0);
  }
  function Toggletheme(){
    setIsDarkMode(prev=>!prev);
  }
return(
  <div 
  style={{
    backgroundColor: isDarkMode ? "darkgray" : "white",
        color: isDarkMode ? "white" : "black",
        minHeight: "100vh",
        padding: "30px"
  }}>
    <h1>Counter App</h1>
    <h2> Count:{count}</h2>
    <button onClick={Increase}>+</button>
    <button onClick={Decrease}>-</button>
    <button onClick={Reset}>Reset</button>
    <br/>
    <br/>
    <button onClick={Toggletheme}> Change Theme</button>

  </div>
 
);
}
export default App;