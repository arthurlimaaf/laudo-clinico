// import React, { useState, useEffect } from "react";
// import * as C from "./styles";
// // import api from "../../api/api";
// import Input from '../../components/Input';
// // import io from 'socket.io-client';
// import icct from '../../../src/icct-logo.png';

// // const socket = io('http://localhost:8005')
// // socket.on('connect', () => console.log('[IO] Connect => New Connection'))

// function Scanner() {

//   // const [message, setMessage] = useState('');

//   // const sendMessage = () => {
//   //   socket.emit("message", message );
//   // }

//   // useEffect(() => {
//   //   socket.on("message", (data) => {
//   //     setMessage(data);
//   //   });
//   // }, [socket]);

//   // useEffect(() => {
//   //     api.get('api/loading/')
//   //     .then(res => {
//   //       console.log("Teste...",res.data.result)
//   //       setDate(res.data.result)
//   //     }).catch(err => console.log(err))
//   //     }, []);

//   // const arr = data.map((data, index) => {
//   //     return (
//   //         <h1>{data.serial}</h1>

//   //     )
//   // })

//   return (
//     <C.Container>
//       <img src={icct} alt="" />
//       <C.Label>AUTO LOADING SYSTEM</C.Label>
//       <C.Content2>
//         <C.textScroll>
//           {/* <input
//             placeholder="Message"
//             onChange={(event) => {
//               setMessage(event.target.value);
//             }}
//           />
//           <button onClick={sendMessage}>Send Message</button> */}

//           {/* <h1>{message}</h1> */}

//         </C.textScroll>

//       </C.Content2>

//       {/* {arr} */}

//     </C.Container>

//   );
// }

// export default Scanner;