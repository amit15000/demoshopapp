import React, { useState } from "react";
import "./App.css";
import "./components/Item";
import Item from "./components/Item";
import Forms from "./components/Form";
function App() {
  const [title, setTitle] = useState("Akela Amit");

  return (
    <div>
      <Item name="Amit"></Item>
      <Item name="Sumit"></Item>
      <Item name="Varsha"></Item>

      <Forms></Forms>
    </div>
  );
}

export default App;
