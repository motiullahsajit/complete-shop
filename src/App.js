import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
// import CartProducts from "./components/Cart/CartProducts";
// import Checkout from "./components/Checkout/Checkout";
import Home from "./pages/HomePage/Home";
// Conflict Kitchen

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
          {/* <Route path="/cart-item">
            <CartProducts />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
