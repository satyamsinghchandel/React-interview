import { useState } from 'react'

import './App.css'
import Cell from './components/Cell'

function App() {
  
  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  const [order, setOrder] = useState([])
  const [deactivate, setDeactivate] = useState(false)
  const deactivateCells  = ()=>{
    setDeactivate(true);
    const timer = setInterval(()=>{
      setOrder((order) => {
        const newOrder = order.slice()
        newOrder.pop()
        if(newOrder.length===0){
          clearInterval(timer)
          setDeactivate(false)
        }
        return newOrder
      })
    }, 300)
  
  }
  const activateCells = (index)=>{

    
    const newOrder = order.includes(index)?order:[...order, index]
    setOrder(newOrder)
    console.log(index)
    if(newOrder.length === config.flat(1).filter(Boolean).length){
      deactivateCells();
    }
  }
  return (
    <div className='wrapper'>
      <div className='grid'>
      {
        config.flat(1).map((value, index)=>{
          return value > 0 ?(
          <Cell
          key={index}
          label={`Cell ${index}`}
          filled = {order.includes(index)}
          onClick = {()=>activateCells(index)} 
          // stoping the double click on the same button
          isDisabled={order.includes(index) || deactivate}
          />)
          :(<span/>)
        })
      }
      </div>
    </div>
  )
}

export default App
