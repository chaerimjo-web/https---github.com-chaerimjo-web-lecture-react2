import React from "react";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItem";
import FormControl from "../../components/FormControl";
import OrderForm from './OrderForm'

const fakeProduct = {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: 6000,
  thumbnail: "./images/menu-해물계란라면.jpg",
};

const CartPage = ({ product }) => {
  return (
    <div className="CartPage">
      <Page
        header={<Title backUrl={"/"}>장바구니</Title>}
        footer={
          <Button styleType={" brand-solid"} block form="order-form">
            결제하기
          </Button>
        }
      >
        <ProductItem product={fakeProduct}></ProductItem>
        {/* <FormControl htmlFor={'name'} label={'이름'} required >
          <input id="name" />
        </FormControl> */}
        <OrderForm />
      </Page>
    </div>
  );
};

export default CartPage;
