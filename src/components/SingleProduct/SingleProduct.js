import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../Redux/Action/shopAction";
const SingleProduct = (props) => {
  const { food, meals, addToCart, cart } = props;
  let { mealName, price, _id } = food;

  return (
    <div className="col-lg-4 my-3 text-center">
      <div className="foods  border p-4">
        <h5>{mealName}</h5>
        <h6>Price : {price}</h6>
        <button
          onClick={() => addToCart(meals, _id)}
          type="button"
          className="btn btn-success fs-6 mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
