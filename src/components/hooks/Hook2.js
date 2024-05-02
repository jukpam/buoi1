import React, {useState} from "react";

const Hook2 = () => {
    const [money, setMoney] = useState(10);
    const handle_X2 = () => {
        setMoney(money*2); 
    };
    const handle_X3 = () => {
        setMoney(money*3);
    };
    console.log("render hook2");
    return (
        <div>
            <p>money: {money}</p>
            <button onClick={handle_X2}>X2</button>
            <button onClick={handle_X3}>X3</button>
        </div>
    );
};

export default Hook2;