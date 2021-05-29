import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../RootReducer/RootReducer";

export const store = createStore(rootReducer, composeWithDevTools());
