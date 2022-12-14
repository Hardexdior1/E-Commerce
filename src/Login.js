import React, { useState } from "react";
import "./Form.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>login</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const personDetails = {
            name: username,
            pass: password,
          };
          console.log(personDetails);
        }}>
        <input
          onChange={(event) => {
            console.log(event.target.value);
            setUsername(event.target.value);
          }}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
