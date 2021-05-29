import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  console.log(product);

  const { _id, name, price, image } = product;
  return (
    <div className="col-lg-4">
      <div className="card h-100" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
