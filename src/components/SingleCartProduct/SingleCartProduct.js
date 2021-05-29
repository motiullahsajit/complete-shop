import React from "react";

const SingleCartProduct = ({ product }) => {
  const { _id, name, price, image, qty } = product;
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4">
          <figure className="d-flex">
            <img src={image} className="img-fluid w-100" alt="" />
            <figcaption>
              <h6>{name}</h6>
              <h6>{price}</h6>
              <button className="btn btn-danger">Remove</button>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4 text-center">
          {" "}
          <input type="number" value={qty} />
        </div>
        <div className="col-lg-4 text-end">
          {" "}
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
