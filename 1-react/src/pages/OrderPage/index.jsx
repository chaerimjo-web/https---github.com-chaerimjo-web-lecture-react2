import React from "react";
import Page from "../../components/Page";
import Title from "../../components/Title";
import NaveBar from "../../components/Navbar";

const OrderPage = () => {
  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<NaveBar />}>
        여기에 입력...
      </Page>
    </div>
  );
};
export default OrderPage;
