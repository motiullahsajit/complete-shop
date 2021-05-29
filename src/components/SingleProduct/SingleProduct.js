import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/shopAction";

const SingleProduct = ({ product, products }) => {
  const dispatch = useDispatch();
  console.log(dispatch);

  const { _id, name, price, image } = product;
  return (
    <div className="col-lg-3">
      <div className="card h-100">
        <img style={{ height: "270px" }} src={image} className="card-img-top img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Price: {price}</h6>
          <button
            onClick={() => dispatch(addToCart(products, _id))}
            className="btn btn-primary"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
