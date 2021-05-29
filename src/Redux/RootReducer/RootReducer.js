import { combineReducers } from "redux";
import shopReducer from "../ShopReducer/ShopReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";




const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer
