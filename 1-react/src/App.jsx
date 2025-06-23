import React from "react";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderableProductItem from "./pages/ProductPage/OrderableProductItem";
import createEventEmitter from "shared/lib/EventEmitter";

const App = () => {
  return (
    // <ProductPage />
    // <OrderPage />
    <CartPage />
  );
};
export default App;

const eventEmitter = createEventEmitter(0);
const logger = (value) => console.log(value);

eventEmitter.on(logger);
console.log(eventEmitter.get());
eventEmitter.set(1);
eventEmitter.set(2);

setTimeout(() => eventEmitter.set(10), 3000);
