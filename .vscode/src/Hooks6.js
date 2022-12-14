import React, { useEffect, useState } from "react";

const Hooks6 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log('welcome');
    // console.log('hi');
    //  setData({name:'david'});
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     setData(json);
    //   });

    let fetchResource = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let finalData = await response.json();
      console.log(finalData);
      setData(finalData);
    };
    fetchResource();
  }, []);
  return (
    <div>
      
      {data.map((datum) => {
        return (
          <div>
            <p>{datum.title} how far </p>
          </div>
        );
      })}
    </div>
  );
};

export default Hooks6;
