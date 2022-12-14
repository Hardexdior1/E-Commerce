// import React, { useState } from "react";

// const Signup2 = () => {
//   const [data, setData] = useState({
//       username: "",
//     password: "",
//     confirmPassword: "",
//     email: "",
//   });
//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(data);
//         }}>
//             <p>{error.usernameError}</p>
//         <input
//           onClick={(e) => {
//             setData({ ...data, username: e.target.value });
//           }}
//           type="text"
//           placeholder="username"
//         />
//         <input
//           onChange={(e) => {
//             setData({ ...data, password: e.target.value });
//           }}
//           type="password"
//           placeholder="password"
//         />
//         <input
//           onChange={(e) => {
//             setData({ ...data, password: e.target.value });
//           }}
//           type="password"
//           placeholder="confirm password"
//         />
//         <input
//           onChange={(e) => {
//             setData({ ...data, email: e.target.value });
//           }}
//           type="email"
//           placeholder="Email"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Signup2;
