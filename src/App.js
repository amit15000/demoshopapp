import "./App.css";
import "./components/Item";
// import Item from "./components/Item";
import Car from "./components/Car";
import { useEffect, useState } from "react";
let i =0;
function App() {
  useEffect(()=>{

    console.log(i++);
    
  })
const [ name, setName]=useState("Amit")
const updateName=(prams)=>{
  console.log(prams.target.value)
  const newName=prams.target.value;
  setName(newName)
}
  console.log("Amit");
  return (
    <div className="App">
      Amit Maurya
      {/* <Item name="Geta" />
      <Item name="Kumar" />
      <Item name="Maurya" /> */}
      <Car></Car>
      <p>Name : {name}</p>
      <input onChange={updateName}></input>
      <input></input>
      
    </div>
  );
}

export default App;
