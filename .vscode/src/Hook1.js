import React, {useState}from 'react'

const Hook1 = () => {
    const [data,setData]=useState({name:'juliet',age:106,occupation:'senior dev'});    
    let changeName=()=>{
        setData({name:'david',age:200});
    }
  return (
    <div>
        
        {/* <h1>{data.name}</h1>
        <p>{data.age}</p>
        <button onClick={()=>{
             changeName();
            console.log('wassup');

        }}>Change name</button> */}


    </div>
  )
}

export default Hook1