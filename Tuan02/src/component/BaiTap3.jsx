import React, { useState } from 'react';
import './BaiTap3.css';

export default function BaiTap3() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('');

    function handleRadio(e) {
        setOperator(e.target.value)
    }

    function handleClick() {
        if (operator == '+') {
        setResult(parseInt(a) + parseInt(b))
        } else if (operator == '-') {
        setResult(parseInt(a) - parseInt(b))
        } else if (operator == '*') {
        setResult(parseInt(a) * parseInt(b))
        } else if (operator == '/') {
        setResult(parseInt(a) / parseInt(b))
        }
    }
    
    return(
      <div>
        <input type="text" name="" id="" placeholder='input a' onChange={(e) => {setA(e.target.value)}}/>
        <br />
        <input type="text" name="" id="" placeholder='input b' onChange={(e) => {setB(e.target.value)}}/>
        <br />
        <input onChange={handleRadio} type="radio" name="group" id="" value='+' /> <span>+</span>
        <input onChange={handleRadio} type="radio" name="group" id="" value='-' /> <span>-</span>
        <input onChange={handleRadio} type="radio" name="group" id="" value='*' /> <span>*</span>
        <input onChange={handleRadio} type="radio" name="group" id="" value='/' /> <span>/</span>
        <br />
        <button onClick={handleClick}>Click</button>
        <br />
        <span>{result}</span>
       </div>
    )
}