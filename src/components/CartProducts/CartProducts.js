import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavHeader from "../../SharePages/NavHeader/NavHeader";
import SingleCartProduct from "../SingleCartProduct/SingleCartProduct";

const CartProducts = () => {
  const CartProducts = useSelector((state) => {
    return state.shop.cart;
  });
  console.log(CartProducts);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totaItems, setTotaItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    CartProducts.forEach((pd) => {
      items += pd.qty;
      price += pd.price * pd.qty;
    });
    setTotalPrice(price);
    setTotaItems(items);
  }, [CartProducts, totalPrice, setTotalPrice, totaItems, setTotaItems]);
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
        <div className="row justify-content-end">
          <div className="col-lg-6 border-top ">
            <div className="cart-bottom d-flex justify-content-between">
              <h5> Total</h5>
              <h5>{totalPrice.toFixed(2)}</h5>
            </div>
            <Link to="/checkout" className="btn btn-warning">Proceed To Checkout </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
