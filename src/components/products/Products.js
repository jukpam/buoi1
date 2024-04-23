import React from "react";
import ProductDetail from "../product_detail/Product_Detail";

const Products = () => {
    // const tensp = "Dong ho treo tuong";
    // const price = 30000;
    const arr = [
        {
            id: 1,
            name: "Dong ho treo tuong",
            origin: "Trung Quoc",
        },
        {
            id: 2,
            name: "Tranh treo tuong",
            origin: "Han Quoc",
        },
        {
            id: 3,
            name: "Den treo tuong",
            origin: "An Do",
        },
        {
            id: 4,
            name: "Quat treo tuong",
            origin: "Thai Lan",
        },
    ]
    return (
        <div> 
            {arr.map((item) => (
                <ProductDetail tensp={item.name} price1={3000} xuatxu={item.origin} />
            ))}
        </div>
    );
};

export default Products;