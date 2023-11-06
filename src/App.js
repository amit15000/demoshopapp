import { useEffect, useState } from "react";
import "./App.css";
import "./components/Item";
let i = 1;
function App() {
  const [data, setData] = useState("");
  console.log(i++);

  // // every time then component renders
  // useEffect(() => {
  //   console.log(`Render done- ${i++}`);
  // });

  // [] dependency list--->mein jab change hoga tab tab chalehga
  //passed nothing means --- bas ek bar chalega after first rendering of the component.

  // //first
  // useEffect(() => {
  //   console.log(`Render done- ${i++}`);
  // }, []);

  //first + dependency change
  // useEffect(() => {
  //   console.log(`Render done- ${i++}`);
  // }, [data]);

  //add or remove event Listener
  useEffect(() => {
    console.log(10);
    return console.log(12);
  });

  console.log(i++);

  const changeHandler = (e) => {
    setData(e.target.value);
    console.log(data);
  };
  return (
    <div className="App">
      <input type="text" name="in1" onChange={changeHandler}></input>
      <br></br>
      <input type="text" name="in2"></input>
      {/* <input type="text" onChange={(e) => console.log(e.target.value)}></input> */}
    </div>
  );
}

export default App;
