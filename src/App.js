import React from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  function handleDataFromChild(data) {
    console.log("Data received from child", data);
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent onP={handleDataFromChild} />
    </div>
  );
}

export default App;
