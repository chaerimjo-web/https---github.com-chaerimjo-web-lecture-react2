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
// export default App;

import MyReact from "./lib/MyReact";

const myReact = MyReact();

const countContext = myReact.createContext({
  count: 0,
  setCount: () => {},
});

class CountProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const value = {
      count: this.state.count,
      setCount: (nextValue) => this.setState({ count: nextValue }),
    };
    return (
      <countContext.Provider value={value}>
        {this.props.children}
      </countContext.Provider>
    );
  }
}

const Count = () => {
  return (
    <countContext.Consumer>
      {(value) => <div>{value.count}</div>}
    </countContext.Consumer>
  );
};

const PlusButton = () => {
  return (
    <countContext.Consumer>
      {(value) => (
        <button onClick={() => value.setCount(value.count + 1)}>
          + 카운트 올리기
        </button>
      )}
    </countContext.Consumer>
  );
};

export default () => (
  <CountProvider>
    <Count />
    <PlusButton />
  </CountProvider>
);
