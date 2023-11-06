import { useEffect, useState } from "react";
import "./App.css";
import "./components/Item";
let i = 1;
function App() {
  const [data, setData] = useState("");
  console.log(i++);

  useEffect(() => {
    console.log(`Render done- ${i++}`);
  });

  console.log(i++);

  const changeHandler = (e) => {
    setData(e.target.value);
    console.log(data);
  };
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
      {/* <input type="text" onChange={(e) => console.log(e.target.value)}></input> */}
    </div>
  );
}

export default App;
