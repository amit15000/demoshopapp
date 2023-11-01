import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      {/* // <div className="card"> */}
      <div>Many New Cards</div>
      {/* <div className="card">Many New Cards</div> */}
      {props.children}
      {/* {props.className} */}
    </div>
  );
}

export default Card;
