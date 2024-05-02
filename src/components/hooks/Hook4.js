import React, {useState} from "react";

const Hook4 = () => {
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const [student, setStudent] = useState({ name: "meo", age: 20});
    return (
        <div>
            <input
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                onKeyDown = {(e) => {
                    if (e.key == "Enter") {
                        setStudent({ ... student, name: text});
                        setText("");
                        
                        // console.log(text);
                    }
                }}
            />
            <input 
                value = {number}
                onChange = {(e) => setNumber(e.target.value)}
                onKeyDown = {(e) => {
                    if (e.key == "Enter") {
                        setStudent({ ... student, age: number});
                        setNumber("");
                    }
                }}
            />

            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
        </div>
    );
};

export default Hook4;