import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adjustQty } from "../../Redux/Action/shopAction";
import "./SingleCartProduct.css";
const SingleCartProduct = ({ product }) => {
  const { _id, name, price, image, qty } = product;
  const [quantity, setQuantity] = useState(qty);
  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    if (e.target.value !== 0) {
      const result = dispatch(adjustQty(_id, Number(e.target.value)));
      setQuantity(result.payload.qty);
    }
  };

  return (
    <div className="col-lg-12">
      <div className="row cartItem">
        <div className="col-lg-4">
          <figure className="d-flex">
            <div className="cart-img">
              <img src={image} className="img-fluid w-100" alt="" />
            </div>
            <figcaption className="cart-content">
              <h6>{name}</h6>
              <h6>Price: {price}</h6>
              <button className="btn btn-danger">Remove</button>
            </figcaption>
          </figure>
        </div>
        <div className="col-lg-4 text-center">
          <input onChange={handleQuantity} type="number" value={quantity} />
        </div>
        <div className="col-lg-4 text-end">
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
