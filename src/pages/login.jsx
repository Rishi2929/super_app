
// import React, { useRef } from 'react'
// import './login.css'

// function Login() {
//     const data=useRef();
//     const handleClick=()=>{
//         console.log(data.current.value,"initial value");
//         localStorage.setItem("inputvalue",data.current.value)
//     }
//     console.log(localStorage.getItem("inputvalue"),"*****")
//   return (
//     <div>

//         <input ref={data}/>
//         <button onClick={handleClick}>Add</button>
//     </div>
//   )
// }

// export default Login


import React, { useRef } from 'react';
import './login.css';

function Login() {
  const inputRefs = {
    input1: useRef(),
    input2: useRef(),
    input3: useRef(),
  };

  const handleClick = () => {
    const inputData = {
      input1: inputRefs.input1.current.value,
      input2: inputRefs.input2.current.value,
      input3: inputRefs.input3.current.value,
    };

    // Save the input data to localStorage
    localStorage.setItem('inputData', JSON.stringify(inputData));

    console.log(localStorage.getItem("inputData"),"*****")
  };

  return (
    <div>
      <input ref={inputRefs.input1} placeholder="Input 1" />
      <input ref={inputRefs.input2} placeholder="Input 2" />
      <input ref={inputRefs.input3} placeholder="Input 3" />
      <button onClick={handleClick}>Save Data</button>
    </div>
  );
}

export default Login;
