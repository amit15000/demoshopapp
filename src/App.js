import "./App.css";
import "./components/Item";
// import Item from "./components/Item";
import Car from "./components/Car";
function App() {
  return (
    <div className="App">
      Amit Maurya
      {/* <Item name="Geta" />
      <Item name="Kumar" />
      <Item name="Maurya" /> */}
      <Car></Car>
    </div>
  );
}

export default App;
