import React from "react";
import Button from "../../components/Button";

const PaymentButton = () => {
  return (
    <div className="PaymentButton">
      <Button
        styleType={" brand-solid"}
        block
        form="order-form"
        style={{ padding: "10px 0px" }}
      >
        결제하기
      </Button>
    </div>
  );
};

export default PaymentButton;
