import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // useEffect(() => {
  //   console.log("function's body");
  //   return console.log("function's return");
  // });

  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>I've render {count} times.</h1>
    </div>
  );
}

export default App;
