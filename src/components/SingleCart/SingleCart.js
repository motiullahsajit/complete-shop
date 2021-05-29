import React, {useState } from "react";
import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../../../Redux/Action/shopAction";

const SingleCart = ({ product, cart, removeCart, adjustQty }) => {
  const { name, qty, price, _id } = product;
  const [quantity, setQuantity] = useState(qty === 0 ? 1 : qty);
  const totalPrice = qty * price;

  const [subTotal, setSubTotal] = useState(totalPrice);

  const handleQuantity = (e) => {
    if (e.target.value !== 0) {
      const result = adjustQty(_id, Number(e.target.value));
      setQuantity(result.payload.qty);
    }
  };

  return (
    <div className="col-lg-4">
      <div className="border p-3 my-3">
        <h4>{name}</h4>
        <h4>price: {price}</h4>
        <input
          onChange={handleQuantity}
          min="1"
          type="number"
          value={quantity}
        />
        <h5>totalPrice:{totalPrice}</h5>
        <button
          onClick={() => removeCart(_id)}
          className="btn-primary my-3 btn d-block"
        >
          Remove
        </button>
        <h3>{subTotal}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

const mapDispatchToProps = {
  removeCart: removeFromCart,
  adjustQty: adjustQty,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCart);
