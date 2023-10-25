import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div>
      <div className={`card ${props.className}`}>Many New Cards</div>
      {/* <div className="card">Many New Cards</div> */}
      {props.children}
    </div>
  );
}

export default Card;
