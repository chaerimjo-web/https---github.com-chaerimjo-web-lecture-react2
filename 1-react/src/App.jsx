import React from "react";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderableProductItem from "./pages/ProductPage/OrderableProductItem";
import createEventEmitter from "shared/lib/EventEmitter";

const App = () => {
  const { pathname } = window.location;

  return (
    <>
      {pathname === "/cart" && <CartPage />}
      {pathname === "/order" && <OrderPage />}
      {!["/cart", "/order"].includes(pathname) && <ProductPage />}
    </>
  );
};
export default App;
