import "./App.css";
import Card from "./components/Card";
import "./components/Item";
import Item from "./components/Item";
import ProductDate from "./components/ProductDate";

function App() {
  const today = new Date();
  const day = today.getDate();
  const response = [
    {
      itemName: "Nirma",
      itemDate: " 25",
    },
    {
      itemName: "Tirma",
      itemDate: " 23",
    },
  ];

  return (
    <div className="App">
      <Card className="cardcss">
        <div className="Amit">Amit Maurya</div>
        <Item className="i2u" name={response[1].itemName}>
          Am i visible!
        </Item>
        <Item name="Rani"></Item>
        <ProductDate aajkadin={day}></ProductDate>
      </Card>
    </div>
  );
}

export default App;
