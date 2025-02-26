import React, { useState } from 'react';

export default function BaiTap1() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    function handleButton() {
        setGreeting("Hello " + name);
    }

    return(
      <div>
        <input 
          type="text" 
          onChange={ (e) => {setName(e.target.value)} } 
        />
        <br />
        <button onClick={handleButton}>Click</button>
        <br />
        <span>{greeting}</span>
      </div>
    );
}
