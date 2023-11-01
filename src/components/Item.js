import React, { useState } from "react";
import "./Item.css";
// function Item(props) {
const Item = (props) => {
  //   const ItemName = props.name;

  const [ItemName, setTitle] = useState(props.name);

  function clickHandler() {
    setTitle("Sheetal");
    console.log("Clicked");
  }
  return (
    <div className="name">
      <span>
        <h1>{ItemName}</h1>
      </span>

      <button onClick={clickHandler}>Add to Card</button>
    </div>
  );
};
export default Item;
