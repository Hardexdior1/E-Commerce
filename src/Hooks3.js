// import React, { useEffect, useState } from 'react'

// const Hooks3 = () => {
//     const[data,setData]=useState([])
//     const[name,setName]=useState('david');
//     function changeName(){
//         if(name=='david'){
//             setName('precious')
//         }else{
//             setName('David')
//         }
//     }
     
//     useEffect(()=>{
//         console.log('welcome');
//      fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => {

//     console.log(json)
//     setData(json)

// })
//     },[]);
//     useEffect(()=>{
//         console.log('i just ran');
//     },[name]);
//   return (
//     <div>

//   <p>{name}</p>
//   <button onClick={()=>{
//     changeName()
//   }}>Change</button>


//     </div>
//   )
// }

// export default Hooks3