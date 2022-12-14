import React from 'react'

const Prompt = (props) => {
    let anything=props.newArr
  return (
    <div>{anything.map
      ((anything)=>{
         return <p>hi {anything}</p>


         


    })}</div>
  );
};

export default Prompt