// import { getDefaultNormalizer } from "@testing-library/react";
// import React, { useRef, useState } from "react";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   // const[password, setPassword] = useState("");

//   const [data, setData] = useState({
//     username: "",
//      password: "",
//     confirmPassword: "",
//   });
//   let inputRef = useRef();

//   // let firstPassword = () => {
//   //   if (firstPassword.value.length > 5 == true) {
//   //     console.log("correct password");
//   //   }
//   // };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form action="">
//         <input
//           ref={inputRef}
//           onChange={(event) => {
//             setData({ ...data, username: event.target.value });
//             console.log(event.target.value);
//           }}
//           type="text"
//           placeholder="username"
//         />
//         <div>
//           <input
//             onChange={(e) => {
//               if (e.value > 5 && e.target.value.endsWith("@gmail.com")) {
//                 console.log("correct");
//                 console.log(e.target.value);
//               } //else {
//               //console.log("not correct");
//               //}
//             }}
//             type="email"
//             placeholder="email"
//           />{" "}
//           <br /> <br />
//           <input
//             onChange={(e) => {
//               console.log(e.target.value);
//             }}
//             type="password"
//             placeholder="password"
//           />
//           <br />
//           <input
//             onChange={(e) => {
//               if (e.target.value == password) {
//                 console.log("correct");
//                 console.log(e.target.value);
//               } else {
//                 console.log("not correct");
//               }
//             }}
//             type="password"
//             placeholder="confirm password"
//           />
//         </div>

//         <button>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
