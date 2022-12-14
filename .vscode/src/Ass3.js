import React, { useState } from "react";

const Ass3 = () => {
  const [Names, setNames] = useState({ name: "hardex", school: "tech studio" });
  let answer = () => {
    setNames({
      name: "quwam",
      school: "o a c h s",
      resident: "ikorodu",
      age: 40,
    });
          document.body.style.background='red'
    let a = ["quwam", "ibrahim", "mr david", "juliet", "ak"];

    a.forEach((a) => {
      if (a.includes("i")) {
        console.log(a);
      }
    });


    alert("welcome");
    

  };

  return (
    <div>
      <p>{Names.school}</p>
      <p>{Names.name}</p>
      <p>{Names.resident}</p>

      <p></p>
      <button
        onMouseOver={() => {
          answer();
        }}>
        mouse on me to carry out some operations
      </button>
    </div>
  );
};

export default Ass3;
