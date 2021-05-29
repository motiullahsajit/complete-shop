import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/shopAction";

const SingleProduct = ({ product, products }) => {
  const dispatch = useDispatch();
  console.log(dispatch);

  const { _id, name, price, image } = product;
  return (
    <div className="col-lg-4">
      <div className="card h-100" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="" />
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
