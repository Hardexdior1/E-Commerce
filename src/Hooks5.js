import React, { useState } from "react";

const Hooks5 = () => {
  const [name1, setName1] = useState("temi");
let zz=()=>{
    setName1('david');
}
  return (
    <div>
      <p>{name1}</p>
      <button onClick={()=>{
        zz()
      }}>Click to change names</button>
    </div>
  );
};

export default Hooks5;
