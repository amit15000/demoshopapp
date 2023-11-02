import React, { useState } from "react";

function ChildComponent(props) {
  const [new_val, setValue] = useState("");

  function handleInputChange(e) {
    setValue(e.target.value);
  }
  function handleClick(e) {
    // props.onP(10);

    props.onP(new_val);
  }
  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        placeholder="Enter Value to Be Passed to Parent"
        value={new_val}
        onChange={handleInputChange}
      />
      <button onClick={handleClick} />
    </div>
  );
}

export default ChildComponent;
