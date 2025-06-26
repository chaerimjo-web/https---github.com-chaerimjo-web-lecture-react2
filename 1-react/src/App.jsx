import React from "react";
import createEventEmitter from "shared/lib/EventEmitter";
import * as MyRouter from "./lib/MyRouter";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import { getComponentName } from "./lib/utils";

const App = () => (
  <MyRouter.Router>
    <MyRouter.Routes>
      <MyRouter.Route path={"/cart"} element={<CartPage />} />
      <MyRouter.Route path={"/order"} element={<OrderPage />} />
      <MyRouter.Route path={"/"} element={<ProductPage />} />
    </MyRouter.Routes>
  </MyRouter.Router>
);
// export default App;

export class Header extends React.Component {
  render() {
    return <header>Header</header>;
  }
}

export class Button extends React.Component {
  handleClick = () => {
    this.props.log("클릭");
  };
  render() {
    return <button onClick={this.handleClick}>Button</button>;
  }
}

const withLogging = (WrappComponent) => {
  function log(message) {
    console.log(`[${getComponentName(WrappComponent)}] ${message}`);
  }
  class WithLogging extends React.Component {
    render() {
      const enhancedProps = {
        log,
      };
      return <WrappComponent {...this.props} {...enhancedProps} />;
    }
    componentDidMount() {
      log("마운트");
    }
  }
  return WithLogging;
};

const EnhancedHeader = withLogging(Header);
const EnhancedButton = withLogging(Button);

export default () => (
  <>
    <EnhancedHeader />
    <EnhancedButton />
  </>
);
