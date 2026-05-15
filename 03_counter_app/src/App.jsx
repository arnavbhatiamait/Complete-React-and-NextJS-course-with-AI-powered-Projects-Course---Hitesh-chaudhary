import "./App.css";

export default function App() {
  return (
    <>
      <h1>Lets Build a Counter App</h1>
      <div className="card">Count is 32</div>
      <div className="">
        <button 
        onClick={()=>{}}
        style={{margin:"0 5px"}}>Increment
        </button>
        <button 
        onClick={()=>{}}
        style={{margin:"0 5px"}}>Decrement
        </button>
        <button 
        onClick={()=>{}}
        style={{margin:"0 5px"}}>Reset
        </button>
      </div>
      <div className="" style={{margin:"10px 0"}}>
        <input style={{
          width:"100px",border:"1px solid white",margin :"0 5px",padding:"0.6em 1.2em"
        }} type="text" value="3" onChange={()=>{}}/>
      <button 
      style={{
        margin:"0 5px"
      }}
      onClick={()=>{}}
      >Set to 8</button>
      </div>
    </>
  );
}