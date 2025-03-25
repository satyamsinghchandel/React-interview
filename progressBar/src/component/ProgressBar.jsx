import React, { useEffect, useState } from 'react'

function ProgressBar({value, onComplete}) {
  
  const [percent, setPercent] = useState(value);
  useEffect(()=>{
    setPercent(Math.min(100, Math.max(0,value)))
    if(percent >= 100){
        onComplete();
    }
  }, [value])
  return (
    <div className="progress">
      
      <span style={{color: percent<49?"black":"white"}}> {percent}%</span>
      <div 
        // style={{
        // width: `${percent}%`
        // }}


        // scaleX center se area lena start karta hai aur agar scale X ka value ! hai to parent container ka 100% width le lega
        // X matlab X axis --->
        style={{
            transform: `scaleX(${percent / 100})`,
            transformOrigin: "left"
          }}

        // used for accessibility
        //   aria-valuemin={MIN}
        //   aria-valuemax={MAX}
        //   aria-valuenow={percent}
        //   role="progressbar"
      ></div> 
    </div>
    
  )
}

export default ProgressBar
