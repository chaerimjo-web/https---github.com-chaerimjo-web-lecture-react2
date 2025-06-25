import React from "react";
// import OrderableProductItem from "./pages/ProductPage/OrderableProductItem";
import createEventEmitter from "shared/lib/EventEmitter";
import * as MyRouter from "./lib/MyRouter";

const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes />
  </MyRouter.Router>
);
export default App;
