import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./component/ProgressBar";
function App() {
  
  const [percent, setPercent] = useState(0);
  const [success, setSuccess] = useState(false);
  const onComplete = ()=>{
    setSuccess(true);
  }
  
  useEffect(()=>{
    setInterval(()=>{
      setPercent((prev) => prev+1)
    }, 100)
  }, [])

  
  return (
    <>
      <div className="app">
        <span> Progress Bar </span>
        <ProgressBar value = {percent} onComplete = {onComplete}/>
        <div>{success? "Success": "Loading"}</div>
      </div>
    </>
  );
}

export default App;
