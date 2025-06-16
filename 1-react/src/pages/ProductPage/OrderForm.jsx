import React from "react";
import FormControl from "../../components/FormControl";

const OrderForm = () => {
  return (
    <form className="OrderForm">
      <FormControl htmlFor={"deliveryAddress"} label={"주소"} required>
        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          placeholder="배달받을 주소를 입력하세요"
          autoFocus
          required
        />
      </FormControl>
    </form>
  );
};

export default OrderForm;
