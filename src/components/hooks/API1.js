import React, { useEffect, useState} from "react";
import axios from "axios";
import Student from "./Student";

const API1 = () => {
    const [data, setData] = useState(null);
    const url = "https://66338a1ef7d50bbd9b49bf48.mockapi.io/api/1/StudentList";
    //fetch api: lay data
    function getData() {
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getData(); //them dong nay thi data moi hien len  
    }, []);
    return (
        <div>
            <h1>About API</h1>
            
            {
                data&& data.map((item,index)=>(
                    <Student key={index} student={item} />
                ))
            }
           
        </div>
    );
};

export default API1;
//npm i axios

 {/* data && = neu nhu data rong thi... se thuc hien cau lenh sau */}