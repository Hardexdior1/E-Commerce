/** @format */
import'./Signup3.css';


import React, { useRef, useState } from "react";

const Signup3 = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [error, setError] = useState({
    usernameError: "username too short",
    passwordError: "",
  });

  
 

  const usernameRef = useRef();

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}>
        <p ref={usernameRef}>{error.usernameError}</p>
        <input
          onChange={(e) => {
            if (e.target.value.length > 7) {
              setData({ ...data, username: e.target.value });
              usernameRef.current.classList.remove("active");
              console.log(e.target.value);
            } else {
              usernameRef.current.classList.add("active");
            }
          }}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => {
            setData({ ...data, confirmPassword: e.target.value });
          }}
          type="password"
          placeholder=" Confirm Password"
        />
        <input
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          type="email"
          placeholder="Email"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup3;
