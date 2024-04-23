import React from "react";

const ProductDetail = (props) => {
    const {tensp, price1, xuatxu} = props;
    return (
        <div>
            <h1>Product detail</h1>
            <p>Ten san pham: {props.tensp}</p>
            <p>Gia: {price1}</p>
            <p>Xuat xu: {xuatxu}</p>
        </div>
    );
};
   
export default ProductDetail;