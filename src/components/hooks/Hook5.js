import React, { useState } from "react";

const Hook5 = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [kq, setKq] = useState(0);
    return (
        <div>
            <input placeholder="Input a" value={a} onChange={(e) => setA(e.target.value)}/> <br />
            <input placeholder="Input b" value={b} onChange={(e) => setB(e.target.value)}/> <br />
            <button onClick={() => setKq(a * 1 + b * 1)}>+</button>
            <button onClick={() => setKq(a - b)}>-</button>
            <button onClick={() => setKq(a * b)}>x</button>
            <button onClick={() => setKq(a / b)}>/</button>
            <h1>Result: {kq}</h1>
        </div>
    );
};

export default Hook5;