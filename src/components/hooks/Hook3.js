import React, {useState} from "react";

const Hook3 = () => {
    const [student, setStudent] = useState({ name: "Le Van Meo", age: 20});
    const change_name = () => {
        setStudent({...student, name: "Le Tho"}); 
    };
    const change_age =() => {
        setStudent({...student, age: "30"});
    };
    return (
        <div> 
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <button onClick={change_name}>Change name</button>
            <button onClick={change_age}>Change age</button>
        </div>
    );
};

export default Hook3;