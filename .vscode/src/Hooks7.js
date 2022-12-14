import React, { useRef } from "react";
// useref is the hook we use to get the current things on our web page
const Hooks7 = () => {
  let inputRef = useRef();
  let anotherRef = useRef();
  console.log(useRef);
  return (
    <div>
      <h1>another login </h1>
      <form action="">
        <input
          ref={inputRef}
          onChange={() => {
            console.log(inputRef);
             console.log(inputRef.current.value);
            inputRef.current.style.borderColor = "green";
          }}
          type="text"
          placeholder="username"
        />
        <input
          ref={anotherRef}
          onChange={(e) => {
            let another = e.target.value;
             if (another.length > 7){
                anotherRef.current.style.borderColor='blue'
             }else{
                 anotherRef.current.style.borderColor='purple'
             }
            console.log(anotherRef);
            console.log(e.target.value);
          }}
          type="text"
          placeholder="password"
        />
      </form>
      <button>Login</button>
    </div>
  );
};

export default Hooks7;
