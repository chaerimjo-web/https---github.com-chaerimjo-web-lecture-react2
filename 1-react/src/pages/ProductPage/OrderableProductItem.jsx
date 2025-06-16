import React from "react";
import ProductItem from "../../components/ProductItem";

const OrderableProductItem = ({ product }) => {
  const handleClick = () => {
    console.log("장바구니로 이동");
  };

  return <ProductItem product={product} onClick={handleClick} />;
};

export default OrderableProductItem;
