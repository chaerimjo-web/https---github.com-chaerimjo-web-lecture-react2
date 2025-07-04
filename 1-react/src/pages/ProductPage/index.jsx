import React, { Component } from "react";
import * as MyLayout from "../../lib/MyLayout";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";
import OrderableProductItem from "./OrderableProductItem";
import Dialog from "../../components/Dialog";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };
  }

  async fetch() {
    const { openDialog, closeDialog } = this.props;
    openDialog(<Dialog />);
    try {
      const productList = await ProductApi.fetchProductList();
      console.log("가져온 상품 목록:", productList);
      this.setState({ productList });
      closeDialog();
    } catch (e) {
      console.error("상품 목록 가져오기 실패:", e);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}> 
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <OrderableProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}

export default MyLayout.withLayout(ProductPage);
