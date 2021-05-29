import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { UserContext } from "../../App";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const PaymentCard = ({ cart }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const [selectItem, setSelectItem] = useState({});

  useEffect(() => {
    cart.map((pd) => setSelectItem(pd));
  }, [cart]);
  console.log(selectItem, "gett all carrt item");

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSuccessMessage] = useState(false);

  // handle input change data store on state
  const handleInputChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    // stripe payment successfully done
    if (payload.paymentMethod) {
      console.log("success", payload.paymentMethod);
      setSuccessMessage(true);
      setErrorMessage("");
    }

    // handle payment error
    else {
      setErrorMessage(payload.error.message);
      setSuccessMessage("");
    }
  };

  console.log(userData, "userr  data  passed");
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="form-label my-1">
          Your Name
        </label>
        <input
          type="text"
          className="form-control my-2"
          name="name"
          id="name"
          placeholder="your name"
          onChange={handleInputChange}
          value={loggedInUser.name}
        />
        <div className="invalid-feedback">Please fill up your name.</div>
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Your email
        </label>
        <input
          type="text"
          className="form-control"
          name="email"
          id="email"
          placeholder="your email"
          onChange={handleInputChange}
          value={loggedInUser.email}
        />
        <div className="invalid-feedback">Please fill up your email.</div>
      </div>
      <div>
        <label htmlFor="address" className="form-label my-2">
          Your address
        </label>
        <input
          type="text"
          className="form-control my-2"
          name="address"
          id="address"
          placeholder="your address"
          onBlur={handleInputChange}
        />
        <div className="invalid-feedback">Please fill up your email.</div>
      </div>
      <div>
        <label htmlFor="phoneNumber" className="form-label my-1">
          Your phoneNumber
        </label>
        <input
          type="text"
          className="form-control my-2"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="your phoneNumber"
          onBlur={handleInputChange}
        />
        <div className="invalid-feedback">Please fill up your email.</div>
      </div>

      <label className="d-block my-2">
        Card number
        <CardNumberElement className="form-control mt-2" options={options} />
      </label>
      <label className="d-block my-2">
        Expiration date
        <CardExpiryElement className="form-control mt-2" options={options} />
      </label>
      <label className="d-block my-2">
        CVC
        <CardCvcElement className="form-control mt-2" options={options} />
      </label>
      <button className="btn btn-success my-3" type="submit" disabled={!stripe}>
        Payment
      </button>
      {errorMessage && <h5 className="text-danger">{errorMessage}</h5>}
      {sucessMessage && (
        <h5 className="text-success">Your Payment Successfully done</h5>
      )}
    </form>
  );
};

export default PaymentCard;
