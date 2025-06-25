import React from "react";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderableProductItem from "./pages/ProductPage/OrderableProductItem";
import createEventEmitter from "shared/lib/EventEmitter";
import * as MyRouter from "./lib/MyRouter";

const App = () => (
  <MyRouter.routerContext.Consumer>
    {({ path }) => (
      <MyRouter.Router>
        {path === "/cart" && <CartPage />}
        {path === "/order" && <OrderPage />}
        {!["/cart", "/order"].includes(path) && <ProductPage />}
      </MyRouter.Router>
    )}
  </MyRouter.routerContext.Consumer>
);
export default App;
