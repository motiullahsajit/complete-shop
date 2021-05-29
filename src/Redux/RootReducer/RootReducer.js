import { combineReducers } from "redux";
import shopReducer from "../ShopReducer/ShopReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
