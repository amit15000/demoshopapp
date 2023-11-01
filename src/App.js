import "./App.css";
import Card from "./components/Card";
import "./components/Item";
import Item from "./components/Item";
import Parent from "./components/Item";
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
    <div className="child">
      {/* <Card className="cardcss">
        <div className="Amit">Amit Maurya</div>
        <Item className="i2u" name={response[1].itemName}>
          Am i visible!
        </Item>
        <Item name="Rani"></Item>
        <ProductDate a
        ajkadin={day}></ProductDate>
      </Card> */}

      <Item className="brother"></Item>
    </div>
  );
}

export default App;
