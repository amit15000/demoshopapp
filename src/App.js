import "./App.css";
import "./components/Item";
import Item from "./components/Item";
import ProductDate from "./components/ProductDate";

function App() {
  return (
    <div className="App">
      Amit Maurya
      <Item name="Varsha"></Item>
      <Item name="Rani"></Item>
      <ProductDate></ProductDate>
    </div>
  );
}

export default App;
