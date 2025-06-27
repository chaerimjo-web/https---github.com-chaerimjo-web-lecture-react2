import React from "react";
import * as MyRouter from "../../lib/MyRouter";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";
import FormControl from "../../components/FormControl";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import ProductApi from "shared/api/ProductApi";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { product: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetch() {
    try {
      const product = await ProductApi.fetchProduct("CACDA421");
      this.setState({ product });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  handleSubmit(values) {
    console.log("here", values);
    this.props.navigate("/order");
  }

  render() {
    const { product } = this.state;
    return (
      <div className="CartPage">
        <Page
          header={<Title backUrl={"/"}>장바구니</Title>}
          footer={<PaymentButton />}
        >
          {product && <ProductItem product={product}></ProductItem>}
          <OrderForm onSubmit={this.handleSubmit} />
        </Page>
      </div>
    );
  }
}

export default MyRouter.withRouter(CartPage);
