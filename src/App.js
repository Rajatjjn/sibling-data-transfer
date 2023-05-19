import React,{useState} from "react";
import "./style.css";
import Child from "./Child"
import Child2 from "./Child2"

export default function App() {
  const[data,setdata]=useState("")

  function dataChange(datas){
    setdata(datas)
  }
  return (
    <div>
     
<Child change={dataChange}/>
<Child2 show={data}/>

    </div>
  );
}
