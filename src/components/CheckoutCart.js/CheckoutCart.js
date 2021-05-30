import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useSelector } from "react-redux";
import PaymentCard from "../PaymentCard/PaymentCard";

const CheckoutCart = () => {
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const cartProducts = useSelector((state) => {
    return state.shop.cart;
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7">
          <Elements stripe={stripePromise}>
            <PaymentCard cart={cartProducts} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
