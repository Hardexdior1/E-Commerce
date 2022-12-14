import React, { useEffect, useState } from "react";

const Hookscw = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  let a=3*7

  useEffect(() => {
    let answer = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data2 = await res.json();
      console.log(data2);
      setData(data2);
      setLoading(true);
    };
    setTimeout(() => {
      answer();
    }, 5000);

    answer();
  }, []);
  return (
    <div>
        {!loading && <p>loading please wait.....</p>}
      {loading &&
        data.map((datum) => {
          return (
            <div key={datum.id}>
              <p>{datum.title}</p>
            <p>{a}</p>
            </div>
          );
        })}
    </div>
  );
};0

export default Hookscw;
