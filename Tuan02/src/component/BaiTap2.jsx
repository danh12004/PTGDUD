import React, { useState } from 'react';

export default function BaiTap2() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);

    function handleClick() {
        setResult(parseInt(a) + parseInt(b))
    }
    
    return(
      <div>
        <input type="text" name="" id="" placeholder='input a' onChange={(e) => {setA(e.target.value)}}/>
        <br />
        <input type="text" name="" id="" placeholder='input b' onChange={(e) => {setB(e.target.value)}}/>
        <br />
        <button onClick={handleClick}>Click</button>
        <br />
        <span>{result}</span>
       </div>
    )
}