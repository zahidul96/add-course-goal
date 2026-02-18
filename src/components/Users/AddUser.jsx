import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
  const [enteredUsername, setUsername] = useState("");
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const [enteredAge, setAge] = useState("");
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    setUsername("");
    setAge("");
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
