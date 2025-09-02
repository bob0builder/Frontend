import React, { useState } from 'react';

const CounterBasic = () => {
    const[count, setCount] = useState(0);

    return(
        <div style= {{ padding:'20px', border: '1px solid #ccc', margin:'10px' }}>
            <h2>useState Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increament</button>
            <button onClick={() => setCount(count-1)}>Decreament</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default CounterBasic;