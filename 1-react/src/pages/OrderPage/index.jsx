import React from "react";
import Page from "../../components/Page";
import Title from "../../components/Title";
import NaveBar from "../../components/Navbar";
import Card from "../../components/Card";

const OrderPage = () => {
  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<NaveBar />}>
        <Card />
      </Page>
    </div>
  );
};
export default OrderPage;
