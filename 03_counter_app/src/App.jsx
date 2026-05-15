import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);
  
  const incrementHandler = (num) => {
    // setCount(num+1); 
    // ! short hand notation does not change everytimr

    // ! this is the correct way to update state when it depends on previous state
    setCount((prev) => prev+num + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

  }

  return (
    <>
      <h1>Lets Build a Counter App</h1>
      <div className="card">Count is {count}</div>
      <div className="">
        <button 
        onClick={()=>setCount(count + 1)}
        style={{margin:"0 5px"}}>Increment
        </button>
        {/* ! keep the count from going below 0 */}
        <button 
        onClick={()=>setCount((prev) => Math.max(0, prev - 1))}
        style={{margin:"0 5px"}}>Decrement
        </button>
        <button 
        onClick={()=>setCount((prev) => 0)}
        style={{margin:"0 5px"}}>Reset
        </button>
      </div>
      <div className="" style={{margin:"10px 0"}}>
        <input style={{
          width:"100px",border:"1px solid white",margin :"0 5px",padding:"0.6em 1.2em"
        }} type="text" value={countToSet} onChange={(e)=>{
          setCountToSet(Number(e.target.value))}}/>
      <button 
      style={{
        margin:"0 5px"
      }}
      onClick={()=>{
        setCount(Number(countToSet))
        setCountToSet(0)
      }}
      >Set to {countToSet}</button>
      </div>
    </>
  );
}