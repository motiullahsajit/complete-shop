import * as actionType from "../Action/ActionTypes";
// import { REHYDRATE } from "redux-persist/constants";
import productsData from "../../fakeData/productData.json";

const initialState = {
  products: productsData,
  cart: [], //name,id,price,qty
  currentItem: [], //name,id,price(specfic)
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const products = action.payload.products;
      const id = action.payload.id;
      const getProduct = products.find((pd) => pd._id === id);
      console.log(getProduct);
      const inCart = state.cart.find((pd) => (pd._id === id ? true : false));
      return {
        ...state,
        cart: inCart
          ? state.cart.map((pd) =>
              pd._id === id ? { ...pd, qty: pd.qty + 1 } : pd
            )
          : [...state.cart, { ...getProduct, qty: 1 }],
      };

    case actionType.REMOVE_FROM_CART:
      const remainingCart = state.cart.filter(
        (pd) => pd._id !== action.payload.id
      );
      console.log(remainingCart, "remianing cart");
      return { ...state, cart: remainingCart };

    case actionType.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((pd) =>
          pd._id === action.payload.id ? { ...pd, qty: action.payload.qty } : pd
        ),
      };

    case actionType.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
