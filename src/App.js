import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import CartProducts from "./components/CartProducts/CartProducts";
import CheckoutCart from "./components/CheckoutCart.js/CheckoutCart";
import Home from "./pages/HomePage/Home";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart-item">
            <CartProducts />
          </Route>
          <Route path="/checkout">
            <CheckoutCart />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
