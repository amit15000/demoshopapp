import React from "react";

function ChildComponent(props) {
  function handleClick(e) {
    props.onP(10);
  }
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick} />
    </div>
  );
}

export default ChildComponent;
