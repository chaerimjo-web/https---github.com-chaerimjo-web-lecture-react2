import React, { createRef } from "react";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderableProductItem from "./pages/ProductPage/OrderableProductItem";

const App = () => {
  return (
    // <ProductPage />
    // <OrderPage />
    <CartPage />
  );
};
// export default App;

class MyComponent extends React.Component {
  divRef = React.createRef();

  render() {
    return <div ref={this.divRef}>DIV</div>;
  }

  componentDidMount() {
    console.log(this.divRef);
    const divElement = this.divRef.current;
    divElement.style.backgroundColor = "aqua";
    divElement.style.height = "50px";
    divElement.style.width = "50px";
  }
}

export default MyComponent;
