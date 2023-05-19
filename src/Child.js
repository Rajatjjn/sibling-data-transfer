import React,{useState} from "react";
import "./style.css";

export default function Child({change}) {
  const[input,setinput]=useState("")

  function handle(e){
    setinput(e.target.value)
change(e.target.value)
  }
  return (
    <div>
     
      <input type="text" value={input} onChange={handle}/>
    </div>
  );
}
