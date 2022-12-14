

// import React, { useRef, useState } from "react";
// import eyeOpen from "./imagesfolder/eye-fill.svg";
// import eyeClose from "./imagesfolder/eye-slash-fill.svg";

// const LoginPro = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(true);
//   let inputRef = useRef();

//   let handleEye = () => {
//     if (passwordVisible == true) {
//       inputRef.current.type = "text";
//     } else {
//      inputRef.current.type = "password";
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form action="">
//         <input type="text" placeholder="username" />
//         <div>
//           <input
//             ref={inputRef}
//             onChange={(e) => {}}
//             type="password"
//             placeholder="password"
//           />

//           {passwordVisible ? (
//             <img
//               onClick={() => {
//                 setPasswordVisible(false);
//                 handleEye()
//               }}
//               src={eyeOpen}
//               alt=""
//             />
//           ) : (
//             <img
//               onClick={() => {
//                 setPasswordVisible(true);
//                 handleEye()
//               }}
//               src={eyeClose}
//               alt=""
//             />
//           )}
//         </div>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPro;


