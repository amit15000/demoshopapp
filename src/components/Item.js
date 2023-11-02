import React, { useState } from "react";
import "./Item.css";

const Item = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });
  function userNameChange(e) {
    setUser({ ...user, name: e.target.value });
  }
  function userEmailChange(e) {
    setUser({ ...user, email: e.target.value });
  }
  function userAgeChange(e) {
    setUser({ ...user, age: parseInt(e.target.value) });
  }

  return (
    <div className="ID">
      <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={userNameChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={userEmailChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={userAgeChange}
        />
      </label>
      <br />
      <p>User Info:</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </div>
  );
};
export default Item;
