import React, { useState } from "react";
import ChildComponent from "./components/ChildComponent";
import Child2 from "./components/Child2";

function App() {
  // var t = 100;
  //t is a regular variable, not a state variable

  // const [t, setT] = useState("");
  // // function handleDataFromChild(data) {
  // //   console.log("Data received from child", data);
  // //   setT(data);
  // // }
  function handleDataFromChild2(data) {
    console.log(data);
  }

  return (
    <div>
      <h2>Parent Component</h2>
      {/* <ChildComponent onP={handleDataFromChild} /> */}
      <Child2 onQ={handleDataFromChild2} />
      {/* <h1>{t}</h1> */}
    </div>
  );
}

export default App;
