import React, { Component } from "react";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };
  }

  async fetch() {
    try {
      const productList = await ProductApi.fetchProductList();
      console.log("가져온 상품 목록:", productList);
      this.setState({ productList });
    } catch (e) {
      console.error("상품 목록 가져오기 실패:", e);
    }
  }

  componentDidMount() {
    this.fetch();
    console.log("test");
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}> 
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}

export default ProductPage;
