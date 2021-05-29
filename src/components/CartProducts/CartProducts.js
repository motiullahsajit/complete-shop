import React from "react";
import { useSelector } from "react-redux";
import NavHeader from "../../SharePages/NavHeader/NavHeader";
import SingleCartProduct from "../SingleCartProduct/SingleCartProduct";

const CartProducts = () => {
  const CartProducts = useSelector((state) => {
    return state.shop.cart;
  });
  console.log(CartProducts);
  return (
    <div>
      <NavHeader />
      <div className="container">
        <div className="row bg-danger">
          <div className="col-lg-4">
            <h5>Product</h5>
          </div>
          <div className="col-lg-4 text-center">
            <h5>Quantity</h5>
          </div>
          <div className="col-lg-4 text-end">
            <h5>Subtotal</h5>
          </div>
          {/* <div className="content-header d-flex justify-content-between "></div> */}
        </div>
        <div className="row">
          {CartProducts.length > 0
            ? CartProducts.map((pd) => (
                <SingleCartProduct key={pd._id} product={pd} />
              ))
            : `Loading.....`}
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
