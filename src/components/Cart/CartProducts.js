import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavHeader from "../../../SharePages/NavHeader/NavHeader";
import SingleCart from "../SingleCart/SingleCart";

const CartProducts = ({ cart }) => {
  console.log(cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totaItems, setTotaItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((pd) => {
      items += pd.qty;
      price += pd.price * pd.qty;
    });
    setTotalPrice(price);
    setTotaItems(items);
  }, [cart, totalPrice, setTotalPrice, totaItems, setTotaItems]);

  return (
    <div>
      <NavHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {cart.map((pd) => (
                <SingleCart key={pd._id} product={pd} />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border p-3">
              <h4>Items : {totaItems}</h4>
              <h4>Price: $ {totalPrice}</h4>
              <Link to="/checkout" className="btn btn-success">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

export default connect(mapStateToProps)(CartProducts);
