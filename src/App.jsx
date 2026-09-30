import {useRef,useEffect,useState,} from "react";
function App(){
  const[seconds,setSeconds]=useState(0);
  const timerRef=useRef(null)

  const StartTimer =()=>{
    if (timerRef.current===null){
      timerRef.current=setInterval (()=>{
  setSeconds(prev=>prev+1);
      },1000);

    }
  }
  const StopTimer=()=>{
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  const ResetTimer=()=>{
    StopTimer();
    setSeconds(0);
  };
  useEffect(()=>{
    return()=>{
      clearInterval(timerRef.current);
    };
  },[]);
  return(
    <>
    <h1>{seconds}</h1>
    <button onClick={StartTimer}>Start</button>
    <button onClick={StopTimer}>Stop</button>
    <button onClick={ResetTimer}>Reset</button>
    </>
  );
}
export default App;
  
