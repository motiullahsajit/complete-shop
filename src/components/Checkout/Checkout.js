import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { connect } from "react-redux";
import PaymentCard from "../PaymentCard/PaymentCard";

const Checkout = ({ cart }) => {
  console.log(cart);

  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7">
          <Elements stripe={stripePromise}>
            <PaymentCard cart={cart} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};
export default connect(mapStateToProps)(Checkout);
