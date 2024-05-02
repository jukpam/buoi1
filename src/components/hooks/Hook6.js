import React, {useEffect, useState} from "react";

const Hook6 = () => {
    const [count, setCount] = useState(1);
    const [number, setNumber] = useState(10);
    useEffect(() => {
        console.log("render 1 lan duy nhat");
    }, [number, count]);

    console.log("render hook6");
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Count up</button>
            <h1>Number: {number}</h1>
            <button onClick={() => setNumber(number + 10)}>Set number</button>
        </div>
    );
};

export default Hook6;
